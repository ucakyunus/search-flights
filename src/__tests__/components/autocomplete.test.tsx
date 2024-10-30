import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete, AutocompleteProps } from '@/components/autocomplete';

const mockProps: AutocompleteProps = {
  options: [
    { label: 'New York', title: 'New York', value: 'NYC', code: 'NYC' },
    { label: 'Los Angeles', title: 'Los Angeles', value: 'LAX', code: 'LAX' },
  ],
  placeholder: 'Select a city',
  startAdornment: (
    <span role='img' aria-label='location'>
      📍
    </span>
  ),
};

describe('Autocomplete Component', () => {
  it('Autocomplete matches snapshot', () => {
    const { asFragment } = render(<Autocomplete {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Autocomplete matches snapshot with different options', () => {
    const differentProps: AutocompleteProps = {
      ...mockProps,
      options: [
        { label: 'Chicago', title: 'Chicago', value: 'CHI', code: 'CHI' },
        { label: 'San Francisco', title: 'San Francisco', value: 'SFO', code: 'SFO' },
      ],
    };
    const { asFragment } = render(<Autocomplete {...differentProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Autocomplete matches snapshot with no options', () => {
    const noOptionsProps: AutocompleteProps = {
      ...mockProps,
      options: [],
    };
    const { asFragment } = render(<Autocomplete {...noOptionsProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Autocomplete matches snapshot with different placeholder', () => {
    const differentPlaceholderProps: AutocompleteProps = {
      ...mockProps,
      placeholder: 'Choose a destination',
    };
    const { asFragment } = render(<Autocomplete {...differentPlaceholderProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
