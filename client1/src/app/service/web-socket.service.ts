import { Injectable,Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { io } from "socket.io-client";
import { Observable, subscribeOn } from 'rxjs';

// const Net = require('net');
@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any;
  readonly url : string = "ws://localhost:8080";    
  constructor(){
     this.socket = io(this.url);
    // this.header = new Headers({'Content-Type': 'application/context'})
 
}
  listen(eventName: string ){
    return new Observable((subscribe)=>{
      this.socket.on(eventName,(data:any)=>{
        subscribe.next(data);
      })
    })
  }

}
