import { render, screen, fireEvent } from '@testing-library/react';
import MediaCard from '../CofeeCard';

const mockData = {
  "drink_name": "flat white",
  "prices": { "small": 3.5, "medium": 4.0, "large": 4.5 }
};
describe("Should render with the passed parameters", ()=>{
  test('Coffee name should be displayed', () => {
    render(<MediaCard details= {mockData} onCofeeSelect={()=>{}}/>);
    const linkElement = screen.getByText(/flat white/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Coffee order sizes should be displayed', async () => {
    render(<MediaCard details= {mockData} onCofeeSelect={()=>{}}/>);
    expect(screen.getByText(/small/i)).toBeInTheDocument();
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    expect(screen.getByText(/large/i)).toBeInTheDocument();
    const buttons = await screen.findAllByTestId('coffee-size-btn');
    expect(buttons.length).toBe(3);
    let confirmDialog = document.querySelector(`[data-testid="order-confirmation-dialog"]`);
    expect(confirmDialog).toBe(null);
    fireEvent.click(buttons[0]);

  });
});

describe("Confirmation dialog", ()=>{
  test('Confirmation dialog should be displayed upon order button click', async () => {
    render(<MediaCard details= {mockData} onCofeeSelect={()=>{}}/>);
    const buttons = await screen.findAllByTestId('coffee-size-btn');
    expect(buttons.length).toBe(3);
    let confirmDialog = document.querySelector(`[data-testid="order-confirmation-dialog"]`);
    expect(confirmDialog).toBe(null);
    fireEvent.click(buttons[0]);

    confirmDialog = document.querySelector(`[data-testid="order-confirmation-dialog"]`);
    let text = document.querySelector('.confirmation-message');
    expect(text.textContent).toBe('You have selected small - flat white coffee, that is $3.5.Please help with your name.');    
  });

  test("Input value and callback with the same", async ()=>{
    const onCofeeSelect = jest.fn()
    render(<MediaCard details= {mockData} onCofeeSelect={onCofeeSelect}/>);
    const buttons = await screen.findAllByTestId('coffee-size-btn');
    expect(buttons.length).toBe(3);
    let confirmDialog = document.querySelector(`[data-testid="order-confirmation-dialog"]`);
    expect(confirmDialog).toBe(null);
    fireEvent.click(buttons[1]);

    confirmDialog = document.querySelector(`[data-testid="order-confirmation-dialog"]`);
    const input = document.querySelector('input');
    fireEvent.change(input, {target: {value: 'Satish'}});

    const confirmBtn = await screen.getByText('Confirm');
    fireEvent.click(confirmBtn);

    expect(onCofeeSelect).toHaveBeenCalledWith( "Satish", {"name": "flat white", "price": 4, "size": "medium"});
    
  })

});
