import * as React from 'react';
import { render } from '@testing-library/react';
import Scroll from '../scroll';

const loadingContainerClassName = '.eh-scroll-loading-container';
const requestDoneClassName = '.eh-scroll-loading__done-text';

describe('<Scroll />', () => {
  test('should render default', () => {
    const { container } = render(<Scroll />);
    expect(container).toMatchSnapshot();
  });

  test('hasRequestText prop', () => {
    const { container, rerender } = render(<Scroll />);

    let loadingContainer = container.querySelector(loadingContainerClassName);
    expect(loadingContainer).toBeTruthy();

    rerender(<Scroll hasRequestText={false} />);
    loadingContainer = container.querySelector(loadingContainerClassName);
    expect(loadingContainer).toBeFalsy();
  });

  test('requestDone prop', () => {
    const { container, rerender } = render(<Scroll />);
    let textContainer = container.querySelector(requestDoneClassName);
    expect(textContainer).toBeFalsy();

    rerender(<Scroll requestDone />);
    textContainer = container.querySelector(requestDoneClassName);
    expect(textContainer).toBeTruthy();
  });
});
