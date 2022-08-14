import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './components/min-map/min-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarksComponent } from './pages/marks/marks.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropietiesComponent } from './pages/propieties/propieties.component';


@NgModule({
  declarations: [
    MinMapComponent,
    FullScreenComponent,
    MarksComponent,
    ZoomRangeComponent,
    PropietiesComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
