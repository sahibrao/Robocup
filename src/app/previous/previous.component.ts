import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PreviousPopUpComponent} from "./previous-pop-up/previous-pop-up.component";

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(PreviousPopUpComponent);
  }
}
