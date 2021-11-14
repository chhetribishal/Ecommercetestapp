import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }
  productId = 0;
  productDetails: Product[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData=>{
        this.productDetails = productData;//get the existing data of the product
        console.log(this.productDetails);
      });

    });
    
  }
  updateProduct(form:any){
    // console.log(form.value);
    const updateProduct = {
      id:form.value.id,
      name: form.value.product_name,
      categoryID:form.value.product_category,
      descriptions: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      is_available:1,
      color:form.value.product_color,
      review:form.value.product_reviews
    };
    console.log(form);
    this.productService.updateProduct(this.productId,updateProduct).subscribe(updateData=>{
      console.log(updateData);
    })

}
}
