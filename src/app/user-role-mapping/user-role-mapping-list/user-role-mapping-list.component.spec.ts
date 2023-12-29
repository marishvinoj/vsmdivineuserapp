import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleMappingListComponent } from './user-role-mapping-list.component';

describe('UserRoleMappingListComponent', () => {
  let component: UserRoleMappingListComponent;
  let fixture: ComponentFixture<UserRoleMappingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRoleMappingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRoleMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
