import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { reducers } from 'projects/state-manager/reducers';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(StoreModule.forRoot(reducers, {}))],
});
