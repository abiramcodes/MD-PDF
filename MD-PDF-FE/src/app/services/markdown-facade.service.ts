import { computed, Injectable, signal } from "@angular/core";
import { marked } from "marked";

@Injectable({
  providedIn: "root",
})
export class MarkdownFacadeService {
  private markdownHTML = signal<string | null>(null);
  readonly htmlString = computed(() => this.markdownHTML());

  public setMarkdown(html: string | null): void {
    this.markdownHTML.set(html);
  }
}
