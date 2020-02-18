/**
 *  @package        App.presentation.views.home.ts
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
import { BreedModel } from '../../../core/domain/breed.model';
import { GetAllBreedsUsecase } from '../../../core/usecases/get-all-breeds.usecase'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public breeds: BreedModel[];

  constructor(
    private getAllBreeds: GetAllBreedsUsecase,
    // private BreedsImg: BreedsImgRamdonService
  ){
    this.breeds= [];
  }

  ngOnInit() {
    this.getBreedsAll();
  }

  getBreedsAll(){
    this.getAllBreeds.execute(null).subscribe((value: BreedModel[]) => {
      console.log(value);
      this.breeds = value;
    })
  }

  /* Función que obtiene todas las razas de perros */
  // breedsAll () {
  //   this.BreedsList.getBreedsAll().subscribe((response: any) => {
  //     console.log(response);
      
  //     let array = Object.keys(response.message)
  //     console.log(array)
  //     // Recorremos el array de razas de perros
  //     array.forEach( item => {

  //       // Si la raza posee subrazas
  //       if (response.message[item].length > 0) {
  //         let subBreeds = response.message[item]
  //         /* Recorremos todas las subrazas */
  //         subBreeds.forEach( data => {
  //           let subBreedName = item+'/'+data;
  //           /* Obtenemos la imagen de cada subraza de perro (1 img ramdon) */
  //           this.BreedsImg.getBreed(subBreedName).subscribe((response: any) => {
  //             this.breedsArray.push({ name: item+' '+data, img: response.message })
  //           });  
  //         });

  //       } else {
  //         // Solo razas
  //         /* Obtenemos la imagen de cada raza de perro (1 img ramdon) */
  //         this.BreedsImg.getBreed(item).subscribe((response: any) => {
  //           // console.log(response);
  //           this.breedsArray.push({ name: item, img: response.message })
  //         });  
  //       } 

  //     });

  //     console.log(this.breedsArray)
  //   },
  //   error => {
  //     console.log(error)
  //   });
  // }

}
