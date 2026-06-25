import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLibrary } from './example-library';

describe('ExampleLibrary', () => {
  let component: ExampleLibrary;
  let fixture: ComponentFixture<ExampleLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
