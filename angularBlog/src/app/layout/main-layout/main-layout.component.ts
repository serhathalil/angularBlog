import { Component, OnInit } from '@angular/core';
import { MenuCategoryComponent } from '../../components/menu-category/menu-category.component';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    MenuCategoryComponent
  }

}
