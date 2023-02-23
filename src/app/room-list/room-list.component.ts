import { Component } from '@angular/core';
import { RoomDTO } from '../room-dto';
import { RoomOperationsService } from '../room-operations-service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

  allRoom:RoomDTO[] = [];
  constructor(roomService:RoomOperationsService)
  {
    roomService. getAllRoomFromSpring().subscribe(
      data=>{
        this.allRoom = data;
      },
      err=>{
        console.log("Error" +err);
      }
    );
  }

}
