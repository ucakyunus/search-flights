import { render } from '@testing-library/react';
import {
  CabinSelectorPopover,
  CabinSelectorPopoverProps,
} from '@/components/cabin-and-passenger/cabin-selector-popover';
import { FareCategories } from '@/constants';

const mockProps: CabinSelectorPopoverProps = {
  personCount: 2,
  cabinType: FareCategories.ECONOMY,
  onPersonCount: jest.fn(),
  onCabinType: jest.fn(),
  anchorEl: document.createElement('div'),
};

test('CabinSelectorPopover matches snapshot', () => {
  const { asFragment } = render(<CabinSelectorPopover {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
