import React from 'react';
import { render } from '@testing-library/react';
import Spin from '../index';

const SPINNING_ELEMENT_CLASS = '.eh-spin.is-spinning';

describe('<Spin>', () => {
  test('render default should spinning', () => {
    const { container } = render(<Spin>spin</Spin>);
    expect(container).toMatchSnapshot();
    const spinEl = container.querySelector(SPINNING_ELEMENT_CLASS);
    expect(spinEl).toBeTruthy();
  });

  test('set spinning props change', () => {
    const { container, rerender } = render(<Spin spinning={false}>spin</Spin>);
    let spinEl = container.querySelector(SPINNING_ELEMENT_CLASS);
    expect(spinEl).toBe(null);

    rerender(<Spin spinning>spin</Spin>);
    spinEl = container.querySelector(SPINNING_ELEMENT_CLASS);
    expect(spinEl).toBeTruthy();
  });
});
