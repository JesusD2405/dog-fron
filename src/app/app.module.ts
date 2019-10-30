/**
 *  @package        App.module.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2019.
 *  
 *  @since          Versión 1.0, revisión 29-10-2019.
 *  @version        1.0
 * 
 *  @final  
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/* Materialize */
import { MzCardModule } from 'ngx-materialize'
import { MzSpinnerModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'

/* Components */
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    BreedDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MzCardModule,
    MzSpinnerModule,
    MzButtonModule,
    MzIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
