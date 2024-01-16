import { Component, Input } from "@angular/core";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article.service";
import { RouterOutlet, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-articles",
  standalone: true,
  imports: [],
  templateUrl: "./articles.component.html",
  styleUrl: "./articles.component.css",
})
export class ArticlesComponent {
  @Input() totalCount?: number;
  @Input() articles?: Article[];
  @Input() page?: number;
  @Input() pageSize?: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  pageChanged(event: any) {
    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);
  }
}
