import { Injectable } from '@angular/core';

import { Contact } from './contact';

import { HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';



@Injectable()





export class contactService {
  contact: Contact;
  contacts: Contact[];

  readonly baseURL = 'http://localhost:3000/api/contact';
  readonly baseURLGET = 'http://localhost:3000/api/contacts';
  readonly baseURLDLT = "http://localhost:3000/api/contact/}"
 

  //constructor() {}
  constructor(private http: HttpClient) { }

  PostContact(con: Contact) {

    return this.http.post(this.baseURL, con);
  //  }
   // }
  }
  getContactList() {
    return this.http.get(this.baseURLGET);
  }

  deleteContact(_id: number) {
    let httpParams = new HttpParams();
    let options = { params: httpParams };
    
    return this.http.delete(this.baseURLDLT +'${_id}', options);
  }
}
