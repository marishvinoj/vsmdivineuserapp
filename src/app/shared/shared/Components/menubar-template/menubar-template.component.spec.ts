import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarTemplateComponent } from './menubar-template.component';

describe('MenubarTemplateComponent', () => {
  let component: MenubarTemplateComponent;
  let fixture: ComponentFixture<MenubarTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenubarTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
