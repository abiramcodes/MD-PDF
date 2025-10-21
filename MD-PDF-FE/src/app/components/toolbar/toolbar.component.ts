import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { GeneratePDFComponent } from "../generate-pdf/generate-pdf.component";

@Component({
  selector: "app-toolbar",
  imports: [MatToolbarModule, GeneratePDFComponent],
  template: `
    <mat-toolbar>
      <span>MD-PDF-Generator</span>
      <app-generate-pdf />
    </mat-toolbar>
  `,
  styles: `
    :host {
      mat-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  `,
})
export class ToolbarComponent {}
