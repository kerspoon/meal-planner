import { clsx, type ClassValue } from "clsx"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
import { MealType } from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mealColors: Record<MealType, string> = {
  breakfast: 'bg-yellow-200',
  lunch: 'bg-green-200',
  dinner: 'bg-blue-200',
  dessert: 'bg-purple-200'
};

export const colorFodmap = (fodmapLevel: string | undefined, checked: boolean) => {
  if (checked) return 'text-gray-400';
  switch (fodmapLevel) {
    case 'High': return 'text-red-500';
    case 'Moderate': return 'text-yellow-500';
    case 'Low': return 'text-green-500';
    default: return 'text-gray-500';
  }
}

const formatter2dp = new Intl.NumberFormat([], {
  maximumFractionDigits: 2,
});

export const fmt2dp = formatter2dp.format;

// Custom hook to store data in local storage
export function useLocalStorage<T>(key: string, fallbackValue: T): [T, Dispatch<SetStateAction<T>>] {

  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return fallbackValue;
    }
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallbackValue;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}