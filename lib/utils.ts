import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return format(new Date(date), 'MMM d, yyyy')
}

export function formatRelative(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function formatDateTime(date: Date | string): string {
  return format(new Date(date), 'MMM d, yyyy HH:mm')
}

export function tagsFromString(tags: string): string[] {
  return tags.split(',').map(t => t.trim()).filter(Boolean)
}

export function tagsToString(tags: string[]): string {
  return tags.join(',')
}
