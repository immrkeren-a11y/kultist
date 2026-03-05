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
import issues from '@/data/issues.json'

export interface Issues {
  id: number
  title: string
  slug: string
  year: number
  cover: string
  pages: [string]
}

export const getIssues = async (): Promise<Issues[]> => {
  // имитация задержки сервера
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(issues as Issues[])
    }, 200)
  })
}
