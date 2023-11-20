import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ReposPopUpComponent} from "./repos-pop-up/repos-pop-up.component";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(ReposPopUpComponent);
  }
}
