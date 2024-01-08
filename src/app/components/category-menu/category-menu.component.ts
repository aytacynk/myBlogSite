import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { Category } from "../../models/category";
import {
  RouterModule,
  NavigationEnd,
  RouterOutlet,
} from "@angular/router";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-category-menu",
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule,HttpClientModule],
  templateUrl: "./category-menu.component.html",
  styleUrl: "./category-menu.component.css",
})
export class CategoryMenuComponent implements OnInit {
  categories?: Category[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
