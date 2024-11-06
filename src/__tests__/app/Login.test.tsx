import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '@/app/(Auth)/login/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

jest.mock('@/components/auth/LoginForm', () => {
  return function MockLoginForm() {
    return <div data-testid="login-form">Mocked Login Form</div>;
  };
});

describe('Login Page', () => {
  it('renders the login page correctly', () => {
    render(<LoginPage />);

    expect(screen.getByText('MINEM.')).toBeInTheDocument();
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('has the correct layout', () => {
    render(<LoginPage />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('h-screen w-screen flex p-6 gap-16');

    const leftSection = mainElement.children[0];
    expect(leftSection).toHaveClass('relative h-full w-1/2 rounded-xl overflow-hidden backgroundLogin');

    const rightSection = mainElement.children[1];
    expect(rightSection).toHaveClass('h-full w-1/2 flex place-content-center items-center');
  });
});