import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Category } from "../models/category";
// import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private apiUrl: string = "http://localhost:5116/api/Categories";

  constructor(private httpClient: HttpClient) {}

  public getCategories() {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  public getCategoryById(id: number) {
    let url = `${this.apiUrl}/${id}`; //Backtick ile uzantı belirtmedir.
    return this.httpClient.get<Category>(url);
  }
}
