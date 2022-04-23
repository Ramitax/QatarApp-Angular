import { Injectable } from '@angular/core';
import { Group } from '../interface/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  private _groups : Group [] = [
    {
      title: 'Grupo A',
      teams: [ 'Qatar', 'Ecuador', 'Senegal', 'Paises Bajos' ]
    },
    {
      title: 'Grupo B',
      teams: [ 'Inglaterra', 'Iran', 'EE.UU', 'Gales' ]
    },
    {
      title: 'Grupo C',
      teams: [ 'Argentina', 'Arabia Saudita', 'Mexico', 'Polonia' ]
    },
    {
      title: 'Grupo D',
      teams: [ 'Francia', 'Peru', 'Dinamarca', 'Tunez' ]
    },
    {
      title: 'Grupo E',
      teams: [ 'España', 'Costa Rica', 'Alemania', 'Japon' ]
    },
    {
      title: 'Grupo F',
      teams: [ 'Belgica', 'Canada', 'Marruecos', 'Croacia' ]
    },
    {
      title: 'Grupo G',
      teams: [ 'Brazil', 'Serbia', 'Suiza', 'Camerun' ]
    },
    {
      title: 'Grupo H',
      teams: [ 'Portugal', 'Ghana', 'Uruguay', 'Corea del Sur' ]
    }
  ]

  constructor() { console.log("Servicio Inicializado"); }

  public get groups () : Group [] {
    return [...this._groups]
  }

  public updateGroup (teams : Array<string>, group: number) : void {
    this._groups[group].teams = teams;
  }

  public filterGroup () : string[][] {
    return this.duplicateGroup().map( (group) => {
      return group.teams = [group.teams[0], group.teams[1]];
    })
  }

  private duplicateGroup (): Group[] {
    return this._groups.map( (group) => {
      return Object.assign( {}, group);
    });
  }
}
