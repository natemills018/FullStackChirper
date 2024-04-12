export interface IClientRow {    
    id: number;
    handle: string;
    email: string;
    created_at: string
}

export interface ITweetRow {
    id: number;
    clients_id: string;
    body: string;
    location: string;
    created_at: string
}