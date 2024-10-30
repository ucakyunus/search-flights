import { render } from '@testing-library/react';
import { FlightsHeader, HeaderProps } from '@/components/flights-header';
import { ListSortTypes } from '@/constants';

const mockProps: HeaderProps = {
  onSortChange: jest.fn(),
  sortType: ListSortTypes.PriceAscending,
};

test('FlightsHeader matches snapshot', () => {
  const { asFragment } = render(<FlightsHeader {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
