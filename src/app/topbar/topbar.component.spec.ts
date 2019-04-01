import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestStore } from '../testing/test-store';

@Component({
  selector: 'app-search',
  template: ''
})
class FakeSearchComponent {}

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarComponent, FakeSearchComponent],
      providers: [
        {
          provide: Store,
          useClass: TestStore
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
