export interface IContact {
	id: number;
	name: string;
	email: string;
	phone: string;
	created_at: string;
}
export interface IContactUpdate {
	email?: string;
	name?: string;
	phone?: string;
}
export interface IContactDelete {
	id: number;
}
export interface IContactRequest {
	email: string;
	name: string;
	phone?: string;
}