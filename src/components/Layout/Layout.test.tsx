import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";
import "@testing-library/jest-dom";
import { preloadedStateLoading } from "../../utils/testUtils/preloadedStates";

describe("Given a layout component", () => {
  describe("When it is rendered and the user isn't logged in", () => {
    test("Then it should show a loginnForm", () => {
      renderWithProviders(<Layout />, preloadedStateLoading);

      const ovalLoader = screen.getByLabelText("oval-loading");
      expect(ovalLoader).toBeInTheDocument();
    });
  });
});
