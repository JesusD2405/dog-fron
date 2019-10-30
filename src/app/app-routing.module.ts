/**
 *  @package        App.app-routing.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2019.
 *  
 *  @since          Versión 1.0, revisión 29-10-2019.
 *  @version        1.0
 * 
 *  @final  
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';

const routes: Routes = [
  /*  
  *  Página de Inicio
  */
  {
    path: '',
    component: HomeComponent,
  },
  /*  
  *  Detalle de la raza 
  */
  {
    path: 'breed/:breed/details',
    component: BreedDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
