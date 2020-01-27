import { LoginPageModule } from './../login/login.module';
import { Login } from './../login/login.model';
import { Device } from './device.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  deviceList: Array<Device>
  pid: number
  did: number
  name:string
  surname:string
  dateNow : Date = new Date();
  public static pid:number
  public static did:number

  constructor(public http: HttpClient, private router: Router) {
    
  }

  ionViewWillEnter() {
    console.log("Cihaz ekranı açılıyor")
  }

  ionViewDidEnter() {
   
    setInterval(() => {
      this.getDeviceList()
       this.dateNow=new Date()
    }, 1000)
    console.log("Cihaz ekranı açıldı")

  }

  ionViewWillLeave() {
    console.log("Cihaz ekranından çıkış yapılıyor")

  }

  ionViewDidLeave() {

    console.log("Cihaz ekranından çıkış yapıldı")

  }
 

  // User List
  async getDeviceList() {
  
    this.pid = LoginPage.pid
    this.http.get<any>('http://localhost:62819/api/PersonAllDevices?pid=' + this.pid).subscribe(data => {
      this.deviceList = data
      this.name=this.deviceList[0].Name
      this.surname=this.deviceList[1].Surname
      console.log(this.deviceList)

    })

  }

  ngOnInit() {
  }

}
