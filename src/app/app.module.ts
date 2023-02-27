import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './components/error404/error404.component';
import { MapComponent } from './components/map/map.component';
import {
  LegendService,
  MarkerService,
  MapsTooltipService,
  DataLabelService,
  BubbleService,
  NavigationLineService,
  SelectionService,
  AnnotationsService,
  ZoomService,
} from '@syncfusion/ej2-angular-maps';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
@NgModule({
  declarations: [AppComponent, Error404Component, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapsModule,
  ],
  providers: [
    LegendService,
    MarkerService,
    MapsTooltipService,
    DataLabelService,
    BubbleService,
    NavigationLineService,
    SelectionService,
    AnnotationsService,
    ZoomService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
