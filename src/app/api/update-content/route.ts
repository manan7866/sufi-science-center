
import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest) {
  const { pageId, sectionIndex, subSectionIndex, newParagraphs,uniqueKey } = await req.json();
  console.log('pageId:', pageId);
  console.log("console.log(JSON.stringify(newParagraphs, null, 2));ka output",JSON.stringify(newParagraphs, null, 2));
  try {
    const patch = await client
      .patch(pageId)
      .set({
        [`contentSections[${sectionIndex}].complexContentBlock.contentSections[0].subSections[${subSectionIndex}].paragraphs`]:
          newParagraphs,
      })
      .commit();

    return NextResponse.json({ success: true, patch });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
