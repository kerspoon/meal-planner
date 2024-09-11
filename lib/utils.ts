import { clsx, type ClassValue } from "clsx"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const colorFodmap = (fodmapLevel: string | undefined, checked: boolean) => {
  if (checked) return 'text-gray-400';
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
});

export const fmt2dp = formatter2dp.format;

// Custom hook to store data in local storage
export function useLocalStorage<T>(key: string, fallbackValue: T): [T, Dispatch<SetStateAction<T>>] {

  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallbackValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}