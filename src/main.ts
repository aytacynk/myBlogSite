import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { HomeComponent } from "./app/home/home.component";
import { ContactComponent } from "./app/contact/contact.component";
import { AboutMeComponent } from "./app/about-me/about-me.component";
import { AdminLayoutComponent } from "./app/layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./app/layout/main-layout/main-layout.component";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
