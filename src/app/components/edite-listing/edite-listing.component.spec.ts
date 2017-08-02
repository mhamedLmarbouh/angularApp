import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeListingComponent } from './edite-listing.component';

describe('EditeListingComponent', () => {
  let component: EditeListingComponent;
  let fixture: ComponentFixture<EditeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
