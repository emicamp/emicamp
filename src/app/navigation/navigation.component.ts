import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public title : string = "Emasaur's Craft Corner";


  constructor(private router: Router) {

  }

  goToShop(event: any) {
    event.preventDefault()
    this.router.navigate(['shop']);
  }

}
