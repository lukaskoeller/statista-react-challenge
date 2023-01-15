# Statista React Code Challenge

## A Statista search app

This app follows the ["Exercise for Front-end Developers"](https://bitbucket.org/statista/advanced-code-challenge-react/src/master/). It implements the minimal search app for Statista.

## Tech Stack
* Frontend Tooling: [vite](https://vitejs.dev/)
* React
* Typescript
* Tailwindcss

## Testing
End-to-End testing is done via [Playwright](https://playwright.dev/). Component testing is done via [Playwright CT](https://playwright.dev/docs/test-components).

## Reasoning
* **React Router instead of React Query**: Unless required, I only implemented react router for both routing and data fetching. I removed tanstack query (formerly "react query") (see commented remainings in code). This is due to the fact that react router offers fetching and caching in a similar manner like tanstack query is doing. This was introduced quite recently with [v6.4.0](https://github.com/remix-run/react-router/releases/tag/react-router%406.4.0). Thus, removing a dependency reduces the bundle size and potentially improves performance. Nonetheless, this does not mean that react router is a better choice over tanstack query or a reasonable choice for a bigger application. It is a choice considering the scope and size of the project.
* **Using nested routing**: Nested routing enables for better usuability when changing routes. E.g. you want to skip multiple pages in the pagination, you are not required to scroll to the pagination every time you move to the next page. Furthermore, it remains state and UI for the hero search area so that you can easily edit the search query at any time. The downside is that a route change does not trigger the scroll position to start at the top again.