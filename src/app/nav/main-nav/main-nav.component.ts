import { Component } from '@angular/core';
import { RouterModule,Router, NavigationEnd,RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';


enum MainPage {
  home = 1,
  about_me = 2,
  contact = 3
}
@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})



export class MainNavComponent {
  pageActive: MainPage | undefined;
  
  constructor(private router: Router) {
    this.router.events.subscribe(x => {
      if (x instanceof NavigationEnd) {
        if (x.url.indexOf("anasayfa") > 0) {
          this.pageActive = MainPage.home;
        } else if (x.url.indexOf("hakkimizda") > 0) {
          this.pageActive = MainPage.about_me;
        } else if (x.url.indexOf("iletisim") > 0) {
          this.pageActive = MainPage.contact;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

}
