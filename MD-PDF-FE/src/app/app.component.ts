import { Component, computed, inject, signal } from "@angular/core";
import { MarkdownAreaComponent } from "./components/markdown-area/markdown-area.component";
import { MarkdownGeneratorComponent } from "./components/markdown-generator/markdown-generator.component";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PdfService } from "./services/pdf.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    MarkdownAreaComponent,
    MarkdownGeneratorComponent,
    MatButtonModule,
    ToolbarComponent,
    MatProgressSpinnerModule,
  ],
})
export class App {
  protected readonly title = signal("mdpdf");
  private readonly pdfService = inject(PdfService);

  protected isLoading = computed(() => this.pdfService.isLoading());
}
