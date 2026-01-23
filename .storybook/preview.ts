import type { Preview } from "@storybook/react";

if (typeof window !== "undefined" && !window.process) {
  window.process = { env: {} } as NodeJS.Process;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
