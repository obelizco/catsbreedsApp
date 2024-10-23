import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LandingPage } from './landing.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, ModalController } from '@ionic/angular';
import { CatsService } from 'src/app/core/services/cats.service';
import { ICat } from 'src/app/models/ICat.interface';
import { of } from 'rxjs';
import { DetailPage } from '../detail/detail.page';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;
  let catsServiceMock: any;
  let modalControllerMock: any;
  beforeEach(async () => {
    catsServiceMock = jasmine.createSpyObj('CatsService', ['getBreeds', 'getBreedImages','getBreedsWithImages']);
    modalControllerMock = jasmine.createSpyObj('ModalController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [LandingPage],
      imports: [HttpClientModule, IonicModule.forRoot()],
      providers: [CatsService,
        { provide: ModalController, useValue: modalControllerMock }
      ], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
it('should load cats with images on init', waitForAsync(() => {
  const catsMock: ICat[] = [
    {
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
      reference_image_id: "0XYvRd7oD"
    },
    {
      weight: {
          imperial: "5 - 10",
          metric: "2 - 5"
      },
      id: "acur",
      name: "American Curl",
      cfa_url: "http://cfa.org/Breeds/BreedsAB/AmericanCurl.aspx",
      vetstreet_url: "http://www.vetstreet.com/cats/american-curl",
      vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/american-curl",
      temperament: "Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social",
      origin: "United States",
      country_codes: "US",
      country_code: "US",
      description: "Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.",
      life_span: "12 - 16",
      indoor: 0,
      lap: 1,
      alt_names: "",
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      dog_friendly: 5,
      energy_level: 3,
      grooming: 2,
      health_issues: 1,
      intelligence: 3,
      shedding_level: 3,
      social_needs: 3,
      stranger_friendly: 3,
      vocalisation: 3,
      experimental: 0,
      hairless: 0,
      natural: 0,
      rare: 0,
      rex: 0,
      suppressed_tail: 0,
      short_legs: 0,
      wikipedia_url: "https://en.wikipedia.org/wiki/American_Curl",
      hypoallergenic: 0,
      reference_image_id: "xnsqonbjW"
  }
  ];
  const imageMockAbys = 'https://example.com/abyssinian.jpg';
  const imageMockAcur = 'https://example.com/americancurl.jpg';

  catsServiceMock.getBreeds.and.returnValue(of(catsMock));

  catsServiceMock.getBreedImages.and.callFake((breedId: string) => {
    if (breedId === 'abys') {
      return of(imageMockAbys);
    } else if (breedId === 'acur') {
      return of(imageMockAcur);
    }
    return of('');
  });

  component.getCatsWithImages();
  fixture.detectChanges();
  console.log('component.cats:', component.cats);
  // expect(component.cats.length).toBe(2);
  // expect(component.cats[0].image).toBe(imageMockAbys);
  // expect(component.cats[1].image).toBe(imageMockAcur);
  // expect(component.filteredCats.length).toBe(2)
}));

it('should filter cats based on search query', () => {
  component.cats = [
    {
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
      reference_image_id: "0XYvRd7oD"
    },
    {
      weight: {
          imperial: "5 - 10",
          metric: "2 - 5"
      },
      id: "acur",
      name: "American Curl",
      cfa_url: "http://cfa.org/Breeds/BreedsAB/AmericanCurl.aspx",
      vetstreet_url: "http://www.vetstreet.com/cats/american-curl",
      vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/american-curl",
      temperament: "Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social",
      origin: "United States",
      country_codes: "US",
      country_code: "US",
      description: "Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.",
      life_span: "12 - 16",
      indoor: 0,
      lap: 1,
      alt_names: "",
      adaptability: 5,
      affection_level: 5,
      child_friendly: 4,
      dog_friendly: 5,
      energy_level: 3,
      grooming: 2,
      health_issues: 1,
      intelligence: 3,
      shedding_level: 3,
      social_needs: 3,
      stranger_friendly: 3,
      vocalisation: 3,
      experimental: 0,
      hairless: 0,
      natural: 0,
      rare: 0,
      rex: 0,
      suppressed_tail: 0,
      short_legs: 0,
      wikipedia_url: "https://en.wikipedia.org/wiki/American_Curl",
      hypoallergenic: 0,
      reference_image_id: "xnsqonbjW"
  }
  ];
  const eventMock = { target: { value: 'Abyssinian' } };
  component.search(eventMock);
  fixture.detectChanges();

  expect(component.filteredCats.length).toBe(1);
  expect(component.filteredCats[0].name).toBe('Abyssinian');
});

it('should open modal with correct details', async () => {
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
  console.log('Llamada de redirectDetail con:', catMock);
  modalControllerMock.create.and.returnValue(Promise.resolve({
    present: () => Promise.resolve()
  }));

  await component.redirectDetail(catMock);
  expect(modalControllerMock.create).toHaveBeenCalledWith(jasmine.objectContaining({
    component: DetailPage,
    componentProps: jasmine.objectContaining({
      detail: catMock
    })
  }));
  
});


});


