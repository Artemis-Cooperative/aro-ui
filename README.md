# Aro UI: A UI Component Library for Aro

Aro UI is a design system and component library built for the Aro developer framework. It aims to provide a performant, reusable, and well-documented set of UI components.

## Key Features

* **Component-Based Architecture:** Aro UI is built around reusable, independent components, promoting modularity and maintainability.
* **Tailwind CSS Styling:**  Utilizes Tailwind CSS for rapid and consistent styling, offering a vast array of customizable utility classes.
* **TypeScript Support:**  Provides robust type safety throughout the library, improving code quality and reducing errors.
* **Storybook Integration:**  Thorough documentation and interactive component examples are available through Storybook. This makes exploring and integrating the components easy.
* **Comprehensive Design System:** Aro UI includes a detailed design system with guidelines for color palettes, spacing, typography, and more, guaranteeing consistent design across your application.

## Technology Stack

Aro UI is built with a powerful combination of technologies:

* **Astro:**  The static site generator powering the build process and development server.
* **Tailwind CSS:**  Provides utility-first CSS classes for rapid and consistent styling.
* **TypeScript:** Adds static typing for improved code quality and maintainability.
* **Storybook:** Offers interactive documentation and showcases for the components.

## Usage Instructions

Aro UI is designed to be easily integrated into your Aro projects. The intended distribution method is via npm. Follow these steps to get started:

1. **Installation:** Install Aro UI as an npm package:

   ```bash
   npm install aro-ui
   ```

2. **Import Components:** Import and use the desired components in your Astro components. For example, to use the Button component:

   ```astro
   ---
   import { Button } from 'aro-ui'; // Adjust path if necessary
   ---

   <Button variant="primary">Click Me</Button>
   ```

3. **Explore Storybook:** For comprehensive documentation and interactive component examples, access the Storybook documentation (instructions on accessing Storybook should be provided separately, possibly in a different README or within the project files themselves). This allows you to view available properties, customization options, and usage examples for each component.

## License

see [LICENSE](./LICENSE)

## Getting Started (For Developers)

This section is intended for developers working on Aro UI itself. To get started, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`
