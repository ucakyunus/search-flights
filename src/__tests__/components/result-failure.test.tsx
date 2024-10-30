import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ResultFailure from '@/components/result/failure';

test('ResultFailure matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <ResultFailure />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
