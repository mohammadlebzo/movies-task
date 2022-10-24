import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Logo from "../../components/header/Logo";

describe('Logo component', () => {
  test('renders the logo image', () => {
    render(<Logo />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  });

  test('renders the image clickable link', () => {
    render(<Logo />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  test('redirect to the home when the image is clicked', () => {
    render(<Logo />)

    const currentURL = global.window.location.href;
    const linkElement = screen.getByRole('link');
    userEvent.click(linkElement)

    expect(currentURL).toBe('http://localhost/')

  })
});
