/**
 *  @package        App.components.layouts.navbar.ts
 *  
 *  @author         Jesús David Pérez. <jdperez@guayanadev.com>.
 *  @copyright      Todos los derechos reservados. GuayanaDev. 2019.
 *  
 *  @since          Versión 1.0, revisión 29-10-2019.
 *  @version        1.0
 * 
 *  @final  
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Función que refresca la página */
  refreshPage(){
    location.reload();
  }
}
