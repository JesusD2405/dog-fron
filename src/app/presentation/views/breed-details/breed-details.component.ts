/**
 *  @package        App.presentation.views.breed-details.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2020.
 *  
 *  @since          Versión 1.0, revisión 25-04-2020.
 *  @version        1.0
 * 
 *  @final  
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetBreedByNameUsecase } from '../../../domain/usecases/breed/get-byName-breed.usecase';
import { BreedModel } from '../../../domain/models/breed.model';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.styl']
})
export class BreedDetailsComponent implements OnInit {

  public breedData: BreedModel;
  public breedName: string;

  constructor(
    private routeActive: ActivatedRoute,
    private getBreedByName: GetBreedByNameUsecase,
  ) { 
    this.breedName = this.routeActive.snapshot.params.breed;
  }

  ngOnInit() {
    this.getBreed();
  }

  getBreed () {
    this.getBreedByName.execute(this.breedName).subscribe(breed => {
      this.breedData= breed;
    })
  }

}
