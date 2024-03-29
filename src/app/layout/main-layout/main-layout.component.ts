import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainNavComponent } from "../../nav/main-nav/main-nav.component";
import { CategoryMenuComponent } from "../../components/category-menu/category-menu.component";
import { HttpClientModule } from "@angular/common/http";
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ArticlesComponent } from "../../components/articles/articles.component";

@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
    CategoryMenuComponent,
    HttpClientModule,
    NgxPaginationModule,
   
  ],
  templateUrl: "./main-layout.component.html",
  styleUrl: "./main-layout.component.css",
})
export class MainLayoutComponent {}
