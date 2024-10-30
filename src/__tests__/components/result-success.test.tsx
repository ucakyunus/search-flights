import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Success, { SuccessProps } from '@/components/result/success';
import { Currency } from '@/constants';

const mockProps: SuccessProps = {
  amount: 100,
  currency: Currency.TRY,
};

describe('ResultSuccess Component', () => {
  it('ResultSuccess matches snapshot', () => {
    const { asFragment } = render(<Success {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct amount and currency', () => {
    render(<Success {...mockProps} />);
    expect(screen.getByText(/TRY\s*100/i)).toBeInTheDocument();
  });

  it('displays custom amount and currency values', () => {
    render(<Success amount={200} currency='EUR' />);
    expect(
      screen.getByText((content) => content.includes('200') && content.includes('EUR')),
    ).toBeInTheDocument();
  });

  it('displays large amount and different currency formats correctly', () => {
    render(<Success amount={1234567.89} currency='JPY' />);
    expect(
      screen.getByText((content) => content.includes('1234567.89') && content.includes('JPY')),
    ).toBeInTheDocument();
  });
});
