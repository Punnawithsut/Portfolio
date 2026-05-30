export const CONTRIBUTION_COLORS: Record<number, string> = {
    0: "#eaf4fd",
    1: "#b5d4f4",
    2: "#85b7eb",
    3: "#378add",
    4: "#185fa5",
    5: "#0c447c",
};

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const LEGEND_LEVEL = [0, 1, 2, 3, 4, 5];

export function getContributionLevel(cnt: number): number {
    if(cnt == 0) return 0;
    if(cnt <= 2) return 1;
    if(cnt <= 6) return 2;
    if(cnt <= 12) return 3;
    if(cnt <= 20) return 4;
    return 5;
}