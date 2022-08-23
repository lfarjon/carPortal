import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this._authService.SignOut();
  }
}
