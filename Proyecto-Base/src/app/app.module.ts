import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import {AppComponent} from './app.component';
import {NgSonOfPandoraModule, SopAppInitService} from 'ng-son-of-pandora';
import {IsapreDigitalModule} from 'isapre-digital';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgSelectModule} from '@ng-select/ng-select';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenInterceptor} from './core/auth/interceptors/token.interceptor';
import {SharedModule} from './shared/shared.module';

registerLocaleData(localeCl);

export function initializeApp(sopAppInitService: SopAppInitService) {
  return (): Promise<any> => {
    return sopAppInitService.Init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSonOfPandoraModule,
    IsapreDigitalModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgSelectModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    SopAppInitService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SopAppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
