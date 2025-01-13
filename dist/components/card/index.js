"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdCard = void 0;
const filled_1 = require("./filled");
const outline_1 = require("./outline");
exports.mdCard = {
    display: "inline-flex",
    flexDirection: "column",
    borderRadius: "0.75rem",
    boxShadow: "var(--md-sys-elevation-level-1)",
    backgroundColor: "var(--md-sys-color-surface-container-low)",
    transitionDuration: "150ms",
    overflow: "hidden",
    position: "relative",
    outlineWidth: "0.188rem",
    outlineOffset: "0.125rem",
    outlineColor: "transparent",
    outlineStyle: "solid",
    "&:hover": { boxShadow: "var(--md-sys-elevation-level-2)" },
    "&::before": {
        content: '""',
        backgroundColor: "var(--md-sys-color-on-surface)",
        borderRadius: "0.75rem",
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
        backgroundColor: "var(--md-sys-color-on-surface)",
        borderRadius: "0.75rem",
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
    "&.filled": filled_1.filled,
    "&.outline": outline_1.outline,
};
