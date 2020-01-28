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
  constructor() {}
  //   this.instance = window['ChatEngineCore'].create(
  //     {
  //       // publishKey: 'pub-c-6f6a60d5-08c6-4bf0-8390-940bf501ba5e',
  //       publishKey:'pub-c-6515ca33-84bb-4f4f-b141-8aaf47bd68f0',
  //       // subscribeKey: 'sub-c-41dd4f7c-416b-11e9-a3da-7e1c7e0df66c'
  //       subscribeKey:'sub-c-ebd0ca6a-3f2f-11e9-99ed-dea01fda7778'
  //     },
  //     {
  //       debug: true,
  //       globalChannel: 'chat-engine-oncopower'
  //     });
  //   this.create = window['ChatEngineCore'].create.bind(this);
  //   this.plugin = window['ChatEngineCore'].plugin;
  
  //  }
 }
