import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface ITweetRow extends RowDataPacket {
    id: number;
    clients_id: string;
    body: string;
    location: string;
    created_at: string
}

export function getAll() {
    return SelectQuery<ITweetRow>('SELECT * FROM tweets');
}

export function updateOne(id: number, location: string) {
    return ModifyQuery<ITweetRow>('UPDATE tweets SET location =? WHERE id =?;', [location, id])
}

export function getOne(id: number) {
    return SelectQuery<ITweetRow>('SELECT * FROM tweets WHERE id =?;', [id])
}

export function insert(body: string, location: string) {
    return ModifyQuery('INSERT INTO tweets (body, location) VALUE (?,?);', [body, location])
}

export function deleteOne(id: number) {
    return ModifyQuery<ITweetRow>('DELETE FROM tweets WHERE id =?;', [id])
}