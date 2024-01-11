import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userlist = [
    {id:1, name: 'Juan', email: 'juan@m.com', username:'juan', avatar:'', role:'admin'},
    {id:2, name: 'Pedro', email: 'peter@m.com', username:'peter', avatar:'', role:'user'}
  ]
  
}
