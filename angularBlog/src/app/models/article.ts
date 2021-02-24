import { Category } from "./category";

export class Article {
  id:number;
  title:string;
  content:string;
  summaryContent:string;
  publishDate:Date;
  picture:String;
  viewCount:number;
  commentCount:number;
  category:Category;
}

