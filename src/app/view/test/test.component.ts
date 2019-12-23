import { Component, OnInit } from '@angular/core';
import {Customer} from "../../customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name = 'dep';
  // arr = ['red','green','black','white'];
  //
  customers : Array<Customer> =[];



  constructor(private customerService:CustomerService) {
    // this.customers.push(new Customer("C001","Alisa","Pinwatta"));
    // this.customers.push(new Customer("C002","Leom","Matara"));
    // this.customers.push(new Customer("C003","Leel","Matugama"));
    // this.customers.push(new Customer("C004","Waduma","Wadduwa"));
  }

  ngOnInit() {
      this.customerService.getAllCustomers().subscribe(customers=>{
        this.customers = customers;
      },error => {
        console.log(error``);
      })

  }

}
