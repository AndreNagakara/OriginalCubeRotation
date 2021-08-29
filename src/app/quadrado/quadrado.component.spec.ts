import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoComponent } from './quadrado.component';

describe('QuadradoComponent', () => {
  let component: QuadradoComponent;
  let fixture: ComponentFixture<QuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => { //6
    const fixture = TestBed.createComponent(QuadradoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Entrada');
  });

  it('teste unitário 1 ', async() => {
    component.entrada.nativeElement.value = "1,2,3,4,5,6,7,8,9";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('4,1,2,7,5,3,8,9,6');
  });

  it('teste unitário 2 ', async() => {
    component.entrada.nativeElement.value = "4,2,9,1";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('9,4,1,2');
  });

  it('teste unitário 3 ', async() => {
    component.entrada.nativeElement.value = "-9";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('-9');
  });

  it('teste unitário 4 ', async() => {
    component.entrada.nativeElement.value = "2,3";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('2,3- Inválido');
  });

  it('teste unitário 5 ', async() => {
    component.entrada.nativeElement.value = "3,-5,-2";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('3,-5,-2- Inválido');
  });

  it('teste unitário 6 ', async() => {
    component.entrada.nativeElement.value = "1,1,1,1,1";
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.texto).toContain('1,1,1,1,1- Inválido');
  });


});
