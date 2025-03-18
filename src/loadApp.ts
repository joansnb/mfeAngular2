import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const appElement = document.createElement('app-root');
  appElement.id = `angular-app-${containerId}`;
  container.appendChild(appElement);

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export { mount }
