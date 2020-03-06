import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanQrComponent } from './scan-qr.component';

describe('ScanQrComponent', () => {
  let component: ScanQrComponent;
  let fixture: ComponentFixture<ScanQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanQrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
