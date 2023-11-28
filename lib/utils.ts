import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAdminUrl = () => {
  return process.env.NEXT_PUBLIC_STORE_ADMIN_URL??'';
}
