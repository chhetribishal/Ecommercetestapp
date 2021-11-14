import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;
  constructor(private activatedRoute:ActivatedRoute,private produtService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
      this.produtService.deleteProduct(this.productId).subscribe(deleteproduct=>{
        console.log(deleteproduct);
      });

    })
  }

}
