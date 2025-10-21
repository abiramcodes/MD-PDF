import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";
import { MarkdownFacadeService } from "../../services/markdown-facade.service";
import { marked } from "marked";
import { markdown } from "../../mock/markdown.mock";

@Component({
  selector: "app-markdown-area",
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./markdown-area.component.html",
  styleUrl: "./markdown-area.component.scss",
})
export class MarkdownAreaComponent implements OnInit, OnDestroy {
  protected textAreaRows = signal(52);
  public markDownArea = new FormControl("");

  private readonly markdownFacadeService = inject(MarkdownFacadeService);
  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.listenMarkdownChanges();
    this.initializeControl();
  }

  private initializeControl(): void {
    this.markDownArea.setValue(markdown);
  }

  private listenMarkdownChanges(): void {
    this.markDownArea.valueChanges
      .pipe(debounceTime(300), takeUntil(this.unsubscribe$))
      .subscribe((html: string | null) => {
        if (html) {
          this.markdownFacadeService.setMarkdown(html);
          // try to render this with an iFrame tag.
          console.log(marked.parse(html));
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
