import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './component/group.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GroupService } from './service/group.service';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule
  ],
  declarations: [
    GroupComponent
  ],
  exports: [
    GroupComponent
  ],
  providers: [ 
    GroupService 
  ]
})
export class GroupModule { }
