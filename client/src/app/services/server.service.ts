import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "https://33844161.ngrok.io";

  constructor(private http: HttpClient) { }


    signUpUser(fullName:string,userName:string,email:string,password:string,confirmPassword:string) {
      const headers = new HttpHeaders({'Content-Type':'application/json'})
      // console.log(JSON.stringify({name,email,password}));
      return this.http.post(this.rootUrl+'/auth/signUp',JSON.stringify({fullName,userName,email,password,confirmPassword}),
      {headers: headers});
  }

  logInUser(email:string,password:string) {
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    console.log(JSON.stringify({name,email,password}));
    return this.http.post(this.rootUrl+'/auth/login',
    JSON.stringify({email,password}),
    {headers: headers});
  }
  verifyUser(otp:string, name:any) {
    console.log(name);
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.rootUrl+'/auth/verifyEmail/'+name,
    JSON.stringify({otp}),
    {headers: headers});
  }

}
