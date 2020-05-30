import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CultivosPage } from './cultivos.page';

describe('CultivosPage', () => {
  let component: CultivosPage;
  let fixture: ComponentFixture<CultivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CultivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
