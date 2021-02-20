import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  url = "https://reqres.in/api/users";
  userList = new BehaviorSubject(null);
  userInfo = new BehaviorSubject(null);
  pageNos = new BehaviorSubject(null);
  handelPages = new BehaviorSubject(false);

  constructor(private spinner: NgxSpinnerService, private http: HttpClient) {}

  getUserList(pageNo) {
    return this.http.get<any>(this.url + "?page=" + pageNo);
  }

  getUserById(id){
    return this.http.get<any>(this.url + "/" + id);
  }

  loadUserList(pageNo) {
    this.spinner.show();
    this.getUserList(pageNo).subscribe((data) => {
      this.userList.next(data.data);
      this.spinner.hide();
    });
  }

  loadUserInfo(id) {
    this.spinner.show();
    this.getUserById(id).subscribe((data) => {
      this.userInfo.next(data.data);
      this.spinner.hide();
    });
  }


  showInfoPage(v) {
    this.handelPages.next(v);
  }
}
