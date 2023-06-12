// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
// added this to integrate tailwindcss into storybook
import '../src/App.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
