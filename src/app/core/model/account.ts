import { Timestamp } from 'firebase/firestore'

export interface Account{
    name: string;
    id?: string;
    description?: string;
    users?: string[];
    //url:string;
    //iconUrl: string;
    //createDate: Timestamp;
}