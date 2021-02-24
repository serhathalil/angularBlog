import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL:string="https://localhost:44329/api/Kategoris";
  constructor(private HttpClient:HttpClient) { }

   public getCategories(){
     return this.HttpClient.get<Category[]>(this.apiURL);
   }

   public getCategorybyId(kategoriId:number){
     let url= `${this.apiURL}/${kategoriId}`;
     return this.HttpClient.get<Category>(url);
   }

}
