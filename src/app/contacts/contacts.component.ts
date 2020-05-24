import { Component, OnInit } from '@angular/core';
import { contactService } from '../contact.service';
import {Contact} from '../contact'
import { NgForm } from '@angular/forms';
import { splitClasses } from '@angular/compiler';

 
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [contactService]
})
export class contactsComponent implements OnInit {

  ngOnInit() {
    this.resetForm();
   this.refreshContactList();

  }






  constructor(public contactService: contactService) { }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.contactService.contact = {
      _id:"",
      first_name: "",
      last_name: "",
      phone: "",

    }

  }



  onSubmit(form: NgForm) {
    this.contactService.PostContact(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshContactList();

    });
  }
    refreshContactList(){
      this.contactService.getContactList().subscribe((res)=> {
        this.contactService.contacts = res as Contact[];





      });


  }
  onDelete(_id:number, form: NgForm) {
    if (confirm('Sure to delete?') == true) {
      this.contactService.deleteContact(_id).subscribe((res) => {
        this.refreshContactList();
        this.resetForm(form);
      });
    }


  }

  }

