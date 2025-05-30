// 'use client';

// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { useState } from 'react';
// import { convertPortableTextToHTML } from '@/lib/portableTextToHTML';

// export default function EditableParagraphs({ pageId, sectionIndex, subSectionIndex, paragraphs }) {
//   const htmlContent = convertPortableTextToHTML(paragraphs); // ✅ use helper

//   const [loading, setLoading] = useState(false);

//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: htmlContent, // ✅ Set converted content
//   });

//   const handleSave = async () => {
//     if (!editor) return;

//     const plainText = editor.getText();
//     const newParagraphs = plainText.split('\n\n').map((para) => ({
//       _type: 'block',
//       style: 'normal',
//       markDefs: [],
//       children: [
//         {
//           _type: 'span',
//           text: para,
//           marks: [],
//         },
//       ],
//     }));

//     setLoading(true);

//     try {
//       const res = await fetch('/api/update-content', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ pageId, sectionIndex, subSectionIndex, newParagraphs }),
//       });

//       if (res.ok) {
//         alert('✅ محفوظ ہو گیا');
//       } else {
//         alert('❌ محفوظ کرنے میں مسئلہ آیا');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('❌ سرور سے رابطہ نہیں ہو سکا');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="border mt-4 p-4 rounded shadow-sm bg-gradient-to-r from-purple-600 rounded-4xl to-indigo-600">
//       {/* ✅ Toolbar */}
//       {editor && (
//         <div className="mb-2  space-x-2">
//           <button
//             onClick={() => editor.chain().focus().toggleBold().run()}
//             className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-100'}`}
//           >
//             Bold
//           </button>
//           <button
//             onClick={() => editor.chain().focus().toggleItalic().run()}
//             className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-100'}`}
//           >
//             Italic
//           </button>
//         </div>
//       )}

//       {/* ✅ Editor */}
//       <EditorContent editor={editor} className="prose max-w-none bg-white border p-2 rounded" />

//       {/* ✅ Save Button */}
//       <button
//         onClick={handleSave}
//         disabled={loading}
//         className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         {loading ? 'Saving....' : 'Save Changes'}
//       </button>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import Bold from '@tiptap/extension-bold';
// import Italic from '@tiptap/extension-italic';
// import Underline from '@tiptap/extension-underline';
// import Paragraph from '@tiptap/extension-paragraph';
// import Document from '@tiptap/extension-document';
// import Text from '@tiptap/extension-text';

// interface EditableParagraphsProps {
//   pageId: string;
//   sectionIndex: number;
//   subSectionIndex: number;
//   paragraphs: any[];
// }

// export default function EditableParagraphs({
//   pageId,
//   sectionIndex,
//   subSectionIndex,
//   paragraphs,
// }: EditableParagraphsProps) {
//   const [loading, setLoading] = useState(false);

//   // Convert Sanity Portable Text blocks to HTML string with marks
//   const defaultText = paragraphs
//     .map((block) =>
//       block.children?.map((c: any) => {
//         let text = c.text || '';
//         if (c.marks?.includes('strong')) {
//           text = `<strong>${text}</strong>`;
//         }
//         if (c.marks?.includes('em')) {
//           text = `<em>${text}</em>`;
//         }
//         if (c.marks?.includes('underline')) {
//           text = `<u>${text}</u>`;
//         }
//         return text;
//       }).join('') || ''
//     )
//     .join('\n');

//   const editor = useEditor({
//     extensions: [Document, Paragraph, Text, StarterKit, Bold, Italic, Underline],
//     content: defaultText,
//   });

//   // Convert TipTap JSON to Sanity Portable Text blocks
//   function convertTiptapToSanityBlocks(tiptapJson: any) {
//     if (!tiptapJson?.content) return [];

//     return tiptapJson.content
//       .filter((block: any) => block.type === 'paragraph')
//       .map((block: any) => {
//         const children =
//           block.content?.map((child: any) => {
//             const marks = (child.marks || []).map((mark: any) => {
//               if (mark.type === 'bold' || mark === 'bold') return 'strong';
//               if (mark.type === 'italic' || mark === 'italic') return 'em';
//               if (mark.type === 'underline' || mark === 'underline') return 'underline';
//               return mark;
//             });

