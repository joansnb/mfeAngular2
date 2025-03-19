import { Component } from '@angular/core';

@Component({
  selector: 'angular-remote-app-2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-remote-app2';
  activeTab: string = 'inicio'; // Tab activa por defecto  

  selectTab(tab: string) {  
    this.activeTab = tab; // Cambia la pestaña activa  
  }  
}
