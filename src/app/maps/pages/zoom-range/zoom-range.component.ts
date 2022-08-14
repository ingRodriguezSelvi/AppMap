import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap!: ElementRef
  map!: mapboxgl.Map;

  levelZoom: number = 12;
  coordenates: [number,number] = [-69.267662,10.0593181];

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.coordenates,
      zoom: this.levelZoom

    });

    this.map.on('zoom',() => this.levelZoom = this.map.getZoom())

    this.map.on('zoomend',() => this.map.getZoom() > 18 ? this.map.zoomTo(18) :  this.map.zoomTo(this.map.getZoom()) )

    //Move Map
    this.map.on('move', (event) =>{
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.coordenates = [lng,lat];
    })
  }

  zoomIn(){
    this.map.zoomIn()
  }
  zoomOut(){
    this.map.zoomOut()
  }

  zoomChange( zoom:string){
    this.map.zoomTo(Number(zoom));
  }

  ngOnDestroy(): void {
    this.map.off('zoom',()=>{});
    this.map.off('zoomend',()=>{});
    this.map.off('move',()=>{});
  }

}
