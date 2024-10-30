import { render } from '@testing-library/react';
import { CabinAndPassenger, CabinAndPassengerProps } from '@/components/cabin-and-passenger';
import { FareCategories } from '@/constants';

const mockProps: CabinAndPassengerProps = {
  personCount: 2,
  cabinType: FareCategories.ECONOMY,
  onPersonCount: jest.fn(),
  onCabinType: jest.fn(),
};

test('CabinAndPassenger matches snapshot', () => {
  const { asFragment } = render(<CabinAndPassenger {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
