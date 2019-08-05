import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLocacaoComponent } from './item-locacao.component';

describe('ItemLocacaoComponent', () => {
  let component: ItemLocacaoComponent;
  let fixture: ComponentFixture<ItemLocacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLocacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
