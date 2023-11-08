import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordBlockComponent } from './password-block.component';

describe('PasswordBlockComponent', () => {
  let component: PasswordBlockComponent;
  let fixture: ComponentFixture<PasswordBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordBlockComponent]
    });
    fixture = TestBed.createComponent(PasswordBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
