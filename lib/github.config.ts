export const CONTRIBUTION_COLORS: Record<number, string> = {
    0: "#eaf4fd",
    1: "#b5d4f4",
    2: "#85b7eb",
    3: "#378add",
    4: "#185fa5",
    5: "#0c447c",
};

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getContributionColor(cnt: number): string {
    if(cnt == 0) return CONTRIBUTION_COLORS[0];
    if(cnt <= 2) return CONTRIBUTION_COLORS[1];
    if(cnt <= 6) return CONTRIBUTION_COLORS[2];
    if(cnt <= 12) return CONTRIBUTION_COLORS[3];
    if(cnt <= 20) return CONTRIBUTION_COLORS[4];
    return CONTRIBUTION_COLORS[5];
}