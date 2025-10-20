import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownAreaComponent } from './markdown-area.component';

describe('MarkdownAreaComponent', () => {
  let component: MarkdownAreaComponent;
  let fixture: ComponentFixture<MarkdownAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
