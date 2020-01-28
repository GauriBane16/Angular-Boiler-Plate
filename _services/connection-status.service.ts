import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

/**
 * @connectionMonitor { Observable }
 */
    private connectionMonitor: Observable<boolean>;

/**
 * @constructor
 */
    constructor() {
      this.connectionMonitor = new Observable((observer) => {
        window.addEventListener('offline', (e) => {
          observer.next(false);
        });
        window.addEventListener('online', (e) => {
          observer.next(true);
        });
      });
    }

/**
 * @Function monitor
 * @returns Observable
 * Function to continuously monitor internet connection status
 */
  monitor(): Observable<boolean> {
    return this.connectionMonitor;
  }

}