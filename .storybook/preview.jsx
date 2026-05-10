import "../src/tokens/tokens.css";
import "../src/tokens/text-styles.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global colour theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun",  title: "Light" },
          { value: "dark",  icon: "moon", title: "Dark"  },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const isDark = (context.globals.theme || "light") === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "");
      document.body.style.background = isDark ? "#000000" : "#ffffff";

      return (
        <div style={{ padding: "24px", background: isDark ? "#000000" : "#ffffff" }}>
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
