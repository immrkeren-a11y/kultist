/*
import type { Journal, JournalDetails } from '../types/journal'

const API_URL = 'https://yourdomain.infinityfreeapp.com/api'

export async function getJournals(): Promise<Journal[]> {
  const res = await fetch(`${API_URL}/journals.php`)
  if (!res.ok) throw new Error('Failed to fetch journals')
  return await res.json()
}

export async function getJournalById(id: string): Promise<JournalDetails> {
  const res = await fetch(`${API_URL}/journal.php?id=${id}`)
  if (!res.ok) throw new Error('Failed to fetch journal')
  return await res.json()
}
*/
import magazines from '@/data/magazines.json'

export interface Magazine {
  id: number
  title: string
  year: number
  cover: string
  description: string
}

export const getMagazines = async (): Promise<Magazine[]> => {
  // имитация задержки сервера
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(magazines as Magazine[])
    }, 200)
  })
}
