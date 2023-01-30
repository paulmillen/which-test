import { render, screen } from '@testing-library/react';
import Example from './Example';

describe('Events', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('When the component is loaded', () => {
    it("displays the example message", () => {
      render(
        <Example />
      );

      const message = screen.getByText('Hello World!');
      expect(message).toBeInTheDocument();
    })
  })
});