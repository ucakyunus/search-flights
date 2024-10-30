import { render } from '@testing-library/react';
import withSuspense from '@/components/lazy';

const MockComponent = () => <div>Mock Component</div>;
const WrappedComponent = withSuspense(MockComponent);

test('withSuspense matches snapshot', () => {
  const { asFragment } = render(<WrappedComponent />);
  expect(asFragment()).toMatchSnapshot();
});
