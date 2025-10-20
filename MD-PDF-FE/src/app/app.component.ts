import { Component, signal } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MarkdownAreaComponent } from "./components/markdown-area/markdown-area.component";
import { MarkdownGeneratorComponent } from "./components/markdown-generator/markdown-generator.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [
    MarkdownAreaComponent,
    MarkdownGeneratorComponent,
    MatToolbarModule,
  ],
})
export class App {
  protected readonly title = signal("mdpdf");
}
