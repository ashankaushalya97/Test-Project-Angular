import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../customer";

@Injectable()
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Array<Customer>>{
    return  this.httpClient.get<Array<Customer>>('http://localhost:5050/api/v1/customers');
  }
}
