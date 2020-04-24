/**
 *  @package        App.module.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2020.
 *  
 *  @since          Versión 1.0, revisión 18-02-2020.
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

/* Modules */
import { DataModule } from './data/data.module';

/* Slider Module */
import { SlickCarouselModule } from 'ngx-slick-carousel';

/* Materialize */
import { MzCardModule } from 'ngx-materialize'
import { MzSpinnerModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'

/* Components */
import { NavbarComponent } from './presentation/components/layouts/navbar/navbar.component';
import { FooterComponent } from './presentation/components/layouts/footer/footer.component';
import { PreloaderComponent } from './presentation/components/layouts/preloader/preloader.component';

/* Views */
import { HomeComponent } from './presentation/views/home/home.component';
import { BreedDetailsComponent } from './presentation/views/breed-details/breed-details.component';

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
    SlickCarouselModule,
    MzCardModule,
    MzSpinnerModule,
    MzButtonModule,
    MzIconModule,
    BrowserAnimationsModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
