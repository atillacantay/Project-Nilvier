import {
  FooditiveState,
  FooditiveActionTypes,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  Category,
} from './types'

export const initialState: FooditiveState = {
  categories: {},
  isFetching: false,
  error: undefined,
}

export function fooditiveReducer(state = initialState, action: FooditiveActionTypes): FooditiveState {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: items,
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Error occured',
      }
    default:
      return state
  }
}

const items: Category = {
  [0]: {
    category_name: 'alkollü içkiler - 1',
    date: '12/06/2020',
    contents: [
      {
        company:
          'İkram Turizm Sanayi ve Dış Ticaret Limited Şirketi - Modül Disko: Aksaray Mah. İnkılap Cad. No:11/A Merkez Fatih - İstanbul',
        products: [
          {
            brand: '',
            product_name: 'Likör (Hazelnut Aromalı)',
            unsuitability: 'Tersiyer butil alkol',
            serial_number: '',
          },
          {
            brand: '',
            product_name: 'Likör',
            unsuitability: 'Tersiyer butil alkol',
            serial_number: '',
          },
        ],
      },
      {
        company:
          'Patika Turizm Tekstil Sanayi ve Ticaret Limited Şirketi - Hatay Sofrası: Topkapı Mah. Millet Cad.No:176/A Merkez Fatih - İstanbul',
        products: [
          {
            brand: '',
            product_name: 'Rakı',
            unsuitability: 'Tersiyer butil alkol',
            serial_number: '',
          },
        ],
      },
      {
        company: 'Halis ÇELİK-Rio Gece Kulübü: Aksaray Mah. Koçibey Sok. No:23 Merkez Fatih - İstanbul',
        products: [
          {
            brand: '',
            product_name: 'Vodka',
            unsuitability: 'Tersiyer butil alkol',
            serial_number: '',
          },
        ],
      },
      {
        company: 'Kırbıyık İçecek Dağ. Paz.Tur. Otel. İnş.Tic. San. A.Ş. Serik/ANTALYA',
        products: [
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '31.08.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '12.02.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '06.09.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '08.07.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '31.07.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '19.08.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '29.08.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '20.05.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '30.07.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '18.07.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '03.09.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '29.07.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Ürün içeriğinde üzüm alkolü olmaması',
            serial_number: '29.06.2018',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '28.02.2019',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '29.12.2018',
          },
          {
            brand: 'Coctail Mojito',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '04.12.2018',
          },
          {
            brand: 'Coctail Sek On The Beach',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '25.12.2018',
          },
          {
            brand: 'Coctail Cosmopolitan',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '23.10.2018',
          },
          {
            brand: 'Coctail Pinacolada',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '07.12.2018',
          },
          {
            brand: 'Coctail Sek On The Beach',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '30.11.2018',
          },
          {
            brand: 'Coctail Mojito',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '16.05.2019',
          },
          {
            brand: 'Coctail Pinacolada',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '06.09.2019',
          },
          {
            brand: '14.4 Shot',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Ürün içeriğinde üzüm alkolü olmaması',
            serial_number: '16.10.2017',
          },
          {
            brand: 'Volim',
            product_name: 'Aromatize Şarap Bazlı İçki',
            unsuitability: 'Dışardan Etil Alkol İlavesi',
            serial_number: '30.08.2019',
          },
        ],
      },
    ],
  },
  [1]: {
    category_name: 'alkolsüz içecekler',
    date: '12/06/2020',
    contents: [
      {
        company:
          'Ali Yelyetmez Global Enerji İçecekleri-Ali YELYETMEZ: Yakuplu Mah. 35. Sok. No:16/11 Merkez Beylikdüzü - İstanbul',
        products: [
          {
            brand: 'New Nitro',
            product_name: 'New Nitro Full+Power Ginseng Drink (Nitro Tuttı Fruttı Aromalı Ginsengli Gazlı İçecek)',
            unsuitability: 'İlaç etken maddesi (Sildenafil)',
            serial_number: '19196',
          },
          {
            brand: 'Nitro Max Gold',
            product_name: 'Nitro Max Gold Tutti Frutti Aromalı Ginsengli Gazlı İçecek 150 ml',
            unsuitability: 'İlaç etken maddesi (Sildenafil)',
            serial_number: '27.07.2018',
          },
          {
            brand: 'Nitro Max Gold',
            product_name:
              'Nitro Max Gold Ginseng Drink (Nitro Max Gold Tutti Frutti Aromalı Ginsengli Gazlı İçecek 200 ml)',
            unsuitability: 'İlaç etken maddesi (Sildenafil)',
            serial_number: '27.07.2018',
          },
        ],
      },
      {
        company:
          'NY Verde Gıda Ticaret Limited Şirketi: Barbaros Mah. Barbaros Cad. No:120/A Merkez Ataşehir - İstanbul',
        products: [
          {
            brand: 'Energy Plus Maxi Aphrodisiac Power',
            product_name: 'Energy Plus Maxi Aphrodisiac Power Ginsengli Karışık Meyve Aromalı İçecek 125 ml',
            unsuitability: 'İlaç etken maddesi (Sildenafil)',
            serial_number: '0003',
          },
        ],
      },
    ],
  },
}
