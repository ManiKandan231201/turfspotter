import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPageComponent } from './nav-bar-page.component';

describe('NavBarPageComponent', () => {
  let component: NavBarPageComponent;
  let fixture: ComponentFixture<NavBarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
