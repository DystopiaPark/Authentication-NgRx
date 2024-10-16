import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  AppState,
  isErrorSelector,
  isSuccessSelector,
  onLoginAction,
} from './Redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public userForm!: FormGroup;
  public usernameFormControl!: FormControl;
  public passwordFormControl!: FormControl;

  public isSuccess$ = this.store.select(isSuccessSelector);
  public isError$ = this.store.select(isErrorSelector);

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.usernameFormControl = new FormControl(null, [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFormControl = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.userForm = this.fb.group({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
    });
  }

  onSubmitForm(): void {
    if (this.userForm.valid) {
      this.store.dispatch(onLoginAction({ ...this.userForm.value }));
    }
  }
}
