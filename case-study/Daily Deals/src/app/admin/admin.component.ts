import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { coupon } from '../coupon';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  coupons: coupon[]= [];
  formValue!:FormGroup;
  userObj : coupon = new coupon("","","","","","");
  result: any;

  searchText: any;

  constructor(private adminService:AdminService, private fb:FormBuilder) { }


  ngOnInit(): void {

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
  addCoupon(){
    console.log("in add coupon method");
    this.userObj.id=this.formValue.value.id;
    this.userObj.provider=this.formValue.value.provider;
    this.userObj.code=this.formValue.value.code;
    this.userObj.category=this.formValue.value.category;
    this.userObj.description=this.formValue.value.description;
    this.userObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.AddCoupon(this.userObj).subscribe(res=>{this.coupons.push(res)});
    console.log("Coupon Added successfully");
    this.ngOnInit();
  }

  editCoupon(data:any){
    this.formValue.controls['id'].setValue(data.id);
    this.formValue.controls['provider'].setValue(data.provider);
    this.formValue.controls['code'].setValue(data.code);
    this.formValue.controls['category'].setValue(data.category);
    this.formValue.controls['description'].setValue(data.description);
    this.formValue.controls['expiryDate'].setValue(data.expiryDate);

  }


  deleteCoupon(id:String){

    console.log("in delete method")
    this.adminService.DeleteCoupon(id).subscribe(res=>{this.result=res});
    console.log("deleted User")
    this.ngOnInit();


  }

  getCoupons(){
    console.log('Test Call');
    this.adminService.getAllCoupons().subscribe(res=>{this.coupons=res});
  }

  updateCoupons(){
    console.log("in add  method");
    this.userObj.id=this.formValue.value.id;
    this.userObj.provider=this.formValue.value.provider;
    this.userObj.code=this.formValue.value.code;
    this.userObj.category=this.formValue.value.category;
    this.userObj.description=this.formValue.value.description;
    this.userObj.expiryDate=this.formValue.value.expiryDate;

    this.adminService.updateCoupon(this.userObj,this.userObj.id).subscribe(res=>{
      console.log("updated coupon successfully")
    });
  }
}
