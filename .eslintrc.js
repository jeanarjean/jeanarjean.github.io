module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    plugins: ['react', 'import-quotes'],
    globals: {
        graphql: false
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    rules: {
        'import-quotes/import-quotes': [1, 'single']
    },
    globals: {
        JSX: true
    }
}
