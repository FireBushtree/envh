import React from 'react';
import { render } from '@testing-library/react';
import Spin from '../index';

const SPINNING_ELEMENT_CLASS = '.eh-spin.eh-spin-spinning';
const INLINE_SPINN_CLASS = '.eh-spin.eh-spin-inline';

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

  test('has no children will display inline-block', () => {
    const { container } = render(<Spin />);
    const spinEl = container.querySelector(INLINE_SPINN_CLASS);
    expect(spinEl).toBeTruthy();
  });
});
