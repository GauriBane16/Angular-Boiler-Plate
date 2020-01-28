import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { first, take } from 'rxjs/operators';
import { SnackbarService } from './../_services/snackbar.service'
import { LoaderService } from './loader.service';
import { Router } from '@angular/router'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AlertDialogBoxComponent } from '../shared/alert-dialog-box/alert-dialog-box.component';
import { SetlocationDialogComponent } from '../shared/setlocation-dialog/setlocation-dialog.component';
import { HighAlertDialogBoxComponent } from '../shared/high-alert-dialog-box/high-alert-dialog-box.component';
import { UserServiceService } from './user-service.service';


@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnDestroy {
  versionNumber: any = 'Version: 1.0.1.2';
  defaultImage: any = '/assets/images/defaultImage.png';
  defaultTeamImage: any = '/assets/images/defaultTeamImage.png';
  defaultLogoImage: any = '/assets/images/logo_default.png';
  defaultHospitalLogo: any = '/assets/images/hospitallogo.jpg'
  defaultFlag: any = '/assets/images/united-states-of-america-flag-xs.png';
  defaultImageName = "defaultImage.png"
  fileMaxSize: number = 4000000;
  loggedInUser: any;
  deleteImageFlag: boolean = false;
  dialogRef: any;
  constructor(private apiService: ApiService,
    public loaderService: LoaderService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    public router: Router,
    public userServiceService: UserServiceService,
  ) {
    this.initializeData();
  }

  /**
   * Common function to get data from observable or localstorage for throughout application to set theme & logged in person's name on navbar
   */
  initializeData() {
    this.userServiceService.castUser.subscribe((data: Object) => {
      if (data) {
        this.loggedInUser = data;
      } else {
        this.loggedInUser = JSON.parse(localStorage.getItem('userOfKardio'));
      }
    });
    this.setColor()
  }

  /**
   * Common function to set logged in user's data & changes whenever it change from any module in throughout application
   * @param setType 
   * @param userData 
   */
  setDataInLocalStorageAndObservable(setType, userData) {
    var data;
    if (setType == 'theme') {
      data = JSON.parse(localStorage.getItem('userOfKardio'));
      data.selected_hospital_id = userData['hospital_id'];
      data.selected_hospital_name = userData['hospital_name'];
      data.hospital_image = userData['hospital_image']
      data.primary_color = userData['--primary-color'];
      data.secondary_color = userData['--secondary-color'];
      data.text_color = userData['--text-color'];
    }
    else if(setType=='econsult-count'){
      data = JSON.parse(localStorage.getItem('userOfKardio'));
      data.econsult_case_count=userData;
    }
    else {
      data = userData;
    }
    localStorage.setItem('userOfKardio', JSON.stringify(data));
    this.userServiceService.setObservableData(data)
    this.initializeData()
  }

  /**
   * Common function to set theme color according to selected hospital.
   */
  setColor() {
    var themeColor = {
      "--primary-color": this.loggedInUser && this.loggedInUser.hasOwnProperty('primary_color') && (this.loggedInUser.primary_color || this.loggedInUser.primary_color == " ") ? this.loggedInUser.primary_color : '#1277bf',
      "--secondary-color": this.loggedInUser && this.loggedInUser.hasOwnProperty('secondary_color') && (this.loggedInUser.secondary_color || this.loggedInUser.secondary_color == " ") ? this.loggedInUser.secondary_color : '#292a2e',
      "--text-color": this.loggedInUser && this.loggedInUser.hasOwnProperty('text_color') && (this.loggedInUser.text_color || this.loggedInUser.text_color == " ") ? this.loggedInUser.text_color : ''
    }
    this.setTheme(themeColor);
  }

  /**
   * Common Function to handle data & error for all api call
   * @param apiUrl 
   * @param data 
   */
  apiCall(apiData, data) {
    if (apiData.showLoader) {
      this.loaderService.showLoader();
    }
    return new Promise((resolve, reject) => {
      this.apiService.postData(apiData.apiName, apiData.header, data)
        .pipe(first())
        .subscribe(
          (response: any) => {

            if (response.status.code != '00') {
              if (response.status.code === "03") {
                this.loaderService.hideLoader();
                reject(response);
                let msg = response.status.message;
                this.openAlertDialogForSessioTimeout("Session Timeout, Please login again");
              }

              else if (response.status.code !== "03") {
                this.loaderService.hideLoader();
                reject(response);
                let msg = response.status.message;
                this.openAlertDialog(msg);
              }
              else {
                if(apiData.apiName!='/loginAll')
                this.loaderService.hideLoader();
                resolve(response.error);
              }
            }
            else {
              if(apiData.apiName!='/loginAll')
              this.loaderService.hideLoader();
              resolve(response);
            }
          },
          error => {
            this.loaderService.hideLoader();
            this.handleError(error);
            reject(error);
          });
    })
  }

  /**
   * Common function to open alert dialog box from throught application
   * @param msg 
   */
  openAlertDialog(msg) {
    const dialogRef = this.dialog.open(AlertDialogBoxComponent, {
      data: {
        message: msg,
        buttonText: {
          cancel: 'OK'
        }
      },
    });
  }

  /**
  * Common function to open alert dialog box whenever session is time-out from throught application
  * @param msg 
  */
  openAlertDialogForSessioTimeout(msg) {
    console.log("this.dialogRef", this.dialogRef)
    if (this.dialogRef || !this.loggedInUser) return;
    this.dialogRef = this.dialog.open(AlertDialogBoxComponent, {
      data: {
        message: msg,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });

    this.dialogRef.afterClosed().pipe(first()).subscribe(result => {
      this.logout();
      this.dialogRef = null;
    });
  }

  /**
   * Common function to open confirmation dialog box from throught application
   * @param msg 
   */
  openConfirmationDialog(msg) {
    return new Promise((resolve, reject) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        title: msg
      };
      const dialogRef = this.dialog.open(SetlocationDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.deleteImageFlag = result;
        resolve(result)
      });
    })

  }

  /**
   * Common function to open confirmation dialog box for high alert of patient on clicked on high alert notification from throught application
   * @param msg 
   */
  openConfirmationDialogForHighAlert(msg) {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(HighAlertDialogBoxComponent, {
        data: {
          message: msg,
          buttonText: {
            ok: 'Save'
          }
        }
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          resolve(confirmed)
        }
      });
    })
  }

  /**
   * Common function to open confirmation dialog box for high alert of patient through socket from throught application
   * @param msg 
   */
  openAlertDialogForHighAlert(msg) {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(AlertDialogBoxComponent, {
        data: {
          message: msg,
          buttonText: {
            cancel: 'Ok'
          }
        },
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(true);
      });
    })
  }

  /**
   * Function to handle error for all api
   * @param error 
   */
  handleError(error) {
    if (error.status == 0)
      this.snackbarService.showError("Server Error, Try later");
    else
      this.snackbarService.showError(error.statusText || error.Message || "Something went wrong, Please login again");
  }

  /**
   * Common function to logout & clear localstorage
   */
  logout() {
    localStorage.removeItem('userOfKardio');
    this.loggedInUser = null;
    localStorage.removeItem('isKardioUserLoggedIn');
    localStorage.removeItem('accessTokenOfKardio');
    this.router.navigate(['/auth/login']);
  }

  /**
   * Common function to autofill data if remember me is checked
   * @param loginForm 
   */
  setRememberMe(loginForm) {
    if (loginForm.invalid) {
      return;
    }
    if (loginForm.value.rememberme == false) {
      var rememberMe = {
        email: loginForm.controls['email'].value,
        password: loginForm.controls['password'].value,
        rememberme: !loginForm.controls['rememberme'].value,
      }
      localStorage.setItem('rem_me', JSON.stringify(rememberMe));
    }
    else {
      localStorage.removeItem('rem_me');
    }
  }

  /**
   * Common function to check remember me checked or not as well as to take action according to it.
   * @param loginForm 
   */
  checkRememberMe(loginForm) {
    var setRemember, listOfRememberMe
    listOfRememberMe = Object.keys(localStorage)
    if (listOfRememberMe.includes('rem_me'))
      setRemember = JSON.parse(localStorage.getItem('rem_me'));
    if (setRemember) {
      loginForm.controls['email'].setValue(setRemember.email);
      loginForm.controls['password'].setValue(setRemember.password);
      loginForm.controls['rememberme'].setValue(setRemember.rememberme);
    }
  }


  /**
   * Common function to convert single image file into base 64
   * @Function onSelectFile
   * @param event
   *  
   */
  onSelectFile(event) {
    return new Promise((resolve, reject) => {
      var rule = "^image/";
      var regex = new RegExp(rule);
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size > this.fileMaxSize) {
          this.openAlertDialog(event.target.files[0].name + " Size more than 4MB");
          return;
        }
        else if (!regex.test(event.target.files[0].type)) {
          this.openAlertDialog(event.target.files[0].name + " Not accepted, invalid file format, only image files can be accepted");
          return;
        }
        var filename = event.target.files[0].name;
        var fileType=event.target.files[0].type
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event) => {
          var data = { image_name: filename, image: reader.result,file_type: fileType }
          resolve(data);
        }
      }
      else
        reject(true)
    });
  }

  /**
   * Common function to convert multiple image file as well as pdf file into base 64
   * @Function onSelectFile
   * @param event
   *  
   */
  onSelectMultipleFile(file,callerName) {
    return new Promise((resolve, reject) => {
      var rule = "^image/";
      var regex = new RegExp(rule);
      if (file.size > this.fileMaxSize) {
        this.openAlertDialog(file.name + " Size more than 4MB");
        return;
      }
      else if (!regex.test(file.type) && file.type != 'application/pdf') {
        this.openAlertDialog(file.name + " Not accepted, invalid file format, only image files can be accepted");
        return;
      }
      var filename = file.name
      var reader = new FileReader();
      reader.readAsDataURL(file); // read file as data url
      reader.onload = (event) => {
        var data;
        if(callerName=='Cerificates')
        data = { certificate_name: filename, certificate: reader.result, file_type: file.type }
        else
        data = { file_name: filename, file: reader.result, file_type: file.type }
        resolve(data);
      }
    });
  }

  /**
   * Common function to set theme
   * @param themeColor 
   */
  setTheme(themeColor: {}) {
    Object.keys(themeColor).forEach(k => {
      document.documentElement.style.setProperty(`${k}`, themeColor[k]);
    });
  }

  maskPhone(e){
		var x = e.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,})/);
    return (!x[2] ? x[1] :  x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : ''));
		
    }

    maskLandline(e){
      var x = e.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,})/);
      return (!x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''));
      
      }
    
    

  ngOnDestroy() { }

}



