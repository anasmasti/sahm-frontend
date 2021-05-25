import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class wsService {
    // private socket: any
    // private url: any = environment.SOCKET_URL

    // constructor() {
    //     this.socket = io(this.url, {
    //         withCredentials: true
    //     })
    // }

    // listen(eventName: string) {
    //     return new Observable((subscriber) => {
    //         this.socket.on(eventName, (data: any) => {
    //             subscriber.next(data)
    //         })
    //     })
    // }

    // emit(eventName: string, data: any) {
    //     this.socket.emit(eventName, data)
    // }
}
