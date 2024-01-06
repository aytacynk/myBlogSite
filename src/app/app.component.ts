import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "myBlogSite";
}
