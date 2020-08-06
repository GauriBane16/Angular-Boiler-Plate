import { Injectable } from "@angular/core";
import { bindCallback } from "rxjs";
import { BindingFlags } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root"
})
export class ApiListService {
  constructor() {}

  login: any = {
    apiName: "loginAll",
    method: "post",
    showLoader: true,
    header: false
  };

  forgetPassword: any = {
    apiName: "forgotPasswordAll",
    method: "post",
    showLoader: true,
    header: false
  };

  resetPassword: any = {
    apiName: "resetPasswordAll",
    method: "post",
    showLoader: true,
    header: false
  };

  setPassword: any = {
    apiName: "setPassword",
    method: "post",
    showLoader: true,
    header: false
  };

  

  getUserNotifications: any = {
    apiName: "getUserNotifications",
    method: "post",
    showLoader: true,
    header: true
  };

  resendEmail:any={
    apiName:"resendEmail",
    method:"post",
    showLoader:true,
    header:true
  }

  verifyEmail: any = {
    apiName: "verifyEmail",
    method: "post",
    showLoader: true,
    header: false
  };


  readNotification: any = {
    apiName: "readNotification",
    method: "post",
    showLoader: true,
    header: true
  };

  getData: any = {
    apiName: "getData",
    method: "post",
    showLoader: true,
    header: true
  };

  

  

 
}
