import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit, OnDestroy {
  private updateGroupsSubscription!: Subscription;

  groups: string[][] = [
    ['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy'],
    ['Blondeman', 'ZJTom', 'Tom_Bomb'],
  ];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.updateGroupsSubscription =
      this.teamService.groupsUpdated.subscribe((groups) => {
        this.groups = [];
        this.groups = groups;
      });
  }

  ngOnDestroy(): void {
    this.updateGroupsSubscription.unsubscribe();
  }

}
