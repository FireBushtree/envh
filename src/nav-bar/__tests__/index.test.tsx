import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../nav-bar';

describe('<NavBar />', () => {
  test('should render default', () => {
    const component = render(<NavBar>nav-bar</NavBar>);
    const { container } = component;
    expect(container).toMatchSnapshot();
  });

  test('render left, right by props', () => {
    render(
      <NavBar left="left" right="right">
        nav-bar
      </NavBar>,
    );

    expect(screen.getByText('left')).toBeTruthy();
    expect(screen.getByText('right')).toBeTruthy();
  });

  test('click', () => {
    let leftCount = 0;
    let rightCount = 0;

    render(
      <NavBar
        left="left"
        right="right"
        onLeftClick={() => {
          leftCount += 1;
        }}
        onRightClick={() => {
          rightCount += 1;
        }}
      >
        nav-bar
      </NavBar>,
    );

    userEvent.click(screen.getByText('left'));
    expect(leftCount).toBe(1);
    userEvent.click(screen.getByText('right'));
    expect(rightCount).toBe(1);

    userEvent.click(screen.getByText('left'));
    expect(leftCount).toBe(2);
  });
});
