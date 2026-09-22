export const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

export const round = (value, decimals = 2) => {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
};

export const degrees = (radians) =>
    radians * (180 / Math.PI);

export const radians = (degrees) =>
    degrees * (Math.PI / 180);

export const average = (...values) =>
    values.reduce((a, b) => a + b, 0) / values.length;