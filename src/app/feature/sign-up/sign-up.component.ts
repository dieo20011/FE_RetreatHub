import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { whitespaceValidator } from '../../../shared/validator/white-space.validator';
import { AuthService } from '../../services/auth.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    NzIconModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup;
  usernameFocused = false;
  emailFocused = false;
  passwordFocused = false;
  isNewPasswordVisible = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly _authSvc: AuthService,
    private readonly router: Router,
    private readonly _notification: NzNotificationService,
    private readonly _nzModalRef: NzModalRef,
    private readonly modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required, whitespaceValidator]],
      username: ['', [Validators.required, whitespaceValidator]],
      password: ['', [Validators.required]],
    });
  }

  signup() {
    const data = {
      fullname: this.signupForm.get('fullname')?.value,
      username: this.signupForm.get('username')?.value,
      password: this.signupForm.get('password')?.value,
    };
    // this._authSvc.signup(data).subscribe({
    //   next: (resp) => {
    //     if(resp.status) {
    //       this._authSvc.setToken(resp.message);
    //       this.router.navigateByUrl('/dashboard');
    //       this._notification.success('Sign up success !!! Welcome', '');
    //     }
    //   },
    //   complete: () => {
        
    //   }
    // })
  }

  openSignInModal(): void {
    this._nzModalRef.close();
    const modal = this.modal.create({
      nzContent: SignInComponent,
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

  onFocusUsername(): void {
    this.usernameFocused = true;
  }

  onBlurUsername(): void {
    this.usernameFocused = false;
  }

  removeLeadingWhitespace(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/^\s+/, '');
  }
}
