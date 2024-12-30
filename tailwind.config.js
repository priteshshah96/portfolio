module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          background: 'var(--background)',
          text: 'var(--text)',
          'secondary-text': 'var(--secondary-text)',
          'card-bg': 'var(--card-bg)',
          border: 'var(--border)',
        }
      }
    },
    plugins: []
  }