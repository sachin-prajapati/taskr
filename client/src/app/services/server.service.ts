import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "https://34653dac.ngrok.io";
  
  constructor(private http: HttpClient) { }


    signUpUser(fullName:string,userName:string,email:string,password:string,confirmPassword:string) {
      const headers = new HttpHeaders({'Content-Type':'application/json'})
      // console.log(JSON.stringify({name,email,password}));
      return this.http.post(this.rootUrl+'/api/auth/signUp',JSON.stringify({fullName,userName,email,password,confirmPassword}),
      {headers: headers});
  }

  logInUser(email:string,password:string) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify({email,password}));
    return this.http.post(this.rootUrl+'/api/Account/UserLogin',
    JSON.stringify({email,password}),
    {headers: headers});
  }

  verifyUser(otp:string, name:any) {
    console.log(name);
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.rootUrl+'/api/auth/verifyEmail/'+name,
    JSON.stringify({otp}),
    {headers: headers});
  }

  resendOtp(name:any) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get(this.rootUrl+'/api/auth/resendOtp/'+name,
    {headers: headers});
  }

  addBoard(bName:string) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+token,
    })
    return this.http.post(this.rootUrl+'/api/board/create', JSON.stringify({bName}), 
        { headers: headers }); 
  }

  getUserBoards() {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+token,
    })
    return this.http.get(this.rootUrl+'/api/home', { headers: headers });
  }

  getBoarddetails(id:any) {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+token,
    })
    return this.http.get(this.rootUrl+'/api/board/'+id, { headers: headers });
  }

  getritikimg() {
    return this.http.get(this.rootUrl+'/hospitals/');
  }

}
