import { Component } from '@angular/core';
import { IUser } from '../../Models/i-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card-component',
  imports: [FormsModule],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.css'
})
export class UserCardComponent {
  Users:IUser[]
  displayedUser!: IUser;

  constructor() {
    this.Users = [
      {
        id: 1,
        username: 'AbdalaaKhaleel',
        email: 'abdalaakhaleel@gmail.com',
        phone: '+201281007622',
        birthdate: '1998-05-12',
        role: 'Admin',
        avatar: 'https://robohash.org/ali.png?set=set2'
      },
      {
        id: 2,
        username: 'AbdalaaAhmed',
        email: 'Abdalaa@gmail.com',
        phone: '+201112223334',
        birthdate: '1995-11-20',
        role: 'User',
        avatar: 'https://robohash.org/sara.png?set=set3'
      },
      {
        id: 3,
        username: 'SaraKhaled',
        email: 'sara@gmail.com',
        phone: '+201556677889',
        birthdate: '2000-03-05',
        role: 'Moderator',
        avatar: 'https://robohash.org/omar.png?set=set4'
      },
      {
        id: 4,
        username: 'MonaHassan',
        email: 'mona@gmail.com',
        phone: '+201009876543',
        birthdate: '1992-08-15',
        role: 'User',
        avatar: 'https://robohash.org/mona.png?set=set4'
      }
    ];
    this.displayedUser = this.Users[0];
  }

  search: string = '';

 showCard = [true, true, true, true];
   searchUser() {
    for (let i = 0; i < this.Users.length; i++) {
      this.showCard[i] = this.Users[i].email.toLowerCase() === this.search.toLowerCase();
    }
  }

  resetSearch() {
    this.search = '';
    this.showCard = [true, true, true, true];
  }








  sEmail(){
    for (let i = 0; i < this.Users.length; i++){
      const found = this.Users.find(u => u.email === this.search);
        if (found) {
            this.displayedUser = found;
            console.log(found);
            console.log(this.displayedUser);
        }
    }
  }


}
