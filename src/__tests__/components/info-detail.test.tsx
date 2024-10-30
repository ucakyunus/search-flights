import { render } from '@testing-library/react';
import { InfoDetail, InfoDetailProps } from '@/components/flight-item/info-detail';

const mockProps: InfoDetailProps = {
  time: '10:30 AM',
  portCode: 'JFK',
  cityName: 'New York',
};

test('InfoDetail matches snapshot', () => {
  const { asFragment } = render(<InfoDetail {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
