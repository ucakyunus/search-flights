import { render } from '@testing-library/react';
import { Duration, DurationProps } from '@/components/flight-item/duration';

const mockProps: DurationProps = {
  time: '2h 30m',
  mr: 3,
};

test('Duration matches snapshot', () => {
  const { asFragment } = render(<Duration {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
