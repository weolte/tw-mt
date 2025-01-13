import plugin from "tailwindcss/plugin";
import { mdButton, mdCard, mdFab, mdSwitch } from "./components/index";

function myPlugin({ addComponents }: { addComponents: any }) {
  addComponents({
    ".button": mdButton,
    ".fab": mdFab,
    ".switch": mdSwitch,
    ".card": mdCard,
  });
}

export const myCustomPlugin = () =>
  plugin(myPlugin, {
    theme: {
      extend: {
        colors: {
          primary: "var(--md-sys-color-primary)",
          surfaceTint: "var(--md-sys-color-surface-tint)",
          onPrimary: "var(--md-sys-color-on-primary)",
          primaryContainer: "var(--md-sys-color-primary-container)",
          onPrimaryContainer: "var(--md-sys-color-on-primary-container)",
          secondary: "var(--md-sys-color-secondary)",
          onSecondary: "var(--md-sys-color-on-secondary)",
          secondaryContainer: "var(--md-sys-color-secondary-container)",
          onSecondaryContainer: "var(--md-sys-color-on-secondary-container)",
          tertiary: "var(--md-sys-color-tertiary)",
          onTertiary: "var(--md-sys-color-on-tertiary)",
          tertiaryContainer: "var(--md-sys-color-tertiary-container)",
          onTertiaryContainer: "var(--md-sys-color-on-tertiary-container)",
          error: "var(--md-sys-color-error)",
          onError: "var(--md-sys-color-on-error)",
          errorContainer: "var(--md-sys-color-error-container)",
          onErrorContainer: "var(--md-sys-color-on-error-container)",
          background: "var(--md-sys-color-background)",
          onBackground: "var(--md-sys-color-on-background)",
          surface: "var(--md-sys-color-surface)",
          onSurface: "var(--md-sys-color-on-surface)",
          surfaceVariant: "var(--md-sys-color-surface-variant)",
          onSurfaceVariant: "var(--md-sys-color-on-surface-variant)",
          outline: "var(--md-sys-color-outline)",
          outlineVariant: "var(--md-sys-color-outline-variant)",
          shadow: "var(--md-sys-color-shadow)",
          scrim: "var(--md-sys-color-scrim)",
          inverseSurface: "var(--md-sys-color-inverse-surface)",
          inverseOnSurface: "var(--md-sys-color-inverse-on-surface)",
          inversePrimary: "var(--md-sys-color-inverse-primary)",
          primaryFixed: "var(--md-sys-color-primary-fixed)",
          onPrimaryFixed: "var(--md-sys-color-on-primary-fixed)",
          primaryFixedDim: "var(--md-sys-color-primary-fixed-dim)",
          onPrimaryFixedVariant: "var(--md-sys-color-on-primary-fixed-variant0",
          secondaryFixed: "var(--md-sys-color-secondary-fixed)",
          onSecondaryFixed: "var(--md-sys-color-on-secondary-fixed)",
          secondaryFixedDim: "var(--md-sys-color-secondary-fixed-dim)",
          onSecondaryFixedVariant:
            "var(--md-sys-color-on-secondary-fixed-variant)",
          tertiaryFixed: "var(--md-sys-color-tertiary-fixed)",
          onTertiaryFixed: "var(--md-sys-color-on-tertiary-fixed)",
          tertiaryFixedDim: "var(--md-sys-color-tertiary-fixed-dim)",
          onTertiaryFixedVariant:
            "var(--md-sys-color-on-tertiary-fixed-variant)",
          surfaceDim: "var(--md-sys-color-surface-dim)",
          surfaceBright: "var(--md-sys-color-surface-bright)",
          surfaceContainerLowest:
            "var(--md-sys-color-surface-container-lowest)",
          surfaceContainerLow: "var(--md-sys-color-surface-container-low)",
          surfaceContainer: "var(--md-sys-color-surface-container)",
          surfaceContainerHigh: "var(--md-sys-color-surface-container-high)",
          surfaceContainerHighest:
            "var(--md-sys-color-surface-container-highest)",
        },
        keyframes: {
          ripple: {
            "0%": { width: "0%" },
            "100%": { width: "282%" },
          },
        },
        animation: {
          ripple: "ripple 350ms ease-in-out",
        },
      },
    },
  });
