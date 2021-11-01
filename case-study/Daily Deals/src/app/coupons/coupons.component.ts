import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { coupon } from '../coupon';
import { AdminService } from '../service/admin.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: coupon[]= [];
  formValue!:FormGroup;
  userObj : coupon = new coupon("","","","","","");
  result: any;
  pcode: any;
  edate:any
//searchtext
  searchText: any;

  //Login
  // @ts-ignore
  public userDetails;

  constructor(private adminService:AdminService, private fb:FormBuilder, private router: Router) { }


  ngOnInit(): void {

    //login
    const storage = localStorage.getItem('google_auth');

    if (storage){
      this.userDetails=JSON.parse(storage);
    }else {
      this.signOut();
    }
    //login

    this.getCoupons()

    this.formValue=this.fb.group({
      id: [""],
      provider: [""],
      code: [""],
      category: [""],
      description: [""],
      expiryDate: [""],
    })

  }
  updatepcode(data: any,date:any){
    this.pcode=data;
    this.edate=date

  }

  getCoupons(){
    console.log('Test Call');
    this.adminService.getCoupons().subscribe(res=>{this.coupons=res});
  }

  //login
  signOut():void{
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/header').then();
  }
  //login
}
