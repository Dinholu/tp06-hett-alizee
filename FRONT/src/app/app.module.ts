import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FilterPipe } from './filter.pipe';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './shared/states/panier-state';
import { ApiHttpInterceptor } from './http-interceptor';
import { CatalogueService } from './catalogue.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PanierComponent,
    ProduitsComponent,
    // FilterPipe,
    LoginComponent

  ],
  imports: [
    NgxsModule.forRoot([PanierState]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    CatalogueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
