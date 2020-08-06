import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { CommonService } from '../_services/common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  
/**
 * @constructor 
 * @param router Router instance
 *  
 */
    constructor(public router:Router,
      public commonService:CommonService){}

/**
 * @Function canActivate
 * @param route ActivatedRouteSnapshot instance
 * 
 */
    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            return this.isUserLoggedIn()
          .then(result=>{
            debugger;
            switch(this.commonService.loggedInUser.role_type){
              case 'Super Admin' :
                  this.router.navigate(['/superadmin/dashboard']);
                  break;
              case 'Admin' :
                      this.router.navigate(['/admin/dashboard']);
                      break;
              case 'User' :
                  this.router.navigate(['/user/user-dashboard']);
                  break;
              case 'Supplier' :
                    this.router.navigate(['/supplier/dashboard']);
                    break;    
              default: return true;            
            }
           
          }).catch(error=>{
            return error;
          })
    }

/**
 * @Function isUserLoggedIn
 * @returns Promise
 */
    isUserLoggedIn():Promise<boolean>{
          return new Promise ((resolve,reject) =>{
              if(!localStorage.getItem('accessToken')){
                return reject(true);
              }
                resolve(true);	
          });
    }
      
}
