import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { whitespaceValidator } from '../../../shared/validator/white-space.validator';
import { AuthService } from '../../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    NzModalModule,
    NzIconModule,],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginForm!: FormGroup;
  isNewPasswordVisible = true;
  emailFocused = false;
  passwordFocused = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly _authSvc: AuthService,
    private readonly router: Router,
    private readonly _notification: NzNotificationService,
    private readonly _nzModalRef: NzModalRef,
    private readonly modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, whitespaceValidator]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const data = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this._authSvc.login(data).subscribe({
      next: (resp) => {
        if (resp.status) {
          // this._authSvc.setToken(resp.message);
          this.router.navigateByUrl('/dashboard');
          this._notification.success('Sign in success !!! Welcome', '');
        }
      },
      complete: () => {

      }
    })
  }

  openSignUpModal(): void {
    this._nzModalRef.close();
    const modal = this.modal.create({
      nzContent: SignUpComponent,
      nzWidth: '500px',
    });
  }

  onFocusEmail(): void {
    this.emailFocused = true;
  }

  onBlurEmail(): void {
    this.emailFocused = false;
  }

  onFocusPassword(): void {
    this.passwordFocused = true;
  }

  onBlurPassword(): void {
    this.passwordFocused = false;
  }
}
