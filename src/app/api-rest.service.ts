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
    return this.http.get<any>(`${this.url}users`, {headers: {Authorization: token}})
  }

  createUser(name: string, username: string, password: string, email: string, role: string){
    let token = localStorage.getItem('token') || ''
    let datos = new FormData()
    datos.append('name', name)
    datos.append('username', username)
    datos.append('password', password)
    datos.append('email', email)
    datos.append('role', role)
    return this.http.post<any>(`${this.url}users`, datos,  {headers: {Authorization: token}})
  }

  updateUser(id: number, name: string, username: string, password: string, email: string, role: string){
    let token = localStorage.getItem('token') || ''
    let datos = new HttpParams()
    datos.append('name', name)
    datos.append('username', username)
    datos.append('password', password)
    datos.append('email', email)
    datos.append('role', role)
    return this.http.put<any>(`${this.url}users/${id}`,datos, {headers: {Authorization: token}, params: datos})
  }

  deteleUser(id: number){
    let token = localStorage.getItem('token') || ''
    return this.http.delete<any>(`${this.url}users/${id}`,{headers: {Authorization: token}})
  }
}
