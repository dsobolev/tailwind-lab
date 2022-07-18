module.exports = {
    content: ["index.html"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                brandred: {
                    DEFAULT: "#e67c64",
                    light: "#e38c7d",
                    dark: "#e06448",
                },
                brandblue: {
                    DEFAULT: "#4caeae",
                    light: "#63bebf",
                },
                //brandgrey: "#556d75"
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
