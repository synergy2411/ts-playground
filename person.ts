export interface Person{
    firstName : string;
    lastName : string;
    isAdmin : Boolean;
}

export const MAGIC_NUMBER : number = Math.round(Math.random() * 100);

class NewClass{}

export class MyClass{
    protected getFortune(){
        return "Today is your lucky day";
    }
}

export function myFunction(){}
