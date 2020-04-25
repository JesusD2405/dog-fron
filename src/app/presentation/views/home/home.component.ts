/**
 *  @package        App.presentation.views.home.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2020.
 *  
 *  @since          Versión 1.0, revisión 23-04-2020.
 *  @version        1.0
 * 
 *  @final  
 */
import { Component, OnInit } from '@angular/core';
import { BreedModel } from '../../../domain/models/breed.model';
import { GetAllBreedsUsecase } from '../../../domain/usecases/breed/get-all-breeds.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public breeds: BreedModel[];

  constructor(
    private getAllBreeds: GetAllBreedsUsecase
  ){
    this.breeds= [];
  }

  ngOnInit() {
    this.getBreeds();
  }

  getBreeds(){
    this.getAllBreeds.execute(null).subscribe( data => {
      console.log(data);
      this.breeds = data;
    })
  }

}
