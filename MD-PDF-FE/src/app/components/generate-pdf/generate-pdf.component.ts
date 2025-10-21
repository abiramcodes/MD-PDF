import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { PdfService } from "../../services/pdf.service";
import { SnackbarService } from "../../services/snackbar.service";
import { MarkdownFacadeService } from "../../services/markdown-facade.service";

@Component({
  selector: "app-generate-pdf",
  imports: [MatButtonModule],
  template: `
    <button
      matButton="tonal"
      color="primary"
      (click)="generatePDF()"
      [disabled]="!markdownFacadeService.htmlString()"
    >
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
  private readonly snackbarService = inject(SnackbarService);
  protected readonly markdownFacadeService = inject(MarkdownFacadeService);

  public generatePDF(): void {
    this.pdfService.updateLoading(true);
    this.pdfService.generatePDF().subscribe({
      next: (data) => {
        this.previewFile(data);
        this.pdfService.updateLoading(false);
        this.snackbarService.openSnackbar("PDF generated successfully!");
      },
      error: () => {
        this.pdfService.updateLoading(false);
        this.snackbarService.openSnackbar("Error generating PDF", "Uh-oh");
      },
    });
  }

  private previewFile(data: Blob): void {
    const url = window.URL.createObjectURL(data);
    window.open(url, "_blank");
  }

  // as of now it will not be downloaded directly
  // private downloadFile(data: Blob, filename?: string) {
  //   const url = window.URL.createObjectURL(data);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = filename ?? "document.pdf";
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // }
}
