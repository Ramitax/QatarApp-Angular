import { Component } from '@angular/core';
import { GroupComponent } from './group/component/group.component';
import { GroupService } from './group/service/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QatarApp';
  activeGroup : boolean = true
  activeFinal : boolean = false

  constructor ( private groupService : GroupService) { }
  
  filterGroup ( ) : void {
    this.groupService.filterGroup();
  }
}
