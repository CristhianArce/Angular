import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { TeamService, TeamTableHeaders } from 'src/app/services/team.service';
import { take } from 'rxjs/operators';
import { Countries } from 'src/app/interfaces/player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css'],
})
export class TeamTableComponent implements OnInit {
  public teams$: Observable<Team[]>;
  public tableHeaders = TeamTableHeaders;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe((teams) => {
        if (teams.length === 0) {
          const team: Team = {
            name: 'My First Team',
            country: Countries.Colombia,
            players: null,
          };
          this.teamService.addTeam(team);
        }
      });
  }
}
