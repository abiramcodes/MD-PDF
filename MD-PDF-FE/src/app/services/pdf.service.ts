import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { MarkdownFacadeService } from "./markdown-facade.service";

@Injectable({
  providedIn: "root",
})
export class PdfService {
  private readonly baseURL = "/pdf";
  private readonly httpClient = inject(HttpClient);
  private readonly markdownFacadeService = inject(MarkdownFacadeService);

  public readonly isLoading = signal(false);

  public updateLoading(value: boolean): void {
    this.isLoading.set(value);
  }

  public generatePDF(): Observable<Blob> {
    const markdown = this.markdownFacadeService.htmlString();

    return this.httpClient.post(
      `${this.baseURL}/generate`,
      { markdown },
      { responseType: "blob" },
    );
  }
}
