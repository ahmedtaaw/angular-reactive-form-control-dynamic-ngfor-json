import { Injectable } from '@angular/core';
import {IEmaillist} from './emaillist';

@Injectable()
export class EmaillistService {
membersJson: IEmaillist[] = [{
        "memberid": "00",
        "memberemail": "asd@asd.com"
    },
    {
        "memberid": "01",
        "memberemail": "qwe@asd.com"
    },
    {
        "memberid": "01",
        "memberemail": "bcbvsdf@asd.com"
    },
    {
        "memberid": "01",
        "memberemail": "pasw@asd.com"
    }];
  constructor() { }

}
