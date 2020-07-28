import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelExampleComponent } from './tabel-example.component';

describe('TabelExampleComponent', () => {
  let component: TabelExampleComponent;
  let fixture: ComponentFixture<TabelExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
