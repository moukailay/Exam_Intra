import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CalculatorPage from './CalculatorPage';
import CalcService from '../services/CalcService';

jest.mock('../services/CalcService', () => ({
  add: jest.fn(),
  sub: jest.fn()
}));


describe('CalculatorPage', () => {
  beforeEach(() => {
    CalcService.add.mockClear();
    CalcService.sub.mockClear();
  });

  test('renders two forms with inputs and buttons', () => {
    render(<CalculatorPage />);
    const forms = screen.getAllByRole('form');
    expect(forms).toHaveLength(2);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(4);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('adds two numbers when form is submitted', async () => {
    const result = '5';
    CalcService.add.mockReturnValue(result);  
    render(<CalculatorPage />);
    const oneInput = screen.getByPlaceholderText('One');  
    const twoInput = screen.getByPlaceholderText('Two');  
    const addButton = screen.getByRole('button', { name: 'Additionne' });
    fireEvent.change(oneInput, { target: { value: '2' } });
    fireEvent.change(twoInput, { target: { value: '3' } });
    fireEvent.click(addButton);
    await waitFor(() => expect(CalcService.add).toHaveBeenCalledTimes(1));
    expect(CalcService.add).toHaveBeenCalledWith('2', '3', expect.any(Function));
    const resultElement = screen.getByText(result);
    expect(resultElement).toBeInTheDocument();
    expect(oneInput).toHaveValue('');
    expect(twoInput).toHaveValue('');
  });
  

  test('subtracts two numbers when form is submitted', async () => {
    const result = '2';
    CalcService.sub.mockResolvedValue(result);
    render(<CalculatorPage />);
    const oneInput = screen.getByLabelText('One');
    const twoInput = screen.getByLabelText('Two');
    const subButton = screen.getByRole('button', { name: 'Soustrait' });
    fireEvent.change(oneInput, { target: { value: '5' } });
    fireEvent.change(twoInput, { target: { value: '3' } });
    fireEvent.click(subButton);
    await waitFor(() => expect(CalcService.sub).toHaveBeenCalledTimes(1));
    expect(CalcService.sub).toHaveBeenCalledWith('5', '3', expect.any(Function));
    const resultElement = screen.getByText(result);
    expect(resultElement).toBeInTheDocument();
    expect(oneInput).toHaveValue('');
    expect(twoInput).toHaveValue('');
  });

  test('shows an alert if one or both numbers are missing for addition', () => {
    render(<CalculatorPage />);
    const addButton = screen.getByRole('button', { name: 'Additionne' });
    fireEvent.click(addButton);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Requiert 2 nombres');
  });

  test('shows an alert if one or both numbers are missing for subtraction', () => {
    render(<CalculatorPage />);
    const subButton = screen.getByRole('button', { name: 'Soustrait' });
    fireEvent.click(subButton);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Requiert 2 nombres');
  });
});