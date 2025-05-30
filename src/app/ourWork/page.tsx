// 'use client';
// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import { PortableText } from '@portabletext/react';
// import EditableParagraphs from '@/components/EditableParagraphs';


// const query = `
// *[_type == "page" && pageName == "Our Work & Practice"][0]{
//     _id,
//     pageName,
//     "complexContent": contentSections[_type == "typeSelectorBlock" && type == "complexContentBlock"][0].complexContentBlock
//   }
// `;

// export default function OurWorkPage() {
//   const [page, setPage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     client.fetch(query).then((data) => {
//       setPage(data);
//       setLoading(false);
//       console.log("pageData",data)
//     });
//   }, []);
  
//   if (loading) return <div>Loading...</div>;
//   if (!page || !page?.complexContent) return <div>No content found.</div>;

//   const content = page?.complexContent;

//   return (
//     <div className='bg-emerald-50' style={{ padding: '2rem' }}>
//       <h1>{page?.pageName}</h1>
//       <h2>{content.mainHeading}</h2>
//       <p>{content.mainDescription}</p>
//       <p className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-md py-2 px-3 w-80 text-center rounded-full'>{content.label}</p>

//       {content.contentSections?.map((section, idx) => (
//         <div  key={idx} style={{ marginTop: '2rem' }}>
//           <h3>{section.sectionHeading}</h3>
//           <p>{section.sectionDescription}</p>

//           {section.subSections?.map((sub, subIdx) => (
//             <div className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-4xl text-white text-center py-4' key={subIdx} style={{ paddingLeft: '1rem', borderLeft: '2px solid #ccc', marginTop: '1rem' }}>
//               <h4 className='text-3xl'>{sub.subHeading}</h4>
              
//               <p> {sub.note}</p>

//               <div className='flex flex-col-reverse gap-3'>
//                 <strong>Paragraphs:</strong>
//                 <PortableText  value={sub.paragraphs} />
//               </div>

//               <p><em>{sub.bottomNote}</em></p>
//             </div>
//           ))}
//         </div>
//       ))}
//  {content.contentSections.map((section, sectionIdx) => (
//   <div key={sectionIdx} className="mb-6">
//     {section.subSections?.map((subSection, subIdx) => (
//       <div key={subIdx} className="border-l-2 border-gray-300 pl-4 my-4">
//         <h4 className="text-lg font-semibold">{subSection.subHeading}</h4>
//         <p className="italic text-sm">{subSection.note}</p>
        

//         <div className="mt-2">
//           <strong>Paragraphs:</strong>
//           <EditableParagraphs
//             pageId={page?._id}
//             sectionIndex={2} // <-- make sure this is correct for your use case
//             subSectionIndex={subIdx}
//             paragraphs={subSection.paragraphs}
//           />
//         </div>

//         <p className="text-sm mt-2 text-gray-500">{subSection.bottomNote}</p>
//       </div>
//     ))}
//   </div>
// ))}

//     </div>
 
//   );
// }
'use client';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import EditableParagraphs from '@/components/EditableParagraphs';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { url } from 'node:inspector/promises';



const query = `
*[_type == "page" && pageName == "Our Work & Practice"][0]{
    _id,
    pageName,
    "complexContent": contentSections[_type == "typeSelectorBlock" && type == "complexContentBlock"][0].complexContentBlock,
    "imageSection": contentSections[_type == "typeSelectorBlock" && type == "goalSection"][0].goalSection
  }
`;

export default function OurWorkPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subId ,setSubId] = useState<number | null | any>()
  const [subPara , setSubPara] = useState<any[]>([])
function handleChange(para , sub : number){
  console.log("Clicked!", sub);
  setSubId(sub)
  setSubPara(para)
}
  useEffect(() => {
    client.fetch(query).then((data) => {
      setPage(data);
      setLoading(false);
      console.log("pageData",data)
    });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (!page || !page?.complexContent) return <div>No content found.</div>;

  const content = page?.complexContent;
  const imageSection = page?.imageSection;
  console.log(imageSection)

  return (
    <div className='bg-emerald-50' style={{ padding: '2rem' }}>
      <h1>{page?.pageName}</h1>
      
      <div className='my-28 flex justify-center gap-8'>
        <Image alt='workImage' height={700} width={500} src={urlFor(imageSection.image).url()}/>
        <div className='flex flex-col w-80 justify-between'>
          <p className='text-purple-500'>   {`----  ${imageSection.intro}  ----`}  </p>
          <p className='text-3xl '>{imageSection.heading}</p>
          <p className='text-2xl '>{imageSection.subheading}</p>
          <PortableText   value={imageSection.description} />
        </div>
      </div>
      <h2 className='text-4xl my-7'>{content.mainHeading}</h2>
      <p>{content.mainDescription}</p>
      <p className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-md py-2 px-3 w-80 text-center rounded-full'>{content.label}</p>

      {content.contentSections?.map((section, idx) => (
        <div  key={idx} style={{ marginTop: '2rem' }}>
          <h3>{section.sectionHeading}</h3>
          <p>{section.sectionDescription}</p>
          

          {section.subSections?.map((sub, subIdx) => (
            <div className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-4xl text-white text-center py-4' key={subIdx} style={{ paddingLeft: '1rem', borderLeft: '2px solid #ccc', marginTop: '1rem' }}>
              <h4 className='text-3xl'>{sub.subHeading}</h4>
              
              <p> {sub.note}</p>

              <div onClick={()=> handleChange(sub.paragraphs , subIdx)} className='flex flex-col gap-3'>
                <strong>Paragraphs:</strong>
                <PortableText   value={sub.paragraphs} />
              </div>

              <p><em>{sub.bottomNote}</em></p>
            </div>
          ))}
        </div>
      ))}
         
         {subId !== null && (
  <div className="mt-2">
    <strong>Paragraphs:</strong>
    <EditableParagraphs
      pageId={page?._id}
      sectionIndex={2}
      subSectionIndex={subId}
      paragraphs={subPara}
    />
  </div>
)}

    </div>
 
  );
}