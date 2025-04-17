# Prime Speaker Zegana Commander Guide

A comprehensive React web application guide for the Prime Speaker Zegana Commander deck in Magic: The Gathering, featuring both Emrakul, the Aeons Torn and Darksteel Colossus variants.

![Prime Speaker Zegana Guide](https://cards.scryfall.io/normal/front/d/2/d2f007b0-b578-44f8-be65-cd9e2ac56e09.jpg?1730491112)

## Features

- **Complete Deck Analysis**: Comprehensive breakdown of strategy, card choices, and gameplay
- **Interactive Card Browser**: Explore all cards with tooltips and detailed analysis
- **Variant Comparison**: Toggle between Emrakul and Darksteel Colossus builds
- **Mulligan Guide**: Learn what makes a good opening hand with interactive examples
- **Matchup Strategies**: Adapt your gameplay based on opponent archetypes
- **Simic-Themed UI**: Custom styling with blue-green Simic color palette

## Getting Started

### Prerequisites

You'll need the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.0.0 or newer)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/zegana-guide.git
cd zegana-guide
```

2. **Install dependencies**

```bash
npm install
# or with yarn
yarn install
```

3. **Start the development server**

```bash
npm start
# or with yarn
yarn start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create an optimized production build:

```bash
npm run build
# or with yarn
yarn build
```

This will create a `build` directory with the production-ready files.

## Deploy Locally with Serve

You can serve the production build locally using [serve](https://www.npmjs.com/package/serve):

```bash
npm install -g serve
serve -s build
```

The application will be available at [http://localhost:5000](http://localhost:5000).

## Dependencies

This project uses the following main packages:

- **React 19.1.0**: Modern UI library
- **React Router 7.5.1**: For application routing
- **Styled Components 6.1.17**: CSS-in-JS styling solution
- **Chart.js 4.4.9**: For visualizing mana curve and card distributions
- **React Markdown 10.1.0**: For rendering formatted text

## Project Structure

```
zegana-guide/
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Cards/          # Card-related components
│   │   ├── Common/         # Common UI components
│   │   ├── DeckVariants/   # Variant toggle components
│   │   ├── Layout/         # Layout components
│   │   ├── Mulligan/       # Mulligan guide components
│   │   ├── Navigation/     # Navigation components
│   │   ├── Strategy/       # Strategy components
│   │   └── Icons/          # Icon components
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page
│   │   ├── Strategy.js     # Strategy guide
│   │   ├── CardAnalysis.js # Card analysis
│   │   ├── MulliganGuide.js # Mulligan guide
│   │   └── VariantComparison.js # Variant comparison
│   ├── theme.js            # Theme configuration
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── simplified_final_deck.json # Deck data
└── package.json            # Project metadata and dependencies
```

## Customizing the Guide

To customize this guide for your own deck:

1. Replace the `simplified_final_deck.json` with your own deck data
2. Update the card analysis data in `CardAnalysis.js`
3. Modify the strategy content in `Strategy.js`
4. Adjust the mulligan examples in `MulliganGuide.js`
5. Update theme colors in `theme.js` to match your deck's color identity

## Browser Support

This application supports all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge (Chromium-based)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Card data and images provided by [Scryfall API](https://scryfall.com/)
- MTG and Prime Speaker Zegana are properties of Wizards of the Coast