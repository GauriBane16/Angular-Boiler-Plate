import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {
  config: any;
  constructor(private snackBar: MatSnackBar) {
    this.setCustomConfig();
  }

  /**
   * Function to initialize or set custom configuration for snackbar.
   */
  setCustomConfig() {
    this.config = {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }
  }

  /**
   * Function to show success snackbar
   * @param message 
   */
  showSuccess(message) {
    this.config.panelClass = 'success-snackbar';
    this.snackBar.open(message, null, this.config)
  }

  /**
   * Function to show error snackbar
   * @param message 
   */
  showError(message) {
    this.config.panelClass = 'danger-snackbar';
    this.snackBar.open(message, null, this.config);
  }

  /**
   * Function to show warning snackbar
   * @param message 
   */
  showWarning(message) {
    this.config.panelClass = 'warning-snackbar';
    this.snackBar.open(message, null, this.config);
  }

  /**
   * Function to show info snackbar
   * @param message 
   */
  showInfo(message) {
    this.config.panelClass = 'warning-snackbar';
    this.snackBar.open(message, null, this.config);
  }

  /**
   * Function for custom snackbar
   * @param message 
   * @param snackbarClass 
   */
  showCustom(message, snackbarClass) {
    this.config.panelClass = snackbarClass;
    this.snackBar.open(message, null, this.config);
  }

}



