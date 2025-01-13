"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdSwitch = void 0;
exports.mdSwitch = {
    // Switch track
    position: "relative",
    display: "inline-flex",
    height: "2rem",
    width: "3.25rem",
    borderRadius: "1rem",
    backgroundColor: "var(--md-sys-color-surface-container-highest)",
    border: "0.125rem solid var(--md-sys-color-outline)",
    transitionDuration: "150ms",
    outlineWidth: "0.188rem",
    outlineOffset: "0.125rem",
    outlineColor: "transparent",
    outlineStyle: "solid",
    // Switch thumb
    "& .thumb": {
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translate(0.375rem, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        backgroundColor: "var(--md-sys-color-outline)",
        transitionDuration: "150ms",
        "&:has(.unchecked)": {
            width: "1.5rem",
            height: "1.5rem",
            transform: "translate(0.125rem, -50%)",
        },
        "& .icons": {
            width: "1rem",
            height: "1rem",
            overflow: "hidden",
            position: "relative",
            "& .unchecked": {
                position: "absolute",
                top: "0",
                left: "0",
                width: "1rem",
                height: "1rem",
                fill: "var(--md-sys-color-surface-container-highest)",
                transitionDuration: "150ms",
            },
            "& .checked": {
                position: "absolute",
                top: "0",
                left: "-1rem",
                width: "1rem",
                height: "1rem",
                fill: "var(--md-sys-color-on-primary-container)",
                transitionDuration: "150ms",
            },
        },
        "&::before": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "0rem",
            height: "0rem",
            borderRadius: "50%",
            backgroundColor: "var(--md-sys-color-on-surface)",
            transitionDuration: "150ms",
            opacity: "0.08",
        },
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "0rem",
            height: "0rem",
            borderRadius: "50%",
            backgroundColor: "var(--md-sys-color-on-surface)",
            transitionDuration: "150ms",
            opacity: "0.1",
        },
    },
    "& input[type=checkbox]:active": {
        "& + .thumb": {
            width: "1.75rem",
            height: "1.75rem",
            transform: "translate(0, -50%)",
            "&::before": {
                width: "2.5rem",
                height: "2.5rem",
            },
            "&::after": {
                width: "2.5rem",
                height: "2.5rem",
            },
        },
    },
    // State layer
    "&:hover .thumb::before": {
        width: "2.5rem",
        height: "2.5rem",
    },
    "&:has(input[type=checkbox]:focus) .thumb::before": {
        width: "2.5rem",
        height: "2.5rem",
    },
    "&:has(input[type=checkbox]:focus) .thumb::after": {
        width: "2.5rem",
        height: "2.5rem",
    },
    // Disabled
    "&:has(input[type=checkbox]:disabled)": {
        pointerEvents: "none",
        backgroundColor: "color-mix(in srgb,var(--md-sys-color-surface-container-highest) 12%,transparent)",
        borderColor: "color-mix(in srgb,var(--md-sys-color-on-surface) 38%,transparent)",
        "& .thumb": {
            backgroundColor: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)",
            "& .icons": {
                "& .unchecked": {
                    fill: "color-mix(in srgb, var(--md-sys-color-surface-container-highest) 38%, transparent)",
                },
                "& .checked": {
                    fill: "color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent)",
                },
            },
        },
        "&:has(input[type=checkbox]:checked)": {
            backgroundColor: "color-mix(in srgb,var(--md-sys-color-on-surface) 12%,transparent)",
            borderColor: "color-mix(in srgb,var(--md-sys-color-on-surface) 12%,transparent)",
        },
    },
    // Checked
    "&:has(input[type=checkbox]:checked)": {
        // Switch track
        backgroundColor: "var(--md-sys-color-primary)",
        borderColor: "var(--md-sys-color-primary)",
        // Switch thumb
        "& .thumb": {
            backgroundColor: "var(--md-sys-color-on-primary)",
            width: "1.5rem",
            height: "1.5rem",
            transform: "translate(1.375rem, -50%)",
            "& .icons": {
                "& .unchecked": {
                    left: "1rem",
                },
                "& .checked": {
                    left: "0",
                },
            },
            "&::before": {
                backgroundColor: "var(--md-sys-color-primary)",
            },
            "&::after": {
                backgroundColor: "var(--md-sys-color-primary)",
            },
        },
        "&:has(input[type=checkbox]:focus) .thumb": {
            backgroundColor: "var(--md-sys-color-primary-container)",
        },
        "&:hover .thumb": {
            backgroundColor: "var(--md-sys-color-primary-container)",
        },
        "& input[type=checkbox]:active": {
            "& + .thumb": {
                width: "1.75rem",
                height: "1.75rem",
                transform: "translate(1.25rem, -50%)",
                backgroundColor: "var(--md-sys-color-primary-container)",
                "&::before": {
                    width: "2.5rem",
                    height: "2.5rem",
                },
                "&::after": {
                    width: "2.5rem",
                    height: "2.5rem",
                },
            },
        },
    },
    // Hidden checkbox
    "& input[type=checkbox]": {
        position: "absolute",
        width: "0",
        height: "0",
        opacity: "0",
    },
    // On keyboard focus
    "&:has(input[type=checkbox]:focus-visible)": {
        outlineColor: "var(--md-sys-color-secondary)",
    },
};
