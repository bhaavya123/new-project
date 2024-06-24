import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
import { TymasterComponent } from './tymaster/tymaster.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { AppleComponent } from './apple/apple.component';
import { GuavaComponent } from './guava/guava.component';
import { OrangeComponent } from './orange/orange.component';
import { StrawberryComponent } from './strawberry/strawberry.component';
import { MenuComponent } from './menu/menu.component';

// import { MenuComponent } from './menu/menu.component';
// import { RegComponent } from './reg/reg.component';
// import { LogComponent } from './log/log.component';
 import { FlexComponent } from './flex/flex.component';
 import { FlexboxComponent } from './flexbox/flexbox.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TymasterComponent,
    NewComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    AppleComponent,
    GuavaComponent,
    OrangeComponent,
    StrawberryComponent,
    FlexboxComponent,
    FlexComponent,
    FormComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
