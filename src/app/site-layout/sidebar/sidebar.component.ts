import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
    
export class SidebarComponent implements OnInit {
  categoryList: Category[]=[];
  
  constructor(private productService:ProductService) { 
    
  }
  ngOnInit(): void {
    this.getcategoryList();
  }
  getcategoryList()
  {
    this.productService.getCategory().subscribe(category=>{this.categoryList=category});
  }


}

