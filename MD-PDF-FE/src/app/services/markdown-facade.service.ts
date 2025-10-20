import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MarkdownFacadeService {
  private markdownHTML = signal<string>("");

  readonly htmlString = computed(() => this.markdownHTML());

  public setMarkdown(html: string | null): void {
    this.markdownHTML.set(html ?? "");
  }
}
