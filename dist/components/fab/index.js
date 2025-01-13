"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdFab = void 0;
const large_1 = require("./large");
const small_1 = require("./small");
exports.mdFab = {
    display: "inline-flex",
    borderRadius: "1rem",
    height: "3.5rem",
    boxShadow: "var(--md-sys-elevation-level-3)",
    backgroundColor: "var(--md-sys-color-primary-container)",
    paddingLeft: "0.5rem",
    paddingRight: "1rem",
    alignItems: "center",
    transitionDuration: "150ms",
    overflow: "hidden",
    position: "relative",
    outlineWidth: "0.188rem",
    outlineOffset: "0.125rem",
    outlineColor: "transparent",
    outlineStyle: "solid",
    "& .icon": {
        fill: "var(--md-sys-color-on-primary-container)",
        width: "1.5rem",
        height: "1.5rem",
        marginLeft: "0.5rem",
    },
    "& .label": {
        lineHeight: "1.25rem",
        fontSize: "0.875rem",
        fontWeight: "500",
        letterSpacing: "0.006rem",
        color: "var(--md-sys-color-on-primary-container)",
        paddingLeft: "0.5rem",
    },
    "&:hover": { boxShadow: "var(--md-sys-elevation-level-4)" },
    "&::before": {
        content: '""',
        backgroundColor: "var(--md-sys-color-on-primary-container)",
        borderRadius: "1rem",
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
        backgroundColor: "var(--md-sys-color-on-primary-container)",
        borderRadius: "1rem",
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
    "&.secondary": {
        backgroundColor: "var(--md-sys-color-secondary-container)",
        "& .icon": {
            fill: "var(--md-sys-color-on-secondary-container)",
        },
        "& .label": {
            color: "var(--md-sys-color-on-secondary-container)",
        },
        "&::before": {
            backgroundColor: "var(--md-sys-color-on-secondary-container)",
        },
        "&::after": {
            backgroundColor: "var(--md-sys-color-on-secondary-container)",
        },
    },
    "&.tertiary": {
        backgroundColor: "var(--md-sys-color-tertiary-container)",
        "& .icon": {
            fill: "var(--md-sys-color-on-tertiary-container)",
        },
        "& .label": {
            color: "var(--md-sys-color-on-tertiary-container)",
        },
        "&::before": {
            backgroundColor: "var(--md-sys-color-on-tertiary-container)",
        },
        "&::after": {
            backgroundColor: "var(--md-sys-color-on-tertiary-container)",
        },
    },
    "&.surface": {
        backgroundColor: "var(--md-sys-color-surface-container-high)",
        "& .icon": {
            fill: "var(--md-sys-color-primary)",
        },
        "& .label": {
            color: "var(--md-sys-color-primary)",
        },
        "&::before": {
            backgroundColor: "var(--md-sys-color-primary)",
        },
        "&::after": {
            backgroundColor: "var(--md-sys-color-primary)",
        },
    },
    "&.small:not(:has(.label))": small_1.small,
    "&.large:not(:has(.label))": large_1.large,
};
