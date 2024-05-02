import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";

export const routes: Routes = [
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'home'
  },
];
