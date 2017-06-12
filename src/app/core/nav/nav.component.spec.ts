import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let content = "Stefan Nieuwenhuis";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Stefan Nieuwenhuis'`, async () => {
    const home = fixture.debugElement.componentInstance;
    expect(home.title).toEqual(content);
  });

  it('should render title in an a tag', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain(content);
  });
});
