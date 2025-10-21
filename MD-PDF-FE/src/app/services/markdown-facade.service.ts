import { computed, Injectable, signal } from "@angular/core";
import { marked } from "marked";

@Injectable({
  providedIn: "root",
})
export class MarkdownFacadeService {
  private markdownHTML = signal<string>("");
  readonly htmlString = computed(() => this.markdownHTML());

  public setMarkdown(html: string): void {
    this.markdownHTML.set(html);
  }
}
