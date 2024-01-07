import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainNavComponent } from "../../nav/main-nav/main-nav.component";
@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [RouterOutlet, MainNavComponent],
  templateUrl: "./main-layout.component.html",
  styleUrl: "./main-layout.component.css",
})
export class MainLayoutComponent {}
