import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  private selectedTheme: BehaviorSubject<Object> = new BehaviorSubject<Object>(
    null
  );
  castUser = this.selectedTheme.asObservable();
  private notifyHighAlert: BehaviorSubject<Object> = new BehaviorSubject<any>(
    null
  );
  notifyToAll = this.notifyHighAlert.asObservable();
  // selectedThemeColor = this.selectedTheme.asObservable();
  // private selectedTheme: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
  // public title = new Subject<string>();
  // private dataSource = new BehaviorSubject<SnapshotSelection>(new Data());

  constructor() {}

  setObservableData(userData) {
    this.selectedTheme.next(userData);
  }

  setTheme(themeData) {
    this.selectedTheme.next(themeData);
  }

  setObservableDataOnHighAlert(notification) {
    this.notifyHighAlert.next(notification);
  }

  notiFyToAllChildComponents(notification) {
    this.notifyHighAlert.next(notification);
  }
}
