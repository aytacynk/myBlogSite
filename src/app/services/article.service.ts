import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Article } from "../models/article";
import { ArticlePg } from "../models/article-pg";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = "http://localhost:5116/api/articles";
  public loading: boolean = true;

  getArticles(page?: number, pageSize?: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(// pipe işlemde araya giren bir method türüdür.
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
