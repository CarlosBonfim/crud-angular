// import { HeaderData } from './../../components/template/footer/header-data.model';
import { HeaderService } from "./../../components/template/footer/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "inicio",
      icon: "home",
      routeUrl: "/",
    };
  }

  ngOnInit(): void {}
}
