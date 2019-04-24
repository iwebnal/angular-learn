import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDynamicComponent } from './item-dynamic.component';

describe('ItemDynamicComponent', () => {
  let component: ItemDynamicComponent;
  let fixture: ComponentFixture<ItemDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
