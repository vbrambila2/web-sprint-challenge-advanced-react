import AppFunctional from './AppFunctional';
import React from 'react';
import { render } from '@testing-library/react';
// Write your tests here

// Test that the visible texts in headings, buttons, links... render on the screen.
//Test that typing on the input results in its value changing to the entered text.
test('sanity', () => {
  expect(true).toBe(false)
})

beforeEach(() => {
  render(<AppFunctional />)
})

describe('AppFunctional Component', () => {
  test('Renders')
})