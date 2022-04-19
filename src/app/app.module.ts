import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { AlliancesComponent } from './alliances/alliances.component';
import { ParagonsComponent } from './paragons/paragons.component';
import { RadicalsComponent } from './radicals/radicals.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { InvadersComponent } from './invaders/invaders.component';
import { DevourersComponent } from './devourers/devourers.component';
import { FiendsComponent } from './fiends/fiends.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    AlliancesComponent,
    ParagonsComponent,
    RadicalsComponent,
    CollaboratorsComponent,
    InvadersComponent,
    DevourersComponent,
    FiendsComponent,
    TopNavComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
