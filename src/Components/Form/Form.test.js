import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Form component', () => {
  it('loads and displays initial state as expected', () => {
    render(<Form />);

    const get = screen.getByTestId('get');
    const put = screen.getByTestId('put');
    expect(get).toHaveStyle("backgroundColor: red")
    expect(put).toHaveStyle("backgroundColor: white")
  });

  it('changes state appropriately', () => {
    render(<Form />);

    const put = screen.getByTestId('put');

    fireEvent.click(put);
    // setTimeout(() => {
    //   expect(put).toHaveStyle("backgroundColor: red")
    // }, 500);

  });
});