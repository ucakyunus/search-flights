import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubmitButton } from '@/components/submit-button';

describe('SubmitButton Component', () => {
  it('SubmitButton matches snapshot', () => {
    const { asFragment } = render(<SubmitButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with the correct icon', () => {
    render(<SubmitButton />);
    const icon = screen.getByTestId('submit-icon'); // Ensure the icon in SubmitButton has this test ID
    expect(icon).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<SubmitButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<SubmitButton disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('has correct styling when disabled', () => {
    render(<SubmitButton disabled />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('Mui-disabled');
  });
});
