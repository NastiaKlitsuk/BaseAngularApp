import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { SidebarComponent } from "./sidebar.component";
import { By } from "@angular/platform-browser";
import { RouterLinkDirectiveStub } from "../testing/router-link-directive-stub";
import { RouterTestingModule } from "@angular/router/testing";
import { GlobalState } from "../store/global/global.reducer";
import { Store } from "@ngrx/store";
import { TestStore } from "../testing/test-store";
import { RouterLink } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  template: ""
})
export class DummyComponent {}

describe("SidebarComponent", () => {
  let routerLinks;
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: "category/:categoryName", component: DummyComponent }
        ])
      ],
      declarations: [SidebarComponent, DummyComponent, RouterLinkDirectiveStub],
      providers: [
        { provide: Store, useClass: TestStore },
        { provide: RouterLink, useClass: RouterLinkDirectiveStub }
      ]
    }).compileComponents();
  }));

  beforeEach(inject([Store], (mockStore: TestStore<GlobalState>) => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding

    // find DebugElements with an attached RouterLinkStubDirective
    let debugElementsWithRouterLink = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub)
    );

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = debugElementsWithRouterLink.map(de => de.injector.get(RouterLinkDirectiveStub));
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("can get RouterLinks from template", () => {
    expect(routerLinks.length).toBe(4, "should have 4 routerLinks");

    expect(routerLinks[0].linkParams[0]).toBe('/category');
    expect(routerLinks[0].linkParams[1]).toBe('HOME');

    expect(routerLinks[1].linkParams[0]).toBe('/category');
    expect(routerLinks[1].linkParams[1]).toBe('ART');

    expect(routerLinks[2].linkParams[0]).toBe('/category');
    expect(routerLinks[2].linkParams[1]).toBe('CLOTHES');

    expect(routerLinks[3].linkParams[0]).toBe('/category');
    expect(routerLinks[3].linkParams[1]).toBe('TOYS');
  });
}); 
