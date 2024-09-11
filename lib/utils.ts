import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const colorFodmap = (fodmapLevel: string|undefined) => {
  switch (fodmapLevel) {
    case 'High':
      return 'text-red-500';
    case 'Moderate':
      return 'text-yellow-500';
    case 'Low':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
}

const formatter2dp = new Intl.NumberFormat([], {
  maximumFractionDigits: 2,
})

export const fmt2dp = formatter2dp.format;
