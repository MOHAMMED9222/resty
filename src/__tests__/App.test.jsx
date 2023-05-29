import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  it('Allows Form and Results to render appropriately', () => {
    render(<App />);
    let urlInput = screen.getByTestId('url');
    let deleteSpan = screen.getByTestId('delete');
    let button = screen.getByTestId('button');

    fireEvent.change(urlInput, {target: {value: 'google.com'}})
    fireEvent.click(deleteSpan);
    fireEvent.click(button)

    // let json = screen.getByTestId('json');
    // expect(json).toHaveTextContent('fake thing 1')
  })
})