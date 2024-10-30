import { render } from '@testing-library/react';

import { FlightItem, FlightItemProps } from '@/components/flight-item';
import { BrandCode, Currency, Status } from '@/constants';

const mockProps: FlightItemProps = {
  data: {
    departureDateTimeDisplay: '10:00 AM',
    arrivalDateTimeDisplay: '12:30 PM',
    originAirport: {
      name: 'Istanbul Airport',
      code: 'IST',
      city: { code: 'IST', name: 'Istanbul' },
      country: { code: 'TR', name: 'Turkey' },
    },
    destinationAirport: {
      name: 'Antalya Airport',
      code: 'AYT',
      city: { code: 'AYT', name: 'Antalya' },
      country: { code: 'TR', name: 'Turkey' },
    },
    flightDuration: '5h 30m',
    fareCategories: {
      BUSINESS: {
        subcategories: [
          {
            order: 1,
            price: { amount: 400, currency: Currency.TRY },
            brandCode: BrandCode.ECO_FLY,
            status: Status.AVAILABLE,
            rights: ['20 kg Bagaj', 'Ucresiz Yemek Secimi'],
          },
          {
            order: 2,
            price: { amount: 500, currency: Currency.TRY },
            brandCode: BrandCode.EXTRA_FLY,
            status: Status.AVAILABLE,
            rights: ['30 kg Bagaj', 'Standart Koltuk Secimi', 'Ucresiz Yemek Secimi'],
          },
          {
            order: 3,
            price: { amount: 1000, currency: Currency.TRY },
            brandCode: BrandCode.PRIME_FLY,
            status: Status.AVAILABLE,
            rights: [
              '50 kg Bagaj',
              'Standart Koltuk Secimi',
              'Ucretsiz Degisiklik',
              'Ucresiz Yemek Secimi',
            ],
          },
        ],
      },
      ECONOMY: {
        subcategories: [
          {
            order: 1,
            price: { amount: 200, currency: Currency.TRY },
            brandCode: BrandCode.ECO_FLY,
            status: Status.AVAILABLE,
            rights: ['15 kg Bagaj'],
          },
          {
            order: 2,
            price: { amount: 400, currency: Currency.TRY },
            brandCode: BrandCode.EXTRA_FLY,
            status: Status.AVAILABLE,
            rights: ['20 kg Bagaj', 'Standart Koltuk Secimi'],
          },
          {
            order: 1,
            price: { amount: 800, currency: Currency.TRY },
            brandCode: BrandCode.PRIME_FLY,
            status: Status.AVAILABLE,
            rights: ['25 kg Bagaj', 'Standart Koltuk Secimi', 'Ucretsiz Degisiklik'],
          },
        ],
      },
    },
  },
  index: 0,
  isPromotionActive: true,
  selectedFareOption: null,
  setSelectedFareOption: jest.fn(),
};

test('FlightItem matches snapshot', () => {
  const { asFragment } = render(<FlightItem {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
