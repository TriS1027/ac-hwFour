import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public activeTab = 'signIn';

  public formModelSignup: FormGroup;

  public formModelLogin: FormGroup;

  public submit(values: any): void {
    console.log(values);
  }

  public constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formModelSignup = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

    this.formModelLogin = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public setActive(tabName: string): void {
    this.activeTab = tabName;
  }

}
