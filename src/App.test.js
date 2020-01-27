import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("rtl renders without crashing", () => {
  render(<App />);
});