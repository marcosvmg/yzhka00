export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}'],
  theme: {
    extend: {
      colors: {
        // Adicionando as cores do seu tema para que o Tailwind as reconheça
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        'text-heading': 'rgb(var(--color-text-heading) / <alpha-value>)',
        'text-body': 'rgb(var(--color-text-body) / <alpha-value>)',

        // AQUI ESTÁ A NOVA COR DE DESTAQUE
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
