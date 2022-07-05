import { render, screen, fireEvent } from '@testing-library/react';
import CofeeOrderCards from '../CofeeOrderCards';

const mockData = {
  "long black": {
    small: {
      users: ['Satish', 'Raj', 'Simon'],
      number: 4
    },
    large: {
      users: ['Ravi', 'Suresh'],
      number: 7
    },
    ultra: {
      users: ['Kevin', 'Bob'],
      number: 5
    }
  },
  /*"flat white":{
    small: {
      users: ['Ravi', 'Suresh'],
      number: 7
    },
    ultra: {
      users: ['Kevin', 'Bob'],
      number: 5
    }
  }*/
};
describe("Should render with the passed parameters", ()=>{
  test('Coffee orders should be displayed', () => {
    render(<CofeeOrderCards currentOrder={'long black'} orders={mockData}/>);
    const titleElement = screen.getByText(/long black/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Coffee order sizes should be displayed', async () => {
    render(<CofeeOrderCards currentOrder={'long black'} orders={mockData}/>);
    expect(screen.getByText(/small/i)).toBeInTheDocument();
    expect(screen.getByText(/ultra/i)).toBeInTheDocument();
    expect(screen.getByText(/large/i)).toBeInTheDocument();
    const buttons = await screen.findAllByTestId('coffee-orders-size-btn');
    expect(buttons.length).toBe(3);
    let confirmDialog = document.querySelector(`[data-testid="order-list-dialog"]`);
    expect(confirmDialog).toBe(null);
    fireEvent.click(buttons[0]);

    confirmDialog = await screen.findAllByTestId("order-list-dialog");
    expect(confirmDialog.length).toBe(1);
  });
  
});

describe("Orders list dialog", ()=>{
  test('Orders list dialog should be displayed upon order size button click', async () => {
    render(<CofeeOrderCards currentOrder={'long black'} orders={mockData}/>);
    const buttons = await screen.findAllByTestId('coffee-orders-size-btn');
    expect(buttons.length).toBe(3);
    let confirmDialog = document.querySelector(`[data-testid="order-list-dialog"]`);
    expect(confirmDialog).toBe(null);
    fireEvent.click(buttons[0]);

    confirmDialog = document.querySelector(`[data-testid="order-list-dialog"]`);
    let text = document.querySelector('.order-text');
    expect(text.textContent).toBe('long black - small');
    
    const list = screen.getAllByTestId('coffee-order-list');
    expect(list.length).toBe(3);
    expect(list[0].textContent).toBe('Satish');
    
  });
});

