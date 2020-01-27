import { DevicePage } from './../device/device.page';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public usersList: Array<Login>
  public username = '';
  public password = '';
  public static pid: number

  constructor(public http: HttpClient, private router: Router) {



  }

  ngOnInit() {


  }

  ionViewWillEnter() {
    console.log("Login ekranı açılıyor")
  }

  ionViewDidEnter() {
    this.getUsersList()
    console.log("Login ekranı açıldı")

  }

  ionViewWillLeave() {
    console.log("Login ekranından çıkış yapılıyor")

  }

  ionViewDidLeave() {

    console.log("Login ekranından çıkış yapıldı")

  }


  // User List
  async getUsersList() {

    this.http.get<any>('http://localhost:62819/api/AllPerson').subscribe(data => {
      this.usersList = data
      console.log(this.usersList)

    })

  }
  onLogin() {

    console.log("Username: " + this.username);
    console.log("Password: " + this.password);

    console.log("tıklandı")
    for (const user of this.usersList) {
      if (this.username == user.Username && this.password == user.Password) {
        LoginPage.pid = user.PersonID
        console.log("giriş başarılı")
        this.router.navigateByUrl('/device')

        break;
      }
      else {
        console.log("giriş başarısız")

      }
    }
  }



}
