import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./app/pages/home/home.component";
import { ContactComponent } from "./app/pages/contact/contact.component";
import { AboutMeComponent } from "./app/pages/about-me/about-me.component";
import { AdminLayoutComponent } from "./app/layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./app/layout/main-layout/main-layout.component";
import { config } from "./app/app.config.server";

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
