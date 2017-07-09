import { Component, Input, Output, EventEmitter } from '@angular/core'; //Input 추가
import { Message } from './message.model';
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})

export class MessageComponent {
    @Input() message: Message;  //Input : 외부에서 Assign 가능하도록 @Input 추가
    @Output() editClicked = new EventEmitter<string>(); 

    constructor(private messageService: MessageService) {}
    
    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}