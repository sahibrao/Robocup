import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LinksPopUpComponent} from "./links-pop-up/links-pop-up.component";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(LinksPopUpComponent);
  }
}
