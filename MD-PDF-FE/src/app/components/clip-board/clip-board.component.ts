import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-clip-board",
  imports: [MatButtonModule, MatIconModule],
  templateUrl: "./clip-board.component.html",
  styleUrl: "./clip-board.component.scss",
})
export class ClipBoardComponent {}
