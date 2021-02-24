import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common'
import {NgxPaginationModule} from 'ngx-pagination'
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../pipes/urlformat.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { WhoIsComponent } from './who-is/who-is.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';

import{MatSelectModule} from '@angular/material/select';
import { AddCommentComponent } from './add-comment/add-comment.component'
import { MaterialModule } from '../modules/material/material.module';
import { ListCommentsComponent } from './list-comments/list-comments.component';





@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, ArticlesComponent, UrlformatPipe, MenuArticleMostViewComponent, WhoIsComponent, MenuArchiveComponent, AddCommentComponent, ListCommentsComponent],
  imports: [
    CommonModule,RouterModule,NgxPaginationModule,MatSelectModule,MaterialModule
  ],
  exports:[MenuCategoryComponent, PageTitleComponent, ArticlesComponent, UrlformatPipe, MenuArticleMostViewComponent, WhoIsComponent, MenuArchiveComponent,AddCommentComponent, ListCommentsComponent]
})
export class ComponentsModule { }
