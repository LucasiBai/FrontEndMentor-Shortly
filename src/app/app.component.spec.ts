import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationModule } from './modules/navigation/navigation.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavigationModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('Should contain router-outlet', () => {
    const routerOutlet =
      fixture.debugElement.nativeElement.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });

  it('Should contain nav-bar', () => {
    const navBar =
      fixture.debugElement.nativeElement.querySelector('app-nav-bar');

    expect(navBar).toBeTruthy();
  });
});
