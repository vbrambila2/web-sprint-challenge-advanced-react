import AppFunctional from './AppFunctional';
import React from 'react';
import { render, fireEvent, screen, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

const emailInput = () => screen.getByPlaceholderText('type email');
const getById = queryByAttribute.bind(null, 'id');
const dom = render(<AppFunctional />);
const submitBtn = getById(dom.container, 'submit');

test('sanity', () => {
  expect(true).toBe(true)
})

beforeEach(() => {
  render(<AppFunctional />)
})

describe('AppFunctional Component', () => {
  test('Renders left button', () => {
    const leftBtn = screen.queryByText('LEFT');
    expect(leftBtn).toBeVisible();
    expect(leftBtn).toBeInTheDocument();
  })
  test('Renders right button', () => {
    const rightBtn = screen.queryByText('RIGHT');
    expect(rightBtn).toBeVisible();
    expect(rightBtn).toBeInTheDocument();
  })
  test('Renders up button', () => {
    const upBtn = screen.queryByText('UP');
    expect(upBtn).toBeVisible();
    expect(upBtn).toBeInTheDocument();
  })
  test('Renders down button', () => {
    const downBtn = screen.queryByText('DOWN');
    expect(downBtn).toBeVisible();
    expect(downBtn).toBeInTheDocument();
  })
  test('We can change value of input', async () => {
    fireEvent.change(emailInput(), { target: { value: 'lady@gaga.com' } });
    fireEvent.click(submitBtn);
    await screen.findByDisplayValue('lady@gaga.com');
  })
})