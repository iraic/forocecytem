import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = 'admin'
  password = ''

  constructor(private router: Router, private api: ApiRestService) {}
  login() {
    this.api.login(this.usuario, this.password).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('usuario', res.user.username)
        alert('Bienvenido')
        this.router.navigate(['/home'])
      },
      error => {
        alert('Usuario o contraseña incorrectos')
      }
    )
    // if(this.usuario == 'admin' && this.password == '123'){
    //   alert('Bienvenido')
    //   this.router.navigate(['/home'])
    // }else{
    //   alert('Usuario o contraseña incorrectos')
    // }
  }
}
