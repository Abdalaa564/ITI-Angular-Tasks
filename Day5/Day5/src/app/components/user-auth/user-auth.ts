import { Component, OnInit } from '@angular/core';

import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-auth',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './user-auth.html',
  styleUrls: ['./user-auth.css']
})
export class UserAuthComponent  {
 email = '';
  password = '';
  submitted = false;
  resultMessage = '';

 login(form: NgForm): void {
    this.submitted = true;

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    const passwordValid = this.password.length > 6;

    if (form.valid && emailValid && passwordValid) {
      this.resultMessage = `✅ Login successful!\nEmail: ${this.email}`;
    } else {
      this.resultMessage = 'Plz enter valid email and password longer than 6 char';
    }
  }
  isEmailValid(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.email);
  }

  isPasswordValid(): boolean {
    return this.password.length > 6;
  }

}
