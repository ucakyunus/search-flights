import { render } from '@testing-library/react';
import { PromotionSwitch, PromotionSwitchProps } from '@/components/promotion-switch';

const mockProps: PromotionSwitchProps = {
  checked: true,
  onChange: jest.fn(),
};

test('PromotionSwitch matches snapshot', () => {
  const { asFragment } = render(<PromotionSwitch {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
