/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  // TODO : Add Font Size which will be used in the project
  theme: {
    colors: {
      white: "#FFFFFF",
      neutral: "#9095a1",
      "neutral-200": "#f3f4f6",
      "neutral-600": "#565d6d",
      black: "#000000",
        primary: {
          100: "#f2f2fd",
          150: "#e0e1fa",
          200: "#ced0f8",
          250: "#bcbff5",
          300: "#abaef2",
          350: "#999df0",
          400: "#878ced",
          450: "#757bea",
          500: "#636AE8",
          550: "#4850e4",
          600: "#2c35e0",
          650: "#1f27cd",
          700: "#1b22b1",
          750: "#161d96",
          800: "#12177a",
          850: "#0e125e",
          900: "#0a0d42",
          DEFAULT: "#636AE8"
        },
        secondary: {
          100: "#fdf1f5",
          150: "#fbe0e8",
          200: "#f8cedb",
          250: "#f5bcce",
          300: "#f3aac1",
          350: "#f098b4",
          400: "#ee86a7",
          450: "#eb759a",
          500: "#E8618C",
          550: "#e44578",
          600: "#e02862",
          650: "#c91d53",
          700: "#ac1947",
          750: "#8e143b",
          800: "#71102f",
          850: "#530c22",
          900: "#360816",
          DEFAULT: "#E8618C"
        },
        info: {
          100: "#f1f8fd",
          150: "#daecfa",
          200: "#c3e1f8",
          250: "#acd5f5",
          300: "#94c9f2",
          350: "#7dbeef",
          400: "#66b2ec",
          450: "#4fa6e9",
          500: "#379ae6",
          550: "#1d8de3",
          600: "#197dca",
          650: "#166db0",
          700: "#125d95",
          750: "#0f4c7b",
          800: "#0c3c61",
          850: "#092c47",
          900: "#061c2d",
          DEFAULT: "#379ae6"
        },
        warning: {
          100: "#fef9ee",
          150: "#fcf0d7",
          200: "#fae7c0",
          250: "#f8dea9",
          300: "#f6d491",
          350: "#f4cb7a",
          400: "#f2c263",
          450: "#f0b94b",
          500: "#efb034",
          550: "#eca517",
          600: "#d29211",
          650: "#b57e0f",
          700: "#98690c",
          750: "#7a550a",
          800: "#5d4108",
          850: "#402c05",
          900: "#221803",
          DEFAULT: "#efb034"
        },
        danger: {
          100: "#fdf2f2",
          150: "#f9dbdc",
          200: "#f5c4c6",
          250: "#f1adaf",
          300: "#ed9699",
          350: "#e97f83",
          400: "#e5696d",
          450: "#e25256",
          500: "#de3b40",
          550: "#d9252b",
          600: "#c12126",
          650: "#aa1d22",
          700: "#93191d",
          750: "#7b1518",
          800: "#641114",
          850: "#4d0d0f",
          900: "#36090b",
          DEFAULT: "#de3b40"
        },
        success: {
          100: "#eefdf3",
          150: "#d3f9e0",
          200: "#b8f5cd",
          250: "#9df2b9",
          300: "#82eea6",
          350: "#67ea93",
          400: "#4ce77f",
          450: "#31e36c",
          500: "#1dd75b",
          550: "#1ac052",
          600: "#17a948",
          650: "#14923e",
          700: "#117b34",
          750: "#0e642a",
          800: "#0a4d20",
          850: "#073517",
          900: "#041e0d",
          DEFAULT: "#1dd75b"
        },
        "color-3": {
          100: "#effcfa",
          150: "#d4f8f2",
          200: "#baf3eb",
          250: "#9fefe3",
          300: "#84eadb",
          350: "#69e6d3",
          400: "#4ee1cb",
          450: "#33dcc3",
          500: "#22CCB2",
          550: "#1fb7a0",
          600: "#1ba18d",
          650: "#188b7a",
          700: "#147567",
          750: "#105f53",
          800: "#0c4940",
          850: "#09332d",
          900: "#051d1a",
          DEFAULT: "#22CCB2"
        },
        "color-4": {
          100: "#f5f2fd",
          150: "#e7dff9",
          200: "#d8cbf5",
          250: "#c9b8f2",
          300: "#bba4ee",
          350: "#ac91eb",
          400: "#9d7ee7",
          450: "#8f6ae4",
          500: "#7F55E0",
          550: "#6d3edc",
          600: "#5b27d5",
          650: "#5123bc",
          700: "#461ea4",
          750: "#3b198b",
          800: "#311572",
          850: "#261059",
          900: "#1c0c40",
          DEFAULT: "#7F55E0"
        },
        "color-5": {
          100: "#fdf5f1",
          150: "#fbe8e1",
          200: "#f8dbd0",
          250: "#f6cfbf",
          300: "#f4c2af",
          350: "#f1b59e",
          400: "#efa98d",
          450: "#ec9c7c",
          500: "#EA916E",
          550: "#e5784c",
          600: "#e1602c",
          650: "#cc4f1d",
          700: "#ac4219",
          750: "#8d3614",
          800: "#6d2a10",
          850: "#4d1e0b",
          900: "#2d1206",
          DEFAULT: "#EA916E"
        }
    },
    extend: {
      fontSize: {
        'text-32-black': ['32px', { lineHeight: '1.2', fontWeight: '900' }],    // Extra bold
        'text-28-800': ['28px', { lineHeight: '1.3', fontWeight: '800' }],      // Very bold
        'text-20-600': ['20px', { lineHeight: '1.4', fontWeight: '600' }],      // Semi-bold
        'text-20-700': ['20px', { lineHeight: '1.4', fontWeight: '700' }],      // Bold
        'text-20-400': ['20px', { lineHeight: '1.4', fontWeight: '400' }],
        'text-18-600': ['18px', { lineHeight: '1.4', fontWeight: '600' }],      // Semi-bold
        'text-18-500': ['18px', { lineHeight: '1.4', fontWeight: '500' }],      // Medium
        'text-16-700': ['16px', { lineHeight: '1.5', fontWeight: '700' }],      // Bold
        'text-16-800': ['16px', { lineHeight: '1.5', fontWeight: '800' }],      // Extra bold
        'text-16-600': ['16px', { lineHeight: '1.5', fontWeight: '600' }],      // Semi-bold
        'text-16-500': ['16px', { lineHeight: '1.5', fontWeight: '500' }],      // Semi-bold
        'text-16-400': ['16px', { lineHeight: '1.5', fontWeight: '400' }],      // Normal
        'text-14-700': ['14px', { lineHeight: '1.5', fontWeight: '700' }],      // Bold
        'text-14-600': ['14px', { lineHeight: '1.5', fontWeight: '600' }],      // Semi-bold
        'text-12-600': ['12px', { lineHeight: '1.4', fontWeight: '600' }],      // Semi-bold
        'text-12-700': ['12px', { lineHeight: '1.4', fontWeight: '700' }],      // Bold
        'text-11-600': ['11px', { lineHeight: '1.4', fontWeight: '600' }],      // Semi-bold
        'text-11-700': ['11px', { lineHeight: '1.4', fontWeight: '700' }],      // Bold
      },
      "fontFamily": {
        "heading": "Archivo",
        "body": "Inter"
      },
      "borderRadius": {
        "xs": "0.1875rem",
        "s": "0.25rem",
        "m": "0.375rem",
        "l": "0.5rem",
        "xl": "0.75rem",
        "100-percent": "100%"
      },
      "boxShadow": {
        "xs": "0px 0px 1px rgba(23, 26, 31, 0.07), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "s": "0px 2px 5px rgba(23, 26, 31, 0.09), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "m": "0px 4px 9px rgba(23, 26, 31, 0.11), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "l": "0px 8px 17px rgba(23, 26, 31, 0.15), 0px 0px 2px rgba(23, 26, 31, 0.12)",
        "xl": "0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)"
      }
    },
  },
  plugins: [],
}

