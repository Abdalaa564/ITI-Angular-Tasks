import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
 registerForm!: FormGroup;
  submitted = false;
  resultMessage = '';


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, this.noSpacesValidator]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  register(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      const { name, email, username } = this.registerForm.value;
      this.resultMessage = `✅ Registration successful!\nName: ${name}\nEmail: ${email}\nUsername: ${username}`;
    } else {
      this.resultMessage = ' Form has errors. Please fix the fields above.';
    }
  }


  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    return /\s/.test(control.value) ? { noSpaces: true } : null;
  }

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).{8,}$/;
    return regex.test(value) ? null : { weakPassword: true };
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }


  get f() {
    return this.registerForm.controls;
  }

}
