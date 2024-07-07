import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit{

  messageInput: string = '';
  userId: string = '';
  messageList: any[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.chatService.joinRoom("ABC");
    this.userId= this.route.snapshot.params['userId'];
  }

  sendMessage(){
    const chatMessage = {
      message: this.messageInput,
      user: this.userId
    }as ChatMessage;

    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }
}
