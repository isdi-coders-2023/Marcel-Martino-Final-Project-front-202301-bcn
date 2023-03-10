import { screen } from "@testing-library/react";
import { preloadedStateDrones } from "../../utils/testUtils/preloadedStates";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./homePage";
import "@testing-library/jest-dom/extend-expect";

describe("Given a homePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a drone Card", () => {
      renderWithProviders(<HomePage />, preloadedStateDrones);

      const droneCard = screen.getByRole("heading", { name: "Jane Smith" });
      expect(droneCard).toBeInTheDocument();
    });
  });
});
