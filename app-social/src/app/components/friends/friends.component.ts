import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  standalone: false
})
export class FriendsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() post: {user: string, userAvatar: string, mutualFriends: number} = {
    user: '',
    userAvatar: '',
    mutualFriends: 0
  }

  @Output() acceptFriend = new EventEmitter<any>();
  @Output() removeFriend = new EventEmitter<any>();

  onAccept() {
    this.acceptFriend.emit(this.post);
  }

  onRemove() {
    this.removeFriend.emit(this.post);
  }

}
