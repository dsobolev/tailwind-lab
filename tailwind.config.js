module.exports = {
    content: ["index.html"],
    // purge: ["index.html"] <- for purging
    darkMode: false,
    theme: {
        extend: {
            colors: {
                brandRed: {
                    DEFAULT: "#e67c64",
                    light: "#e38c7d",
                    dark: "#e06448",
                },
                brandBlue: {
                    DEFAULT: "#0da3a8",
                    light: "#63bebf",
                },
                //brandgrey: "#556d75"
            },
            fontFamily: {
                headline: "Poppins, sans-serif",
            }
        },
    },
    variants: {
      extends: {
          backgroundColor: ["active"],
          fontSize: ["hover"]
      }
    },
    plugins: [],
}
