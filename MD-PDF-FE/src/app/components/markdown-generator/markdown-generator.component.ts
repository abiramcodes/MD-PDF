import { Component, computed, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MarkdownModule, MermaidAPI } from "ngx-markdown";
import { MarkdownFacadeService } from "../../services/markdown-facade.service";

@Component({
  selector: "app-markdown-generator",
  imports: [MatButtonModule, MarkdownModule],
  templateUrl: "./markdown-generator.component.html",
  styleUrl: "./markdown-generator.component.scss",
})
export class MarkdownGeneratorComponent {
  protected readonly markdownFacadeService = inject(MarkdownFacadeService);
  protected readonly mermaidOptions: MermaidAPI.MermaidConfig = {
    theme: "forest",
    look: "handDrawn",
  };
}
