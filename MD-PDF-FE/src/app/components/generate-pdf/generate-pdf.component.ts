import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { PdfService } from "../../services/pdf.service";

@Component({
  selector: "app-generate-pdf",
  imports: [MatButtonModule],
  template: `
    <button matButton="tonal" color="primary" (click)="generatePDF()">
      Generate PDF
    </button>
  `,
  styles: `
    :host {
      .generate-pdf-container {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
    }
  `,
})
export class GeneratePDFComponent {
  private readonly pdfService = inject(PdfService);

  public generatePDF(): void {
    this.pdfService.generatePDF().subscribe((response: Blob) => {
      this.downloadFile(response, "document.pdf");
    });
  }

  private downloadFile(data: Blob, filename?: string) {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename ?? "document.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
