import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

// NG-Zorro modules
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzMenuModule,
    NzDividerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isLoginModalVisible = false;
  loginForm!: FormGroup;
  isLoading = false;
  
  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      countryCode: ['+84', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9,10}$/)]]
    });
  }

  showLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  handleCancel(): void {
    this.isLoginModalVisible = false;
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const phoneNumber = this.loginForm.value.countryCode + this.loginForm.value.phoneNumber;
      
      this.authService.login(phoneNumber).subscribe({
        next: () => {
          this.isLoading = false;
          this.isLoginModalVisible = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
