import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  userList = [];
  showList = false;
  pageNo;
  pageForm: FormGroup;
  selectedUser;
  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.appService.userList.subscribe((data) => {
      if(data){
        this.userList = data;
        if(this.userList.length){
          this.showList = true;
        }
        else {
          this.showList = false;
        }
      }

    });
    this.pageForm = this.formBuilder.group({
      pageNo: [1],
    });
  }

  showUsers() {
    let pageInfo = this.pageForm.value;
    this.appService.loadUserList(pageInfo.pageNo);
  }

  showUserInfo(){
    if(this.selectedUser){
      this.appService.showInfoPage(true);
      this.appService.loadUserInfo(this.selectedUser);
    }
    console.log(this.selectedUser)
  }
}
