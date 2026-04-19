export enum DivEnum {
    UP="up",
    DOWN="down",
    LEFT="left",
    RIGHT="right",
    CENTER="center",
}

const parked: Record<string, string> = {
    "up":     "-translate-y-full",
    "down":   "translate-y-full",
    "left":   "-translate-x-full",
    "right":  "translate-x-full",
    "center": "",
};

const exit: Record<string, string> = {
    "up":     "translate-y-full",
    "down":   "-translate-y-full",
    "left":   "translate-x-full",
    "right":  "-translate-x-full",
    "center": "",
};

const allTransforms = [
    "-translate-y-full", "translate-y-full",
    "-translate-x-full", "translate-x-full",
];

export const go = (from: string, to: string) => {
    const fromDiv = document.getElementById(from);
    const toDiv = document.getElementById(to);
    if (!fromDiv || !toDiv) return;

    allTransforms.forEach(c => toDiv.classList.remove(c));

    const exitClass = parked[from] || exit[to];
    if (exitClass) fromDiv.classList.add(exitClass);
};