import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'ng-todo';
  listMenu = [
    { label: 'Simple Todolist', path: 'simple', selected: false },
    { label: 'Better Todolist', path: 'better', selected: false }
  ];

  goto(menuClicked: any) {
    for (let index = 0; index < this.listMenu.length; index++) {
      const element = this.listMenu[index];
      element.selected = false;
    }
    menuClicked.selected = true;
    this.listMenu.forEach(menu => menu.selected = (menu.path == menuClicked.path) ? true : false)
    this.router.navigate([menuClicked.path])


  }
  gotoHome() {
    // for (let index = 0; index < this.listMenu.length; index++) {
    //   const element = this.listMenu[index];
    //   element.selected = false;
    // }
    this.listMenu.forEach(menu => menu.selected = false);
    this.router.navigate(['']);

  }
}
