import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';
import axios from 'axios';

jest.mock('axios');

test('displays success message on successful registration', async () => {
  axios.post.mockResolvedValueOnce({ data: {} });

  render(<Register />);
  
  fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'john' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: '12345' } });
  fireEvent.click(screen.getByText(/Register/i));

  expect(await screen.findByText(/Registration successful!/i)).toBeInTheDocument();
});

test('displays error message on failed registration', async () => {
  axios.post.mockRejectedValueOnce(new Error('Registration failed!'));

  render(<Register />);
  
  fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'ozoemena' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: '12345' } });
  fireEvent.click(screen.getByText(/Register/i));

  expect(await screen.findByText(/Registration failed!/i)).toBeInTheDocument();
});
