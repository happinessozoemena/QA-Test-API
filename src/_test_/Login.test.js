import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
});

test('displays success message on successful login', async () => {
  axios.post.mockResolvedValueOnce({ data: { message: 'Login successful!' } }); // Mock the API response
  
  render(<Login />);
  
  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText(/Username/i), { target: { value: 'uduna' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: '12345' } });

  // Simulate clicking the login button
  fireEvent.click(screen.getByText(/Login/i));

  // Use `findByText` to handle async display of the success message
  expect(await screen.findByText(/Login successful!/i)).toBeInTheDocument();
});
