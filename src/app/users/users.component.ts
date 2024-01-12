import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { ApiRestService } from '../api-rest.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MenuComponent, CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userlist = [
    {id:1, name: 'Juan', email: 'juan@m.com', username:'juan', avatar:'', role:'admin'},
    {id:2, name: 'Pedro', email: 'peter@m.com', username:'peter', avatar:'', role:'user'}
  ]

  newUser = {id:0, name: '', email: '', username:'', password:'', avatar:'', role:''}
  editUser = {id:0, name: '', email: '', username:'', password:'', avatar:'', role:''}

  constructor(private api: ApiRestService){}
  
  ngOnInit(){
    this.api.getAllUsers().subscribe(
      res => { this.userlist = res.data},
      error => { console.log(error) }
    )
  }

  saveUser(){
    this.api.createUser(this.newUser).subscribe(
      res => { 
        alert('agregado')
        this.ngOnInit()
        this.newUser = {id:0, name: '', email: '', username:'', password:'', avatar:'', role:''}
      },
      error => { alert('error no se puedo guardar') }
    )
  }

  saveChanges(){
    this.api.updateUser(this.editUser).subscribe(
      res => { 
        alert('modificado')
        this.ngOnInit()
        //this.newUser = {id:0, name: '', email: '', username:'', password:'', avatar:'', role:''}
      },
      error => { alert('error no se puedo guardar'); console.log(error) }
    )
  }

  selectUser(user:any){
    this.editUser = JSON.parse( JSON.stringify(user) )
  }

  delUser(){
    this.api.deteleUser(this.editUser.id).subscribe(
      res => {
        //alert('eliminado')
        this.ngOnInit()
        }
    )
  }
}
