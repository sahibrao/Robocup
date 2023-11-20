import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AboutPopUpComponent} from "./about-pop-up/about-pop-up.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(AboutPopUpComponent);
  }
}
