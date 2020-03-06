import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; //import MenuController to access toggle() method.

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {}
   toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

}
