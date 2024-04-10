import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface IClientRow extends RowDataPacket {
    id: number;
    handle: string;
    email: string;
    created_at: string
}

export function getAll() {
    return SelectQuery<IClientRow>('SELECT * FROM clients;');
}

export function getOne(id: number) {
    return ModifyQuery<IClientRow>('SELECT * FROM clients WHERE id =?;',[id])
}

export function insert(handle: string, email: string) {
    return ModifyQuery('INSERT INTO clients (handle, email) VALUES (?,?);',[handle, email])
}