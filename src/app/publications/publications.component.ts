import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PublicationsPopUpComponent} from "./publications-pop-up/publications-pop-up.component";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(PublicationsPopUpComponent);
  }
}
