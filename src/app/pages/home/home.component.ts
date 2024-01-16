import { Component } from "@angular/core";
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article.service";
import { RouterOutlet, Router, ActivatedRoute } from "@angular/router";
import { ArticlesComponent } from "../../components/articles/articles.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [PageTitleComponent,ArticlesComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  page?: number = 1;
  articles?: Article[];
  totalCount?: number;
  pageSize?: number = 5;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get("page")) {
        this.page = Number(params.get("page")); // URL'deki değeri alma işlemidir.
      }
      this.articles = [];
      this.totalCount = 0;
      this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe((data) => {
          console.log(data);
          console.log(data.articles);
          console.log(data.totalCount);
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
