import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe } from "vitest";
import NetworkDetailsPage from "../../src/pages/NetworkDetailsPage";
import {
  NetworksContextProvider,
} from "../../src/store/NetworkContext";
import { main } from "../../wailsjs/go/models";


describe("NetworkDetailsPage", () => {
  beforeEach(() => {
    act(() => {
      render(
        <NetworksContextProvider>
          <MemoryRouter>
            <NetworkDetailsPage />
          </MemoryRouter>
        </NetworksContextProvider>
      );
    });

    // screen.debug();
  });

  it("renders title", () => {
    act(() => {
      expect(screen.getAllByText("Network Details").length).toBeGreaterThan(0);
    });
  });

  it("provides a switch to connect/disconnect from a network", () => {
    act(async () => {
      await waitFor(() =>
        expect(screen.getByTestId("connect-btn")).toBeInTheDocument()
      );
    });
  });

  it("provides a button to leave network", () => {
    act(async () => {
      await waitFor(() =>
        expect(screen.getByTestId("leave-btn")).toBeInTheDocument()
      );
    });
  });
});
