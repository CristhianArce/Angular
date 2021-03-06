import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { PlayerTableComponent } from './player-table/player-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent,
    PlayerTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
