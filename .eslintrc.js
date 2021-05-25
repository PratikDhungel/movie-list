module.exports = {
  parser: '@typescript-eslint/parser', // Use typescript eslint parser
  parserOptions: {
    ecmaVersion: 2020, // Parse modern ECMAScript features
    sourceType: 'module', // Allows to use imports
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors', // Supports the linting of import export syntax
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended', // Check for accessibility rules in JSX??
    'prettier',
    'plugin:prettier/recommended',
  ],
  // Use the rules from these added plugins
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Throw error if unused variable present
    '@typescript-eslint/no-var-requires': 'off', // Allows the use of require statements
    'react/jsx-key': 'warn', // Warn for missing key prop
    // 'react/prop-types': 'off',
    'react/jsx-no-duplicate-props': 'error', // Does not allow duplicate props
    'react/react-in-jsx-scope': 'off', // Ignores if React is not imported in jsx files
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Remove error when return type is not explicitly defined
    '@typescript-eslint/no-explicit-any': 'off', // Allow the set a variable of type any
  },
  settings: {
    react: {
      version: 'detect', // Detect the latest version of react (as part of react-plugin)
    },
  },
};
