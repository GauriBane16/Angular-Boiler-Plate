import { EventEmitter } from '@angular/core';

export class LoaderService {
  loaderService = new EventEmitter<boolean>();

  showLoader() {
    this.loaderService.emit(true);
  }

  hideLoader() {
    this.loaderService.emit(false);
  }
}