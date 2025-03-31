import { Component } from '@angular/core';

@Component({
  selector: 'space-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-app';
  activeTab: string = 'inicio'; // Tab activa por defecto  

  selectTab(tab: string) {  
    this.activeTab = tab; // Cambia la pestaña activa  
  }  
}
