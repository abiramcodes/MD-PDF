import { Component, signal } from "@angular/core";
import { MarkdownAreaComponent } from "./components/markdown-area/markdown-area.component";
import { MarkdownGeneratorComponent } from "./components/markdown-generator/markdown-generator.component";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    MarkdownAreaComponent,
    MarkdownGeneratorComponent,
    MatButtonModule,
    ToolbarComponent,
  ],
})
export class App {
  protected readonly title = signal("mdpdf");
}
