import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRandonnee } from './liste-randonnee';

describe('ListeRandonnee', () => {
  let component: ListeRandonnee;
  let fixture: ComponentFixture<ListeRandonnee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRandonnee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRandonnee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
