import { Component } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';

Maps.Inject(Zoom);
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  public zoomSettings: object;
  public urlTemplate: string;
  constructor() {
    this.zoomSettings = {
      enable: true,
      toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
    };
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map =
      document.getElementsByTagName('div')[
        document.getElementsByTagName('div').length - 1
      ];
    map.style.display = 'none';
  }
}
