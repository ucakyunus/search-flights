import { render } from '@testing-library/react';
import { FlightsContainer } from '@/components/flights-container';

test('FlightsContainer matches snapshot', () => {
  const { asFragment } = render(
    <FlightsContainer>
      <div>Test Child</div>
    </FlightsContainer>,
  );
  expect(asFragment()).toMatchSnapshot();
});
