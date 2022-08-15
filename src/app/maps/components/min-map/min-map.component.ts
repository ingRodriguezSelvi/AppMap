import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import * as  mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-min-map',
  templateUrl: './min-map.component.html',
  styleUrls: ['./min-map.component.css']
})
export class MinMapComponent implements AfterViewInit {

  @Input() lngLat: [number,number] = [0,0]
  @ViewChild('map') divMap!: ElementRef;



  constructor() { }

  ngAfterViewInit(): void {

    const mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15

    });

    new mapboxgl.Marker()
    .setLngLat( this.lngLat )
    .addTo( mapa );
  }

}
