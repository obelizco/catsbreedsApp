import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DetailPage } from './detail.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ICat } from 'src/app/models/ICat.interface';

describe('DetailPage', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;
  let modalControllerMock: any;

  beforeEach(async() => {
    modalControllerMock = jasmine.createSpyObj('ModalController', ['dismiss']);

    await TestBed.configureTestingModule({
      declarations: [DetailPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ModalController, useValue: modalControllerMock }
      ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    const catMock: ICat = {
          weight: {
            imperial: "7  -  10",
            metric: "3 - 5"
          },
          id: "abys",
          name: "Abyssinian",
          cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
          vetstreet_url: "http://www.vetstreet.com/cats/abyssinian",
          vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
          temperament: "Active, Energetic, Independent, Intelligent, Gentle",
          origin: "Egypt",
          country_codes: "EG",
          country_code: "EG",
          description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
          life_span: "14 - 15",
          indoor: 0,
          lap: 1,
          alt_names: "1",
          adaptability: 5,
          affection_level: 5,
          child_friendly: 3,
          dog_friendly: 4,
          energy_level: 5,
          grooming: 1,
          health_issues: 2,
          intelligence: 5,
          shedding_level: 2,
          social_needs: 5,
          stranger_friendly: 5,
          vocalisation: 1,
          experimental: 0,
          hairless: 0,
          natural: 1,
          rare: 0,
          rex: 0,
          suppressed_tail: 0,
          short_legs: 0,
          wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
          hypoallergenic: 0,
          reference_image_id: "0XYvRd7oD",
          image: "test_image_url"
        };
    component.detail = catMock;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the modal when close() is called', () => {
    component.close();

    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  });

  it('should display the correct detail input', () => {
    const catMock: ICat = {
      weight: {
        imperial: "7  -  10",
        metric: "3 - 5"
      },
      id: "abys",
      name: "Abyssinian",
      cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
      vetstreet_url: "http://www.vetstreet.com/cats/abyssinian",
      vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
      temperament: "Active, Energetic, Independent, Intelligent, Gentle",
      origin: "Egypt",
      country_codes: "EG",
      country_code: "EG",
      description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
      life_span: "14 - 15",
      indoor: 0,
      lap: 1,
      alt_names: "1",
      adaptability: 5,
      affection_level: 5,
      child_friendly: 3,
      dog_friendly: 4,
      energy_level: 5,
      grooming: 1,
      health_issues: 2,
      intelligence: 5,
      shedding_level: 2,
      social_needs: 5,
      stranger_friendly: 5,
      vocalisation: 1,
      experimental: 0,
      hairless: 0,
      natural: 1,
      rare: 0,
      rex: 0,
      suppressed_tail: 0,
      short_legs: 0,
      wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
      hypoallergenic: 0,
      reference_image_id: "0XYvRd7oD",
      image: "test_image_url"
    };

    component.detail = catMock;
    fixture.detectChanges();

    expect(component.detail.name).toBe('Abyssinian');
    expect(component.detail.origin).toBe('Egypt');
  });
});
