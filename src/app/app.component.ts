import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { MainNavComponent } from "./nav/main-nav/main-nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    AdminLayoutComponent,
    MainLayoutComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "myBlogSite";
}
