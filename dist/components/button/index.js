"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdButton = void 0;
const filled_1 = require("./filled");
const outline_1 = require("./outline");
const text_1 = require("./text");
exports.mdButton = {
    display: "inline-flex",
    borderRadius: "1.75rem",
    height: "2.5rem",
    boxShadow: "var(--md-sys-elevation-level-1)",
    backgroundColor: "var(--md-sys-color-surface-container-low)",
    paddingLeft: "0.688rem",
    paddingRight: "0.688rem",
    alignItems: "center",
    transitionDuration: "150ms",
    overflow: "hidden",
    position: "relative",
    outlineWidth: "0.188rem",
    outlineOffset: "0.125rem",
    outlineColor: "transparent",
    outlineStyle: "solid",
    "&:has(.label)": {
        paddingLeft: "1rem",
        paddingRight: "1rem",
    },
    "& .icon": {
        fill: "var(--md-sys-color-primary)",
        width: "1.125rem",
        height: "1.125rem",
    },
    "& .label": {
        lineHeight: "1.25rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        letterSpacing: "0.006rem",
        color: "var(--md-sys-color-primary)",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
    },
    "&:hover": { boxShadow: "var(--md-sys-elevation-level-2)" },
    "&::before": {
        content: '""',
        backgroundColor: "var(--md-sys-color-primary)",
        borderRadius: "1.75rem",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        opacity: "0",
        transitionDuration: "150ms",
    },
    "&:hover::before": { opacity: "0.08" },
    "&:focus::before": { opacity: "0.08" },
    "&::after": {
        content: '""',
        backgroundColor: "var(--md-sys-color-primary)",
        borderRadius: "1.75rem",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        opacity: "0",
        transitionDuration: "150ms",
    },
    "&:focus::after": { opacity: "0.1" },
    "&:focus-visible": {
        outlineColor: "var(--md-sys-color-secondary)",
    },
    "&.ripple": {
        transitionDuration: "350ms",
    },
    "&.ripple::after": {
        transitionDuration: "350ms",
    },
    "&:disabled": {
        backgroundColor: "color-mix(in srgb,var(--md-sys-color-on-surface) 12%,transparent)",
        boxShadow: "var(--md-sys-elevation-level-0)",
        pointerEvents: "none",
    },
    "&:disabled .icon": {
        fill: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)",
    },
    "&:disabled .label": {
        color: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)",
    },
    "&.secondary": {
        "& .icon": {
            fill: "var(--md-sys-color-secondary)",
        },
        "& .label": {
            color: "var(--md-sys-color-secondary)",
        },
        "&::before": {
            backgroundColor: "var(--md-sys-color-secondary)",
        },
        "&::after": {
            backgroundColor: "var(--md-sys-color-secondary)",
        },
    },
    "&.error": {
        "& .icon": {
            fill: "var(--md-sys-color-error)",
        },
        "& .label": {
            color: "var(--md-sys-color-error)",
        },
        "&::before": {
            backgroundColor: "var(--md-sys-color-error)",
        },
        "&::after": {
            backgroundColor: "var(--md-sys-color-error)",
        },
    },
    "&.secondary:disabled": {
        backgroundColor: "color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent)",
        boxShadow: "var(--md-sys-elevation-level-0) !important",
    },
    "&.secondary:disabled .icon": {
        fill: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent) !important",
    },
    "&.secondary:disabled .label": {
        color: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent) !important",
    },
    "&.error:disabled": {
        backgroundColor: "color-mix(in srgb,var(--md-sys-color-on-surface) 12%, transparent) !important",
        boxShadow: "var(--md-sys-elevation-level-0)",
    },
    "&.error:disabled .icon": {
        fill: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent) !important",
    },
    "&.error:disabled .label": {
        color: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent) !important",
    },
    "&.filled": filled_1.filled,
    "&.outline": outline_1.outline,
    "&.text": text_1.text,
};
