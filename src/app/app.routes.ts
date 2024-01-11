import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NgModelGroup } from "@angular/forms";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    //wwww.aytach.com/ default component path'idir
    path: "",
    component: MainLayoutComponent,
    children: [
      //children mainlayoutun içiseine alınan componentleri belirtken keyWord'dur
      {
        path: "anasayfa",
        component: HomeComponent
        
      },
      {
        path: "hakkimizda",
        component: AboutMeComponent
       
      },
      {
        path: "iletisim",
        component: ContactComponent
      
      },
    ],
  },
  {
    //wwww.aytach.com/admin admin component path'idir
    path: "admin",
    component: AdminLayoutComponent,
  },
];

