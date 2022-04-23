import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupModule } from './group/group.module';
import { GroupService } from './group/service/group.service';
import { PlayoffsComponent } from './playoffs/component/playoffs.component';

@NgModule({
  declarations: [	
    AppComponent,
    PlayoffsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GroupModule
  ],
  providers: [
    GroupService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 

}
