import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from '@syncfusion/ej2-base'
registerLicense("Ngo9BigBOggjHTQxAR8/V1NDaF1cWGhIYVBpR2Nbek55fldPal1RVAciSV9jS3pSdEVnWH9bcHBQQmFYUw==");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
