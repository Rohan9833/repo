export const distance = (a, b) =>
    Math.sqrt(
        (b.x - a.x) ** 2 +
        (b.y - a.y) ** 2
    );

export const horizontalDistance = (a, b) =>
    Math.abs(b.x - a.x);

export const verticalDistance = (a, b) =>
    Math.abs(b.y - a.y);

export const midpoint = (a, b) => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
});