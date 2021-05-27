import fetcher from '@/lib/fetcher'
import format from 'comma-number'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      })

    registerView()
  }, [slug])

  return `${views ? format(views) : '–––'} views`
}
