import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboradComponent } from '../app/moduels/dashborad/containers/dashborad/dashborad.component';
import { ListDashboradComponent } from './moduels/dashborad/containers/list-dashborad/list-dashborad.component';
import { ViewDashboradComponent } from './moduels/dashborad/containers/view-dashborad/view-dashborad.component';
import { GaleryComponent } from './shared/components/galery/galery.component';
import { ImageSelectComponent } from './shared/components/image-select/image-select.component';
import { Image } from 'src/app/models/const/image';
import { DetailImageComponent } from './shared/components/detail-image/detail-image.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://test.doxi-sign.com/login/auth',
        realm: 'testforangular',
        clientId: 'test1',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}


@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    ListDashboradComponent,
    ViewDashboradComponent,
    GaleryComponent,
    ImageSelectComponent,
    DetailImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
