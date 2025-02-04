import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

appConfig.providers.push(FontAwesomeModule); // ✅ Add FontAwesome globally

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
