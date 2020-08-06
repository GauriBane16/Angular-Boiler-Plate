import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Config } from './../config/config'
import { Observable } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import {CryptoService} from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * @baseUrl { string } assign apit url 
   * @user { any }
   */
  baseUrl: string = Config.API_URL;
  user: any;
  ipAddress: any;
  deviceInfo = null;

  /**
   * @constructor
   * @param http HttpClient instance
   * @param router Router instance
   */
  constructor(private http: HttpClient,
    private router: Router,
    public deviceService: DeviceDetectorService,
    public cryptoService: CryptoService) { }




  /**
   * @Function postData
   * This is common function to call(post) api to get data by decrypting token
   * @param apiName apiName
   * @param data 
   * @Member token - token to call api
   */


  postData(apiName, headerFlag, data) {
    var Token;
    let headers;
    if (headerFlag) {
      var tokenData = localStorage.getItem('accessToken')
      if (tokenData) {
        Token = JSON.parse(tokenData);//res
        headers = { auth: Token };
      }
      else
        return;
    }
    return this.http.post(this.baseUrl + this.cryptoService.encryptData(apiName),{encrypted_req: this.cryptoService.encryptData(data)}, { headers: headers, observe: 'response' })
    // return this.http.post(this.baseUrl + apiName, data, { headers: headers, observe: 'response' })
      .pipe(map((data: HttpResponse<any>) => {
        var decryptedData=this.cryptoService.decryptData(data);

        if (decryptedData.body.status.code != '00') {
          return decryptedData.body;
        }
        else if (decryptedData.body.result) {
          var accessToken = decryptedData.body.result.token;
          if (accessToken) {
            localStorage.setItem('accessToken', JSON.stringify(accessToken));
          }
          return decryptedData.body;
        }
        else {
          return decryptedData.body;
        }

        // if (data.body.status.code != '00') {
        //   return data.body;
        // }
        // else if (data.body.result) {
        //   var accessToken = data.body.result.token;
        //   if (accessToken) {
        //     localStorage.setItem('accessToken', JSON.stringify(accessToken));
        //   }
        //   return data.body;
        // }
        // else {
        //   return data.body;
        // }
      }));
  }

  postmapQuestURL(data) {
    return this.http.post('http://www.mapquestapi.com/geocoding/v1/address?key=vTzljFbQJWzpZPk3pdpGObCHRSDyPMqp', data)
      .pipe(map((data: HttpResponse<any>) => {
        return data;
      }));
  }

}

