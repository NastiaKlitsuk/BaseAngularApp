import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContentComponent } from "./content.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Store } from '@ngrx/store';
import { TestStore } from '../testing/test-store';

describe("ContentComponent", () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ContentComponent],
      providers: [{ provide: Store, useClass: TestStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
