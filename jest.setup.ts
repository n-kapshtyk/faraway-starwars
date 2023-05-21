import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-ui-purpose", asyncUtilTimeout: 5000 });

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
