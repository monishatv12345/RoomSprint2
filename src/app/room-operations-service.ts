import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Room } from './room';
import { RoomDTO } from './room-dto';


@Injectable({
  providedIn: 'root'
})
export class RoomOperationsService {
  baseURL = 'http://localhost:2002/roomDetails';
  allRoomEndpoint = this.baseURL+'/roomDetails';
  // getRoomByIdEndpoint=this.baseURL+''
  roomArr:RoomDTO[] = [];
  constructor(private http:HttpClient) {
    console.log("Inside Constructor "+this.allRoomEndpoint);
   }
   getAllRoomFromSpring():Observable<RoomDTO[]>
   {
    console.log("inside service : "+this.allRoomEndpoint);
    return this.http.get<RoomDTO[]>(`${this.allRoomEndpoint}`);
   }

    //roomArr:Room[]=[];

  addRoom(roomFromUser:Room){
    this.roomArr.push(roomFromUser); 
    console.log("Inside Room Service : Room Added "+roomFromUser.roomNo);
    console.log(" Total Room Are :- "+this.roomArr.length);
  }

  getRoomArr():Room[]
  {
    return this.roomArr;
  }

  getRoomByHotel(searchRoomNo:number):Room
  {
    let outputRoom:Room = new Room(0,'','','','','');
    for(let i=0;i<this.roomArr.length;i++)
    {
      let thisRoom:Room = this.roomArr[i];
        if(thisRoom.roomNo == searchRoomNo)
        {
          outputRoom = thisRoom;
          break;
        }
    }
    
    return outputRoom;
  }


  getRoomByNo(filterCategory:string):Room[]
  {
    
   let outputArr:Room[] = [];

    this.roomArr.forEach(r=>{
      if(r.roomType == filterCategory)
      {
        outputArr.push(r);
      }
      if(r.ratePerDay==filterCategory){
        outputArr.push(r);
      }
    });

    return outputArr;
  }
  
  
}
