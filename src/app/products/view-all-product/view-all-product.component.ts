import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
   
    productList:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
    this.productService.viewAllProduct().subscribe(data=>{this.productList=data});
  
  }


}
