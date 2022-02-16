import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})

export class TeamService {

  private groups: string[][] = [
    ['R0v3r', 'CooloJenkins', 'ZedAyEnDeeAreAy'],
    ['Blondeman', 'ZJTom', 'Tom_Bomb'],
  ];

  groupsUpdated = new Subject<string[][]>();

  submitSettings(teams: number, players: string) {

    let playersArr = players.split('\n'); // array of strings

    this.shuffle(playersArr);

    let allGroups = this.splitArr(teams, playersArr); //array of arrays of strings

    this.groups = allGroups;

    this.groupsUpdated.next(this.groups);
  }

  shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  splitArr(teams: number, players: string[]) {
    if (teams < 2) {
      return [players];
    }

    let len = players.length;
    let result = [];
    let i = 0;
    let size;

    if (len % teams === 0) {
      size = Math.floor(len / teams);
      while (i < len) {
          result.push(players.slice(i, i += size));
      }
    } else {
        while (i < len) {
            size = Math.ceil((len - i) / teams--);
            result.push(players.slice(i, i += size));
        }
    }
    return result;
  }

}
