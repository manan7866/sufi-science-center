'use client'

import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { useParams } from 'next/navigation'

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  pageName,
  contentSections
}`

export default function ClientPage() {
  const { slug } = useParams()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    async function fetchData() {
      try {
        const result = await client.fetch(query, { slug })
        setData(result)
      } catch (error) {
        console.error('Fetch error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [slug])

  if (loading) return <p>Loading...</p>
  if (!data) return <p>Page not found</p>

  return (
    <div>
      <h1>{data.pageName}</h1>
      {/* Render contentSections if needed */}
    </div>
  )
}
