import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../../service/web-socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(webSocketService:WebSocketService) { }

  ngOnInit(): void {
  }
  connect(){

  }

}
