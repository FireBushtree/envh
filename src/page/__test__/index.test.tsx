import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../page';

const defaultClassName = '.eh-spin.eh-page-wrap';
const fixedClassName = '.eh-page-wrap__fixed';
const visibleClassName = '.eh-page-wrap__visible';

describe('<Page />', () => {
  test('should render default and default position is relative', () => {
    const { container } = render(<Page>innerHTML</Page>);
    expect(screen.getByText('innerHTML')).toBeTruthy();

    expect(container).toMatchSnapshot();
    let element = container.querySelector(defaultClassName);
    expect(element).toBeTruthy();

    element = container.querySelector(`${defaultClassName}${fixedClassName}`);
    expect(element).toBe(null);
  });

  test('add fixed props, position shoule be fixed', () => {
    const { container } = render(<Page fixed>innerHTML</Page>);
    const element = container.querySelector(`${defaultClassName}${fixedClassName}`);
    expect(element).toBeTruthy();
  });

  test('add visible props, will add `eh-page-wrap__visible` class', () => {
    const { container, rerender } = render(
      <Page fixed visible={false}>
        innerHTML
      </Page>,
    );
    let element = container.querySelector(
      `${defaultClassName}${fixedClassName}${visibleClassName}`,
    );
    expect(element).toBe(null);

    rerender(
      <Page fixed visible>
        innerHTML
      </Page>,
    );

    element = container.querySelector(`${defaultClassName}${fixedClassName}${visibleClassName}`);
    expect(element).toBeTruthy();
  });
});
