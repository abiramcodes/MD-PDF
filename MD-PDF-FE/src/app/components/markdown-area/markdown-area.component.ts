import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";
import { MarkdownFacadeService } from "../../services/markdown-facade.service";

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
    this.markDownArea.valueChanges
      .pipe(debounceTime(300), takeUntil(this.unsubscribe$))
      .subscribe((html: string | null) => {
        this.markdownFacadeService.setMarkdown(html);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
