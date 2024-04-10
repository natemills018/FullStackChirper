import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";


//

export interface IMentionRow extends RowDataPacket {
    id: number;
    tweets_id: string;
    clients_id: string;
    created_at: string
}

export function getAll() {
    return SelectQuery<IMentionRow>('SELECT * FROM clients;');
}

export function getOne(id: number) {
    return SelectQuery<IMentionRow>('SELECT * FROM clients WHERE id =?;',[id])
}

export function insert(handle: string, email: string) {
    return ModifyQuery('INSERT INTO clients (handle, email) VALUES (?,?);',[handle, email])
}