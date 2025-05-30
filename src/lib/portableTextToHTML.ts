export function convertPortableTextToHTML(paragraphs: any[]) {
    return paragraphs
      .map((block) => {
        return block.children
          .map((child: any) => {
            const text = child.text || '';
            if (child.marks?.includes('strong')) {
              return `<strong>${text}</strong>`;
            }
            return text;
          })
          .join('');
      })
      .join('<br><br>');
  }
  