import React from 'react';
import { render } from '@testing-library/react';
import Demo from '../demo';

describe('use demo', () => {
  test('should render default', () => {
    const { container } = render(<Demo name="xm" />);
    expect(container).toMatchSnapshot();
  });
});
