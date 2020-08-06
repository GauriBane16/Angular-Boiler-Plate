import { Injectable } from "@angular/core";
//import { ChatEngineCore} from 'chat-engine';

@Injectable({
  providedIn: "root"
})

export class ChatEngineService {
  instance: any;
  create: any;
  plugin: any;
  chat: any = {};
  chats: any[] = []
  constructor() {
    this.instance = window['ChatEngineCore'].create(
      {
        publishKey:'your publish key',
        subscribeKey:'subscription key'
      },
      {
        debug: true,
        globalChannel: 'chat-engine-oncopower'
      });
    this.create = window['ChatEngineCore'].create.bind(this);
    this.plugin = window['ChatEngineCore'].plugin;
  
   }
 }
