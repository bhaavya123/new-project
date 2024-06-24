import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AppleComponent } from './apple/apple.component';
import { OrangeComponent } from './orange/orange.component';
import { StrawberryComponent } from './strawberry/strawberry.component';
import { GuavaComponent } from './guava/guava.component';

const routes: Routes = 
//   [{path:'home',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'service',component:ServiceComponent}
// ];
[
  {path:'apple',component:AppleComponent},
  {path:'orange',component:OrangeComponent},
  {path:'strawberry',component:StrawberryComponent},
  {path:'guava',component:GuavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
