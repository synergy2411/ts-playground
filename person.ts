export interface Person{
    firstName : string;
    lastName : string;
    isAdmin : Boolean;
}

export const MAGIC_NUMBER : number = Math.round(Math.random() * 100);