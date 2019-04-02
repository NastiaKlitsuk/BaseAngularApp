import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-topbar',
  template: ''
})
class FakeTopbarComponent {}

@Component({
  selector: 'app-sidebar',
  template: ''
})
class FakeSidebarComponent {}

@Component({
  selector: 'app-search',
  template: ''
})
class FakeSearchComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        FakeSidebarComponent,
        FakeTopbarComponent,
        FakeSearchComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'store-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('store-app');
  });
});
