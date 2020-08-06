import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

/**
 * This is common class to encrypt & decrypt data.
 */
export class CryptoService {
  key = "encryption key";
  constructor() { }

  /**
   * This is common function to make a proper request JSON format & encrypt it.
   *@param data- required data to encrypt sent from component.
   */

  encryptData(data) {
    // var request = {
    //   status: {},
    //   data: data,
    //   token: { "token": '' }
    // }
    var dataString = JSON.stringify(data);
    var token = CryptoJS.AES.encrypt(dataString, this.key);
    console.log("token",token)
    console.log("token.toString()",token.toString())
    return token.toString() ;
        // return { encRequest: token.toString() };
  }

  /**
  * This is common function to decrypt response.
  *@param data- required data to decrypt sent from api service.
  */
  decryptData(data) {
    var decrypted = CryptoJS.AES.decrypt(data, this.key);
    //Here we are checking for decrypted response.
    if (decrypted) {
      var userinfo = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      return userinfo;
    }
    else {
      return { "userinfo": { "error": "Please send proper token" } };
    }
  }
}
