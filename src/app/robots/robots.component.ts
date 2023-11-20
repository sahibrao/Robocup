import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RobotsPopUpComponent} from "./robots-pop-up/robots-pop-up.component";

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(RobotsPopUpComponent);
  }
}
