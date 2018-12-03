import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module'
import {CoreModule} from './core/core.module'
import {FeatureModule} from './feature/feature.module';
import {HeaderComponent} from './header/header.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    FeatureModule,
    SharedModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
