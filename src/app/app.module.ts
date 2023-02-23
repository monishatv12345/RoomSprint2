import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
//import { TDFRoomPageComponent } from './tdfroom-page/tdfroom-page.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { DiscriptionPipe } from './discription-pipe';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';

const allLinks:Routes = [
  {path:'launchroom',component:AdminWorkComponent},
  {path:'room',component:UserComponent},
  {path:'roomDetails',component:RoomDetailsComponent},
  {path:'Roomindb',component:RoomListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    RoomDetailsComponent,
    //TDFRoomPageComponent,
    DiscriptionPipe,
    UserComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
