'use client'

import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

const query = `*[_type == "header"][0]{
    websiteName,
    mainTitle,
    topButton,
    socialMediaLinks,
    image {
      asset->{
        url
      }
    },
    websiteName,
    subtitle,
    bottomButton,
    headerSections
  }`

export default function Header() {
  const [header, setHeader] = useState<any>(null)

  useEffect(() => {
    async function fetchHeader() {
      try {
        const data = await client.fetch(query)
        console.log("Fetched Data:", data)
        setHeader(data)
      } catch (err) {
        console.error("Sanity fetch error:", err)
      }
    }

    fetchHeader()
  }, [])
  console.log(header)
  

  if (!header) return <div className="p-4 text-center">Loading Header...</div>

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 shadow-lg">
      <div className="flex justify-between items-center flex-wrap">
        <div className='flex justify-between'>
          <h1 className="text-xl text-black font-bold">{header.mainTitle}</h1>
      
            
         
          
        </div>
      
       <div className="mt-4 flex flex-wrap gap-2">
        {header.topButton?.map((btn: any, idx: number) => (
          <a
            key={idx}
            href={btn.url}
            className="bg-white text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-indigo-100 transition"
          >
            {btn.text}
          </a>
        ))}
      </div>
        <div className="mt-4 flex gap-4">
        {header.socialMediaLinks?.map((link: any, idx: number) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {link.platform}
          </a>
        ))}
      </div>
        
      </div>

      <div className='flex justify-between items-center my-2'>
        <div className='flex gap-2'>
          {header.image?.asset?.url && (
           <img src={header.image.asset.url} alt="Logo" className="h-16 w-auto" />
         )}
          <div>
            
          <h1 className='text-4xl'>{header.websiteName}</h1>
          <p className="text-sm">{header.subtitle}</p>
          </div>
          
        </div>
        {header.bottomButton && (
        <div className="mt-6">
          <a
            href={header.bottomButton.link}
            className="bg-yellow-300 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            {header.bottomButton.text}
          </a>
        </div>
      )}
      </div>

      {/* Top Buttons */}
      

      {/* Social Media */}


      {/* Header Sections */}
      <div className="flex justify-between">
        <a href='/'><p className='font-semibold text-lg mb-2 cursor-pointer'>HOME</p></a>
        {header.headerSections?.map((section: any, idx: number) => (
          <div key={idx}>
            <h2 className="font-semibold text-lg mb-2">{section.sectionName}</h2>
            <ul className="space-y-1">
              {section.sections?.map((s: any, i: number) => (
                <li key={i}>
                  <a
                    href={s.slug}
                    className="hover:underline text-sm"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      
    </header>
  )
}
