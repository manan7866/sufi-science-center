
// import { client } from '@/sanity/lib/client';
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req : NextRequest) {
//   const { pageId, sectionIndex, subSectionIndex, newParagraphs } = await req.json();
//   console.log('pageId:', pageId);
//   console.log("console.log(JSON.stringify(newParagraphs, null, 2));ka output",JSON.stringify(newParagraphs, null, 2));
//   try {
//     const patch = await client
//       .patch(pageId)
//       .set({
//         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[0].subSections[${subSectionIndex}].paragraphs`]:
//           newParagraphs,
//       })
//       .commit();

//     return NextResponse.json({ success: true, patch });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest) {
  const { 
    pageId,

    // 🔹 Top-level fields (inside complexContentBlock)
    title,
    mainHeading,
    slug,
    mainDescription,
    label,
  
    // 🔸 Section-level (complexContentBlock.contentSections)
    sectionIndex,
    sectionHeading,
    sectionDescription,
  
    // 🔻 Sub-section-level (inside subSections)
    sectionInnerIndex,
    subSectionIndex,
    subHeading,
    note,
    newParagraphs,
    bottomNote,
   } = await req.json();
  console.log('pageId:', pageId);
  console.log("console.log(JSON.stringify(newParagraphs, null, 2));ka output",JSON.stringify(newParagraphs, null, 2));
  try {
    const patch = await client
      .patch(pageId)
      .set({
        // Top-level inside complexContentBlock
         [`contentSections[${sectionIndex}].complexContentBlock.title`]: title,
         [`contentSections[${sectionIndex}].complexContentBlock.mainHeading`]: mainHeading,
         [`contentSections[${sectionIndex}].complexContentBlock.slug`]: slug,
         [`contentSections[${sectionIndex}].complexContentBlock.mainDescription`]: mainDescription,
         [`contentSections[${sectionIndex}].complexContentBlock.label`]: label,
           // Section level inside complexContentBlock
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].sectionHeading`]: sectionHeading,
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].sectionDescription`]: sectionDescription,

          // SubSection level inside complexContentBlock
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].subSections[${subSectionIndex}].subHeading`]: subHeading,
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].subSections[${subSectionIndex}].note`]: note,
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].subSections[${subSectionIndex}].paragraphs`]: newParagraphs,
         [`contentSections[${sectionIndex}].complexContentBlock.contentSections[${sectionInnerIndex}].subSections[${subSectionIndex}].bottomNote`]: bottomNote,
      })
      .commit();

    return NextResponse.json({ success: true, patch });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
