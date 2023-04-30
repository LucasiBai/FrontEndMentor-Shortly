import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { ButtonsModule } from 'src/app/modules/buttons/buttons.module';
import { LinkShortingModule } from 'src/app/modules/link-shorting/link-shorting.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsModule, LinkShortingModule],
      declarations: [HomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should render correctly', () => {
    expect(component).toBeTruthy();
    expect(component.contentArticles).toBeTruthy();
  });
});
