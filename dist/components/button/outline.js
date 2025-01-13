"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outline = void 0;
exports.outline = {
    boxShadow: "var(--md-sys-elevation-level-0)",
    backgroundColor: "transparent",
    border: "0.063rem solid var(--md-sys-color-outline)",
    "&:focus": {
        borderColor: "var(--md-sys-color-primary)",
    },
    "&:focus-visible": {
        borderColor: "var(--md-sys-color-primary)",
    },
    "&:disabled": {
        backgroundColor: "transparent !important",
        borderColor: "color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)",
    },
    "&.secondary": {
        "&:focus": {
            borderColor: "var(--md-sys-color-secondary)",
        },
    },
    "&.error": {
        "&:focus": {
            borderColor: "var(--md-sys-color-error)",
        },
    },
};
