import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrandCode, Currency, Status } from '@/constants';
import { DetailItem, DetailItemProps } from '@/components/flight-item/detail-item';

const mockDetail: DetailItemProps = {
  detail: {
    status: Status.AVAILABLE,
    price: { amount: 100, currency: Currency.TRY },
    brandCode: BrandCode.ECO_FLY,
    rights: ['Right 1', 'Right 2'],
    order: 0,
  },
  isPromotionActive: true,
};

test('DetailItem matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <DetailItem {...mockDetail} />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
