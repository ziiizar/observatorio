import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '@/components/auth/LoginForm';
import { login } from '@/services/login';

jest.mock('@/services/login');
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('LoginForm', () => {
  it('renders the form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText('Intercambia información tecnológica con nosotros.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre de usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const mockLogin = login as jest.MockedFunction<typeof login>;
    mockLogin.mockResolvedValue({ success: "Login successful" });

    render(<LoginForm />);

    await userEvent.type(screen.getByPlaceholderText('Nombre de usuario'), 'caesar');
    await userEvent.type(screen.getByPlaceholderText('Contraseña'), 'Prueba12#$');

    fireEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        username: 'caesar',
        password: 'Prueba12#$',
      });
    });
  });

  it('displays social media icons and contact information', () => {
    render(<LoginForm />);

    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByText('+53 3291948')).toBeInTheDocument();
    expect(screen.getByText('support@minem.gob.cu')).toBeInTheDocument();
  });
});