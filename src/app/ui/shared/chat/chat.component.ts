import { Component, OnInit } from '@angular/core';
import { wsService } from 'src/app/services/websocekt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name: String = ''
  message: String = ''
  received_data: any = {}

  constructor(private _ws: wsService) { }

  ngOnInit(): void {

  }

  // setMessage() {
  //   this._ws.emit('chat', { 'name': this.name, 'message': this.message })
  //   this._ws.listen('get_message').subscribe(data => {
  //     this.received_data = data;
  //   })
  // }

}
