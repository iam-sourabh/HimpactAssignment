import { Component } from "@angular/core";
import { AppService } from "./app.service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Himpact Assignment";
  showInfo;
  constructor(private appService: AppService) {
    this.appService.handelPages.subscribe((data) => {
      this.showInfo = data;
    });
  }
}
