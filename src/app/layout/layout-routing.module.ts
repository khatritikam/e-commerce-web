import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./../module/dashborard/dashborard.module').then(module => module.DashborardModule)
        
      },
      {
        path:'auth',
        loadChildren: () => import('./../module/authentication/authentication.module').then(module => module.AuthenticationModule)
        
      },
      {
        path:'fruits',
        loadChildren: () => import('./../module/fruits/fruits.module').then(module => module.FruitsModule)
        
      },
      {
        path:'vegetables',
        loadChildren:() => import('./../module/vegetables/vegetables.module').then(module => module.VegetablesModule)
      },
      {
        path:'flowers',
        loadChildren:() => import('./../module/flowers/flowers.module').then(module => module.FlowersModule)
      },
      {
        path:'cart',
        loadChildren:() => import('./../module/cart/cart.module').then(module => module.CartModule)
      },
      {
        path: 'product-details/:type/:id',
        loadChildren:() => import('../module/product-details/product-details.module').then(module => module.ProductDetailsModule)
      },
      {
        path: 'terms&condition',
        loadChildren:() => import('../module/terms-ncondition/terms-ncondition.module').then(module => module.TermsNConditionModule)
      },
      {
        path: 'about-us',
        loadChildren:() => import('../module/about/about.module').then(module => module.AboutModule)
      },
      {
        path: 'privacy-policy',
        loadChildren:() => import('../module/privacy-policy/privacy-policy.module').then(module => module.PrivacyPolicyModule)
      },
      {
        path: 'payment-methods',
        loadChildren:() => import('../module/payment-method/payment-method.module').then(module => module.PaymentMethodModule)
      },
      {
        path: 'return-policy',
        loadChildren:() => import('../module/return-policy/return-policy.module').then(module => module.ReturnPolicyModule)
      },
      {
        path:'wishlist',
        loadChildren:() => import('../module/wishlist/wishlist.module').then(module => module.WishlistModule)
      },
      {
        path:'orders',
        loadChildren:() => import('../module/orders/orders.module').then(module => module.OrdersModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
