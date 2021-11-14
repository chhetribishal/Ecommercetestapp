import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService: ProductService) { 
  
  }

  ngOnInit(): void {
  }
  addNewProduct(form:any){
    console.log(form.value);
    let newProduct = {
      id:115,
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
    // console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(formData=>{
      // console.log(formData);
    });
  }
  

}
