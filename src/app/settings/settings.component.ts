import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild('teams') teamsInputRef!: ElementRef;
  @ViewChild('players') playersInputRef!: ElementRef;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const teams = this.teamsInputRef.nativeElement.value;
    const players = this.playersInputRef.nativeElement.value;

    this.teamService.submitSettings(teams, players);

  }

}
