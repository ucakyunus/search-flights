import { render } from '@testing-library/react';
import { Message, MessageProps } from '@/components/result/message';
import { ResultTypes } from '@/constants';

const mockPropsSuccess: MessageProps = {
  state: ResultTypes.Success,
};

const mockPropsFailure: MessageProps = {
  state: ResultTypes.Failure,
};

test('Message component matches snapshot for success state', () => {
  const { asFragment } = render(<Message {...mockPropsSuccess} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Message component matches snapshot for failure state', () => {
  const { asFragment } = render(<Message {...mockPropsFailure} />);
  expect(asFragment()).toMatchSnapshot();
});
