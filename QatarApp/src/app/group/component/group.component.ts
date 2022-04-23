import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { GroupService } from '../service/group.service';
import { Group } from '../interface/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  constructor ( private groupService : GroupService ) { }

  get groups () : Group [] {
    return this.groupService.groups;
  }

  drop(event: CdkDragDrop<string[]>,  group: string [], index: number) {
    moveItemInArray(group, event.previousIndex, event.currentIndex);
    this.groupService.updateGroup(group, index);
  }
}
