const withOpacity = (variableName) => ({ opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${variableName}), ${opacityValue})`;
  }

  return `rgb(var(${variableName}))`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-base"),
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          secondaryInverted: withOpacity("--color-secondary-inverted"),
          inverted: withOpacity("--color-inverted"),
          accent: withOpacity("--color-accent"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          secondaryInverted: withOpacity("--color-secondary-inverted"),
          inverted: withOpacity("--color-inverted"),
          section: withOpacity("--color-section"),
          sectionInverted: withOpacity("--color-section-inverted"),
          accent: withOpacity("--color-accent"),
        },
      },
      boxShadowColor: {
        skin: {
          section: withOpacity("--color-section-shadow"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-base"),
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          secondaryInverted: withOpacity("--color-secondary-inverted"),
          inverted: withOpacity("--color-inverted"),
          section: withOpacity("--color-section"),
          accent: withOpacity("--color-accent"),
        },
      },
      stroke: {
        skin: {
          base: withOpacity("--color-base"),
          inverted: withOpacity("--color-inverted"),
          accent: withOpacity("--color-accent"),
        },
      },
      textDecorationColor: {
        skin: {
          secondary: withOpacity("--color-secondary"),
          secondaryInverted: withOpacity("--color-secondary-inverted"),
          accent: withOpacity("--color-accent"),
        },
      },
    },
	},
	plugins: [],
}
