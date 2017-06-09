import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireComponent } from './hire.component';

describe('HireComponent', () => {
  let component: HireComponent;
  let fixture: ComponentFixture<HireComponent>;
  let content = "hire works!";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'hire works!'`, async () => {
    const about = fixture.debugElement.componentInstance;
    expect(about.title).toEqual(content);
  });

  it('should render title in a p tag', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(content);
  });
});
