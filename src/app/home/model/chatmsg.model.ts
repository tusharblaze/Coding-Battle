import{Observable} from 'rxjs';

export class ChatMsg{
    $key?:string;
    email?:string;
    username?:Observable<string>;
    message?:string;
    timesent?:string;
}