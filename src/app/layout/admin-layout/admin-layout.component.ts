import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AdminNavComponent } from "../../nav/admin-nav/admin-nav.component";
@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [RouterOutlet, AdminNavComponent],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.css",
})
export class AdminLayoutComponent {}
