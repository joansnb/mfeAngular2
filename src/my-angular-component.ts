import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const mount = (container: HTMLElement) => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
      console.log('Angular module loaded successfully!', container);
    })
    .catch((err) => console.error('Error bootstrapping Angular module:', err));
};
