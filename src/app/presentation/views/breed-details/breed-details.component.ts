/**
 *  @package        App.presentation.views.breed-details.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2020.
 *  
 *  @since          Versión 1.0, revisión 18-02-2020.
 *  @version        1.0
 * 
 *  @final  
 */
import { Component, OnInit } from '@angular/core';
// import { BreedsListAllService } from 'src/app/services/breeds-list-all.service';
// import { BreedsImgAllService } from 'src/app/services/breeds-img-all.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.styl']
})
export class BreedDetailsComponent implements OnInit {

  public breedData: Array<any> = [];
  public breedName: String;

  constructor(
    // private BreedsImg: BreedsImgAllService,
    private routeActive: ActivatedRoute
  ) { 
    this.breedName = this.routeActive.snapshot.params.breed
  }

  ngOnInit() {
    // this.getBreed();
  }

  /* Función que obtiene las fotos aleatorias (8) */
  // getBreed () {
  //   this.BreedsImg.getBreed(this.breedName).subscribe((response: any) => {
  //     // console.log(response);
  //     this.breedData = response.message
  //     console.log(this.breedData);
  //   },
  //   error => {
  //     console.log(error)
  //   });
  // }

}
