import { render } from '@testing-library/react';
import { Header, HeaderProps } from '@/components/header';

const mockProps: HeaderProps = {
  bgColor: 'dark',
};

test('Header matches snapshot', () => {
  const { asFragment } = render(<Header {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
