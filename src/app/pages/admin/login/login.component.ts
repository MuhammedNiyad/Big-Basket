import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    console.log(this.loginObj);
    
    if (
      this.loginObj.username == 'niyad' &&
      this.loginObj.password == '12345'
    ) {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong username or password');
    }
  }
}
