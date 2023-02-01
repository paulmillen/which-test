import { fireEvent, render, screen } from "@testing-library/react";
import { NumberGrid } from "./NumberGrid";

describe("NumberGrid", () => {
  describe("When the component is loaded with the given highest number 6", () => {
    const testNumber = 6;
    const cases = [...Array(testNumber)].map((_, index) => index + 1);

    it.each(cases)("displays a number button for %s", (value) => {
      render(<NumberGrid highestNumber={testNumber} />);

      const button = screen.getByRole("button", { name: `number ${value}` });
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle("background-color: transparent");
    });
  });

  describe("When a number is selected", () => {
    const testNumber = 12;
    const cases: { value: number; multiples: number[] }[] = [
      { value: 1, multiples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      {
        value: 2,
        multiples: [2, 4, 6, 8, 10, 12],
      },
      {
        value: 3,
        multiples: [3, 6, 9, 12],
      },
      { value: 4, multiples: [4, 8, 12] },
      { value: 5, multiples: [5, 10] },
      { value: 6, multiples: [6, 12] },
      { value: 12, multiples: [12] },
    ];

    describe.each(cases)(
      "for each multiple of $value",
      ({ value, multiples }) => {
        it.each(multiples)("highlights the %s button", (multiple) => {
          render(<NumberGrid highestNumber={testNumber} />);

          const button = screen.getByRole("button", {
            name: `number ${value}`,
          });

          fireEvent.click(button);

          const multipleButton = screen.getByRole("button", {
            name: `number ${multiple} highlighted`,
          });

          expect(multipleButton).toHaveStyle("background-color: #1976d2");
        });
      }
    );
  });
});
