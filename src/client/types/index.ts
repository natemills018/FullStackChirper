export interface IClientRow {    
    id: number;
    handle: string;
    email: string;
    created_at: string
}

export interface ITweetRow {
    handle? :string;
    email? :string
    id: number;
    clients_id: string;
    body: string;
    location: string;
    created_at: string
}