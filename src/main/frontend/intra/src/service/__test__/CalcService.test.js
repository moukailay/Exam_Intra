import React from 'react';
import { render } from '@testing-library/react';
import CalcService from '../CalcService';


test('adds two numbers', () => {
    const { getByText } = render(<CalcService />);
    const addBtn = getByText('Add');
    const num1Input = getByLabelText('Number 1');
    const num2Input = getByLabelText('Number 2');
    const result = getByTestId('result');
  
    fireEvent.change(num1Input, { target: { value: '2' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    fireEvent.click(addBtn);
  
    expect(result).toHaveTextContent('5');
  });

    test('substract two numbers', () => {
    const { getByText } = render(<CalcService />);
    const subBtn = getByText('Substract');
    const num1Input = getByLabelText('Number 1');
    const num2Input = getByLabelText('Number 2');
    const result = getByTestId('result');

    fireEvent.change(num1Input, { target: { value: '2' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    fireEvent.click(subBtn);

    expect(result).toHaveTextContent('-1');
    });

    