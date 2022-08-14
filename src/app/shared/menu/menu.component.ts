import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  name: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menuItem: MenuItem[]= [
    {
      ruta: '/maps/fullscreen',
      name: 'FullScreem'
    },
    {
      ruta: '/maps/zoom-range',
      name: 'Zoom Range'
    },
    {
      ruta: '/maps/marks',
      name: 'Marks'
    },
    {
      ruta: '/maps/propieties',
      name: 'Propieties'
    }
  ]

}
