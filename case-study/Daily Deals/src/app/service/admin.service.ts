import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coupon } from '../coupon';
// import { coupon, User } from '../coupon';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

// -----------------------------------------admin service-----------------------------------------------------------
  getAllCoupons(){
    return this.http.get<coupon[]>('http://localhost:8100/admin-service/admin/listCoupon');
  }
  public AddCoupon(c:coupon){
    return this.http.post<coupon>("http://localhost:8100/admin-service/admin/addCoupon",c);
  }

  public updateCoupon(user:coupon,id:String){
    return this.http.put<coupon>("http://localhost:8100/admin-service/admin/updateCoupon/"+id,user);
  }

  public DeleteCoupon(id:String){
    return this.http.delete("http://localhost:8100/admin-service/admin/deleteCoupon/"+id);
  }
  // -----------------------------------------Coupon service-----------------------------------------------------------
  getCoupons(){
    return this.http.get<coupon[]>('http://localhost:8100/coupon-service/coupons/list');
  }

}
