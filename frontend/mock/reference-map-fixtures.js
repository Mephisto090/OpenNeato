const EXAMPLE_REFERENCE_FILENAME = "mapdata-house-05.jsonl";

const EXAMPLE_REFERENCE_CONFIG = {
    version: 1,
    name: "Erdgeschoss",
    zones: [
        {
            id: "room-living",
            name: "Wohnzimmer",
            color: "#30D158",
            points: [
                { x: 0.25, y: 1.15 },
                { x: 2.25, y: 1.15 },
                { x: 2.25, y: 3.45 },
                { x: 0.25, y: 3.45 },
            ],
        },
        {
            id: "room-kitchen",
            name: "Küche",
            color: "#0A84FF",
            points: [
                { x: 2.75, y: 1.15 },
                { x: 5.1, y: 1.15 },
                { x: 5.1, y: 3.45 },
                { x: 2.75, y: 3.45 },
            ],
        },
        {
            id: "room-bedroom",
            name: "Schlafzimmer",
            color: "#BF5AF2",
            points: [
                { x: 0.45, y: -2.55 },
                { x: 2.55, y: -2.55 },
                { x: 2.55, y: -0.35 },
                { x: 0.45, y: -0.35 },
            ],
        },
        {
            id: "room-office",
            name: "Arbeitszimmer",
            color: "#FF9F0A",
            points: [
                { x: 3.2, y: -2.05 },
                { x: 5.15, y: -2.05 },
                { x: 5.15, y: -0.35 },
                { x: 3.2, y: -0.35 },
            ],
        },
        {
            id: "room-hallway",
            name: "Flur",
            color: "#64D2FF",
            points: [
                { x: 0.15, y: 0.2 },
                { x: 5.05, y: 0.2 },
                { x: 5.05, y: 0.65 },
                { x: 0.15, y: 0.65 },
            ],
        },
    ],
    noGoLines: [
        {
            id: "no-go-fireplace",
            name: "Kamin",
            start: { x: 0.45, y: 3.05 },
            end: { x: 1.15, y: 3.05 },
        },
        {
            id: "no-go-kitchen-island",
            name: "Kücheninsel",
            start: { x: 3.35, y: 2.2 },
            end: { x: 4.55, y: 2.2 },
        },
        {
            id: "no-go-desk-cables",
            name: "Schreibtisch-Kabel",
            start: { x: 4.3, y: -1.7 },
            end: { x: 5.0, y: -1.7 },
        },
    ],
};

const createDefaultMapConfigs = () =>
    new Map([[EXAMPLE_REFERENCE_FILENAME, structuredClone(EXAMPLE_REFERENCE_CONFIG)]]);
const createDefaultPinnedMaps = () => new Set([EXAMPLE_REFERENCE_FILENAME]);

export { EXAMPLE_REFERENCE_CONFIG, EXAMPLE_REFERENCE_FILENAME, createDefaultMapConfigs, createDefaultPinnedMaps };
