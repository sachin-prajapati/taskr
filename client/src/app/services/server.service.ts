import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private rootUrl = "https://68eb9386.ngrok.io";

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
    return this.http.post(this.rootUrl+'/api/auth/login',
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
    return this.http.post(this.rootUrl+'/api/auth/resend/'+name,
    {headers: headers});
  }

}
