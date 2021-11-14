import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './order/list-order/list-order.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
           { path:'order',component:ListOrderComponent},

           {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
          },
           { path: 'smartphone', loadChildren: () => import('./smartphone/smartphone.module').then(m => m.SmartphoneModule) }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
