import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NgModelGroup } from "@angular/forms";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    //wwww.aytach.com/ default component path'idir
    path: "main",
    component: MainLayoutComponent,
    children: [
      //children mainlayoutun içiseine alınan componentleri belirtken keyWord'dur
      {
        path: "home",
        component: HomeComponent,
        outlet: 'home'
      },
      {
        path: "hakkimizda",
        component: AboutMeComponent,
        outlet: 'hakkimizda'
      },
      {
        path: "iletisim",
        component: ContactComponent,
        outlet: 'iletisim'
      },
    ],
  },
  {
    //wwww.aytach.com/admin admin component path'idir
    path: "admin",
    component: AdminLayoutComponent,
  },
];

