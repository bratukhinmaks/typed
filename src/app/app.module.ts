import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {reducer} from './store/search.reducer';
import {SearchEffect} from './store/search.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from './shared/http.service';
import { BranchComponent } from './shared/components/branch/branch.component';
import { RepoComponent } from './shared/components/repo/repo.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PlaceholderComponent } from './shared/components/placeholder/placeholder.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    RepoComponent,
    PlaceholderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('search', reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([SearchEffect])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
