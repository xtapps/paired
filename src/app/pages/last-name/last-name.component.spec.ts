import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastNameComponent } from './last-name.component';

describe('LastNameComponent', () => {
  let component: LastNameComponent;
  let fixture: ComponentFixture<LastNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
