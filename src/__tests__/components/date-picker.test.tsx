import { render } from '@testing-library/react';
import { DatePicker } from '@/components/date-picker';

test('DatePicker matches snapshot', () => {
  const { asFragment } = render(<DatePicker />);
  expect(asFragment()).toMatchSnapshot();
});
