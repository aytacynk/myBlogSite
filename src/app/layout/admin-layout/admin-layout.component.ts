import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AdminNavComponent } from "../../nav/admin-nav/admin-nav.component";
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { NgxPaginationModule } from "ngx-pagination";
@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [
    RouterOutlet,
    AdminNavComponent,
    PageTitleComponent,
    NgxPaginationModule,
  ],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.css",
})
export class AdminLayoutComponent {}
