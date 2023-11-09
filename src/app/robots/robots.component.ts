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
    const dialogRef = this.dialog.open(RobotsPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
