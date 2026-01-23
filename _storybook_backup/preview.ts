import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

if (typeof window !== "undefined" && !window.process) {
  window.process = { env: {} };
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
