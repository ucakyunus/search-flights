import { render } from '@testing-library/react';
import {
  CabinTypeSelector,
  CabinTypeSelectorProps,
} from '@/components/cabin-and-passenger/cabin-type-selector';
import { FareCategories } from '@/constants';

const mockProps: CabinTypeSelectorProps = {
  value: FareCategories.ECONOMY,
  onChange: jest.fn(),
};

test('CabinTypeSelector matches snapshot', () => {
  const { asFragment } = render(<CabinTypeSelector {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
