import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CenterTextComponent } from './center-text.component';

describe('CenterTextComponent', () => {
  let component: CenterTextComponent;
  let fixture: ComponentFixture<CenterTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CenterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
