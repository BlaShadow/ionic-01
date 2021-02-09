import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go() {

    if (this.username === undefined || this.password === undefined) {
      alert('Todos los campos son requeridos.');
      return;
    }

    if (this.username === 'admin' && this.password === 'qwerty') {
      this.router.navigate(['/home/tab1']);

      return;
    }
    
    alert('Credenciales invalidas');
  }
}
