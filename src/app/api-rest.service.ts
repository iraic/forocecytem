import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private url = 'https://devel.cdhidalgo.tecnm.mx/~iraic/foro-rest/'
  // private url = 'http://localhost/rest/'
  constructor(private http: HttpClient) { }

  login(usuario: string, password: string){
    // let url = this.url+"login?username"+usuario+'&password='+password
    let url2 = `${this.url}login`
    
    return this.http.post<any>(url2, {username:usuario, password:password})
  }

  getAllUsers(){
    let token = localStorage.getItem('token') || ''
    return this.http.get<any>(`${this.url}users?rows=100`, {headers: {Authorization: token}})
  }

  createUser(user:any){
    let token = localStorage.getItem('token') || ''
    let datos = new FormData()
    datos.append('name', user.name)
    datos.append('username', user.username)
    datos.append('password', user.password)
    datos.append('email', user.email)
    datos.append('avatar', user.avatar)
    datos.append('role', user.role)
    return this.http.post<any>(`${this.url}users`, datos,  {headers: {Authorization: token}})
  }

  updateUser(user:any){
    let token = localStorage.getItem('token') || ''
    return this.http.put<any>(`${this.url}users/${user.id}`,user, {headers: {Authorization: token}})
  }

  deteleUser(id: number){
    let token = localStorage.getItem('token') || ''
    return this.http.delete<any>(`${this.url}users/${id}`,{headers: {Authorization: token}})
  }
}
