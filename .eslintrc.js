module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module", // Allows for the use of imports
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    env: {
        node: true,
        mocha: true,
        es6: true,
        jest: true,
    },
    plugins: [
        "chai-friendly",
        "@typescript-eslint",
        "import",
        "sort-keys-fix",
        "simple-import-sort",
    ],
    extends: [
        "airbnb-typescript-prettier",
        "plugin:@typescript-eslint/recommended",
        // "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "import/prefer-default-export": "off",
        "no-console": "off",
        "max-classes-per-file": "warn",
        "class-methods-use-this": "error",
        "@typescript-eslint/no-explicit-any": [
            "warn",
            {
                ignoreRestArgs: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "prettier/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "comma-dangle": "warn",
        "consistent-return": "off",
        "function-paren-newline": ["error", "never"],
        "implicit-arrow-linebreak": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "no-shadow": "off",

        "no-plusplus": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "chai-friendly/no-unused-expressions": "error",
    },
};
