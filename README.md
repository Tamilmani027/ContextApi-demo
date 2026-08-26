# React Context API Demo

A small React application that demonstrates sharing state between components with the Context API. Three card components read and update one counter without receiving the state through props.

## What it demonstrates

- Creating a context with `createContext`
- Providing shared state from the root component
- Reading context values in nested components with `useContext`
- Updating shared state from any card button

Each card has its own button. Selecting any button increments the counter displayed at the top of the page.

## Tech stack

- React 19
- Vite 8
- Oxlint

## Getting started

Prerequisites: install a current LTS version of [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

Vite will print a local URL (normally `http://localhost:5173`) to open in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint checks. |

## Project structure

```text
src/
├── App.jsx                     # Owns and provides the shared counter state
├── components/
│   ├── Context.jsx             # Creates the application context
│   ├── buttons/Button.jsx      # Reusable button component
│   └── cards/Card.jsx          # Consumes context and increments the counter
├── App.css                     # Application styles
├── index.css                   # Global styles
└── main.jsx                    # React entry point
```

## How the shared state flows

`App` keeps the counter in `useState` and exposes both `count` and `setCount` through `Context.Provider`. Every `Card` calls `useContext(Context)` to access those values. This avoids passing the counter and its update function through intermediate props.

```jsx
<Context.Provider value={{ count, setCount }}>
  <Card name="Vijay" />
</Context.Provider>
```

Inside a card, the button updates the same shared value:

```jsx
const { count, setCount } = useContext(Context)

<Button onClick={() => setCount(count + 1)} />
```

## License

This project is intended for learning and experimentation.
