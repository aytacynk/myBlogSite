import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { HomeComponent } from "./app/pages/home/home.component";
import { ContactComponent } from "./app/pages/contact/contact.component";
import { AboutMeComponent } from "./app/pages/about-me/about-me.component";
import { AdminLayoutComponent } from "./app/layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./app/layout/main-layout/main-layout.component";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, appConfig).catch((err) => // Ana Component hangisini olacağını belirleniyor. Standalone olarak tanımlanan Component bu fonksiyonla tanımlanır
  console.error(err)
);
