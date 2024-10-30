import { render } from '@testing-library/react';
import { CounterButton, CounterButtonProps } from '@/components/counter-button';

const mockProps: CounterButtonProps = {
  count: 2,
  min: 1,
  max: 10,
  onChange: jest.fn(),
};

test('CounterButton matches snapshot', () => {
  const { asFragment } = render(<CounterButton {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
