import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerModule } from '@itsg/ui';
import { UiTestComponent } from './ui-test.component';

describe('UiTestComponent', () => {
  let component: UiTestComponent;
  let fixture: ComponentFixture<UiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTestComponent ],
      imports: [SpinnerModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spinner', () => {
    const fixture = TestBed.createComponent(UiTestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mat-spinner')).toBeTruthy;
  });

});
