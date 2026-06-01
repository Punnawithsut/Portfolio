import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const monthMap = (monthN: number): string => {
  const map: Record<number, string> = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  }
  return map[monthN];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateFormat(dateS: string): string {
  const date = new Date(dateS);
  const month: number = date.getMonth();
  const year: number = date.getFullYear();
  return `${monthMap(month)} ${year}`
}