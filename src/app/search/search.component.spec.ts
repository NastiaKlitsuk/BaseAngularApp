import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterTestingModule } from "@angular/router/testing";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should erase search event when clicked", () => {
    let searchQuery: string;
    let expectedSearchQuery = "dress";

    let searchInputElement = fixture.debugElement.nativeElement.querySelector(
      "input"
    );
    searchInputElement.value = "dress";
    fixture.detectChanges();

    component.search.subscribe(
      (enteredString: string) => (searchQuery = enteredString)
    );

    let searchIcon = fixture.debugElement.query(By.css("mat-icon"));
    searchIcon.triggerEventHandler("click", null);
    expect(searchQuery).toBe(expectedSearchQuery);
  });
});