//             return {
//               _type: 'span',
//               text: child.text || '',
//               marks,
//             };
//           }) || [];

//         return {
//           _type: 'block',
//           style: 'normal',
//           markDefs: [],
//           children,
//         };
//       });
//   }

//   const handleSave = async () => {
//     if (!editor) return;
//     setLoading(true);

//     const tiptapJson = editor.getJSON();
//     const newParagraphs = convertTiptapToSanityBlocks(tiptapJson);

//     try {
//       const res = await fetch('/api/update-content', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           pageId,
//           sectionIndex,
//           subSectionIndex,
//           newParagraphs,
//         }),
//       });

//       if (res.ok) {
//         alert('✅ کامیابی سے محفوظ ہوگیا');
//       } else {
//         alert('❌ محفوظ کرنے میں مسئلہ آیا');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('❌ سرور سے رابطہ نہیں ہو سکا');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-3 mt-4">
//       {/* Toolbar Buttons */}
//       {editor && (
//         <div className="mb-2 space-x-2">
//           <button
//             onClick={() => editor.chain().focus().toggleBold().run()}
//             className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-100'}`}
//             type="button"
//           >
//             Bold
//           </button>
//           <button
//             onClick={() => editor.chain().focus().toggleItalic().run()}
//             className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-100'}`}
//             type="button"
//           >
//             Italic
//           </button>
//           <button
//             onClick={() => editor.chain().focus().toggleUnderline().run()}
//             className={`px-2 py-1 rounded ${editor.isActive('underline') ? 'bg-gray-300' : 'bg-gray-100'}`}
//             type="button"
//           >
//             Underline
//           </button>
//         </div>
//       )}

//       {/* Editor Content */}
//       <div className="border border-gray-300 rounded p-2">
//         <EditorContent editor={editor} />
//       </div>

//       {/* Save Button */}
//       <button
//         onClick={handleSave}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
//         type="button"
//       >
//         {loading ? 'محفوظ ہو رہا ہے...' : 'محفوظ کریں'}
//       </button>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { EditorContent, generateHTML, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import { nanoid } from 'nanoid';
import { convertPortableTextToHTML } from '@/lib/portableTextToHTML';

