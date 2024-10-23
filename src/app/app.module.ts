import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutorizationInterceptor } from './core/interceptor/autorization.interceptor';
import { SharedModule } from './shared/shared.module';
import { LandingPage } from './views/landing/landing.page';
import { DetailPage } from './views/detail/detail.page';


@NgModule({
  declarations: [AppComponent,LandingPage,DetailPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    SharedModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AutorizationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
