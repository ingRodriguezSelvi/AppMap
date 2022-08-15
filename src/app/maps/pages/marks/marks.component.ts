import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl'

interface MarkColor {
  color: string,
  marker?: mapboxgl.Marker,
  center?: [number,number]
}

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements AfterViewInit {

  @ViewChild('map') divMap!: ElementRef
  map!: mapboxgl.Map;

  levelZoom: number = 15;
  coordenates: [number,number] = [-69.2644855,10.0364127];

  marks: MarkColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenates,
      zoom: this.levelZoom

    });
    this.readLocalStorage();
/*
    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Apartamento'; */

    /*  new mapboxgl.Marker()
    .setLngLat(this.coordenates)
    .addTo( this.map ); */


  }

  addMarker(){

    const color = "#xxxxxx".replace(/x/g, y =>(Math.random()* 16|0).toString(16));
    const marker = new  mapboxgl.Marker({
      draggable: true,
      color
    })
    .setLngLat( this.coordenates )
    .addTo( this.map );


    this.marks.push(
      {
      color,
      marker
      }
      );
      this.markerSaveLocal();

      marker.on('dragend', () => {
        this.markerSaveLocal();
      })
  }

  goToMarker( markCenter: mapboxgl.LngLat ){
    this.map.flyTo({
      center: markCenter,
      zoom: 15
    })


  }

  markerSaveLocal(){

    const lngLatArr:MarkColor[]  = []
    this.marks.forEach( marker =>{
      const color         = marker.color;
      const { lng, lat }  = marker.marker!.getLngLat();
      lngLatArr.push({
        color,
        center: [ lng,lat ]
      })
    })

    localStorage.setItem('markers', JSON.stringify(lngLatArr) )

  }

  readLocalStorage(){

    if ( !localStorage.getItem('markers')){
      return;
    }

    const lngLatArrColor: MarkColor[] = JSON.parse(localStorage.getItem('markers')!);

    lngLatArrColor.forEach ( marker =>{
      const newMarker = new mapboxgl.Marker({
        color: marker.color,
        draggable: true
      })
      .setLngLat( marker.center! )
      .addTo( this.map )

      this.marks.push({
        marker: newMarker,
        color: marker.color
      })

      newMarker.on('dragend', () => {
        this.markerSaveLocal();
      })
    })
  }

  deleteMarker( index: number ){
    console.log(index)
    this.marks[index].marker?.remove();
    this.marks.splice(index,1)
    this.markerSaveLocal();
  }
}
