import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-ui-purpose", asyncUtilTimeout: 5000 });
