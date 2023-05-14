import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

test('Renders the BookingForm heading', () => {
  const availableTimes = [];
  const handleUpdateAvailable = jest.fn();
  const submitForm = jest.fn();
  render(<BookingForm availableTimes = {availableTimes} updateAvailable = {handleUpdateAvailable}
    submitForm={submitForm}/>);
  const headingElement = screen.getByText("Booking Table");
  expect(headingElement).toBeInTheDocument();
})