export default function EditableParagraphs({
  pageId,
  sectionIndex,
  subSectionIndex,
  paragraphs,
}: {
  pageId: string;
  sectionIndex: number;
  subSectionIndex: number;
  paragraphs: any[];
}) {
  const [loading, setLoading] = useState(false);

  // Convert Sanity blocks to HTML string with proper <p> tags for paragraphs
  const defaultText = paragraphs
    .map((block) =>
      `<p>` +
      (block.children?.map((c: any) => {
        let text = c.text || '';
        if (c.marks?.includes('strong')) {
          text = `<strong>${text}</strong>`;
        }
        if (c.marks?.includes('em')) {
          text = `<em>${text}</em>`;
        }
        if (c.marks?.includes('underline')) {
          text = `<u>${text}</u>`;
        }
        return text;
      }).join('') || '') +
      `</p>`
    )
    .join('');

  const editor = useEditor({
    extensions: [Document, Paragraph, Text, StarterKit, Bold, Italic, Underline],
    content: defaultText,
  });

  // Convert Tiptap JSON back to Sanity Portable Text blocks
  // function convertTiptapToSanityBlocks(tiptapJson: any) {
  //   if (!tiptapJson?.content) return [];

  //   return tiptapJson.content
  //     .filter((block: any) => block.type === 'paragraph')
  //     .map((block: any) => {
  //       const children =
  //         block.content?.map((child: any) => {
  //           const marks = (child.marks || []).map((mark: string) => {
  //             if (mark === 'bold') return 'strong';
  //             if (mark === 'italic') return 'em';
  //             if (mark === 'underline') return 'underline';
  //             return mark;
  //           });

  //           return {
  //             _type: 'span',
  //             _key: nanoid(),
  //             text: child.text || '',
  //             marks: marks,
  //           };
  //         }) || [];

  //       return {
  //         _type: 'block',
  //         style: 'normal',
  //         _key: nanoid(),
  //         markDefs: [],
  //         children,
  //       };
  //     });
  // }
  // function convertTiptapToSanityBlocks(tiptapJson: any) {
  //   if (!tiptapJson?.content) return [];
  
  //   return tiptapJson.content
  //     .filter((block: any) => block.type === 'paragraph')
  //     .map((block: any) => {
  //       let children =
  //         block.content?.map((child: any) => {
  //           const text = child.text?.trim();
  //           if (text === undefined || text === null) return null;
  
  //           const marks = (child.marks || []).map((mark: string) => {
  //             if (mark === 'bold') return 'strong';
  //             if (mark === 'italic') return 'em';
  //             if (mark === 'underline') return 'underline';
  //             return mark;
  //           });
  
  //           return {
  //             _type: 'span',
  //             _key: nanoid(),
  //             text,
  //             marks,
  //           };
  //         }).filter((span: any) => span !== null) || [];
  
  //       // ✅ Allow empty lines by adding empty span if needed
  //       if (children.length === 0) {
  //         children = [
  //           {
  //             _type: 'span',
  //             _key: nanoid(),
  //             text: '',
  //             marks: [],
  //           },
  //         ];
  //       }
  
  //       return {
  //         _type: 'block',
  //         _key: nanoid(),
  //         style: 'normal',
  //         markDefs: [],
  //         children,
  //       };
  //     });
  // }
  function convertTiptapToSanityBlocks(tiptapJson: any) {
    if (!tiptapJson?.content) return [];

    return tiptapJson.content
      .filter((block: any) => block.type === 'paragraph')
      .map((block: any) => {
        let children =
          block.content?.map((child: any) => {
            if (!('text' in child)) return null;

            const marks = (child.marks || []).map((mark: any) => {
              if (typeof mark === 'object') {
                if (mark.type === 'bold') return 'strong';
                if (mark.type === 'italic') return 'em';
                if (mark.type === 'underline') return 'underline';
                return '';
              } else {
                if (mark === 'bold') return 'strong';
                if (mark === 'italic') return 'em';
                if (mark === 'underline') return 'underline';
                return mark;
              }
            }).filter(Boolean); // Remove empty

            return {
              _type: 'span',
              _key: nanoid(),
              text: child.text || '',
              marks,
            };
          }).filter((c: any) => c !== null) || [];

        // ✅ Handle empty lines
        if (children.length === 0) {
          children = [
            {
              _type: 'span',
              _key: nanoid(),
              text: '',
              marks: [],
            },
          ];
        }

        return {
          _type: 'block',
          _key: nanoid(),
          style: 'normal',
          markDefs: [],
          children,
        };
      });
  }
  useEffect(() => {
    if (editor && paragraphs) {
      const html = convertPortableTextToHTML(paragraphs);
      editor.commands.setContent(html, false); // false = don't emit transaction
    }
  }, [paragraphs, editor]);
  const handleSave = async () => {
    if (!editor) return;
    setLoading(true);
  
    const tiptapJson = editor.getJSON();
    const newParagraphs = convertTiptapToSanityBlocks(tiptapJson);
    const uniqueKey = `paragraphs[0]-${new Date().getTime()}`
  
    try {
      const res = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageId,
          sectionIndex,
          subSectionIndex,
          newParagraphs,
          uniqueKey 
          
        }),
      });
  
      if (res.ok) {
        alert('✅ کامیابی سے محفوظ ہوگیا');
      } else {
        // Try to get detailed error info from response
        let errorText;
        try {
          const errorData = await res.json();
          errorText = errorData.message || JSON.stringify(errorData);
        } catch {
          errorText = await res.text();
        }
        console.error('Save failed:', errorText);
        alert('❌ محفوظ کرنے میں مسئلہ آیا: ' + errorText);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('❌ سرور سے رابطہ نہیں ہو سکا');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex flex-col gap-3 mt-4">
      {/* Toolbar for formatting */}
      {editor && (
        <div className="mb-2 space-x-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`px-2 py-1 rounded ${editor.isActive('underline') ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            Underline
          </button>
        </div>
      )}

      {/* Editor content */}
      <div className="border border-gray-300 rounded p-2">
        <EditorContent editor={editor} />
      </div>

      {/* Save button */}
      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      >
        {loading ? 'Saving...' : 'Save Changing'}
      </button>
    </div>
  );
}
