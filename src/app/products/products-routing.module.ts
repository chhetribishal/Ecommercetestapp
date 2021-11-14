import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
// import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component:ViewAllProductComponent },
  { path: 'createProduct', component:AddProductComponent },
  // { path: 'list-product', component:ViewAllProductComponent },
  { path: 'search-date', component:ViewProductByDateComponent},
  { path: 'category/:id', component:ViewProductByCategoryComponent },
  { path: 'update-product/:id', component:UpdateProductComponent},
  { path: 'view-product/:id', component:ViewProductComponent },
  { path: 'delete-product/:id', component:DeleteProductComponent },
  // {path:'category/:id/view-product/:id',component:ViewProductComponent}

  
  
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
