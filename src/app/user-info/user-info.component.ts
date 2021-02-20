import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  userInfo;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.userInfo.subscribe((data) => {
      if (data) {
        this.userInfo = data;
      }
    });
  }

  goBack() {
    this.appService.showInfoPage(false);
  }

  ngOnDestroy() {
    this.appService.clearInfo();
  }
}
