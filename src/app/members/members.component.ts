import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  constructor(public dialog: MatDialog) {
  }

  openPopup() {
    this.dialog.open(MembersComponent);
  }
}
