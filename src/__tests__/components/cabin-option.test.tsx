import { render } from '@testing-library/react';
import { CabinOption, CabinOptionProps } from '@/components/flight-item/cabin-option';

const mockProps: CabinOptionProps = {
  price: 100,
  label: 'Economy',
  currency: 'USD',
  isSelected: false,
};

test('CabinOptions matches snapshot', () => {
  const { asFragment } = render(<CabinOption {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
