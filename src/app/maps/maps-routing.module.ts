import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarksComponent } from './pages/marks/marks.component';
import { PropietiesComponent } from './pages/propieties/propieties.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'fullscreen' , component: FullScreenComponent},
      {path: 'zoom-range' , component: ZoomRangeComponent},
      {path: 'marks'      , component: MarksComponent},
      {path: 'propieties', component: PropietiesComponent},
      {path: '**', redirectTo: 'fullscreen'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
