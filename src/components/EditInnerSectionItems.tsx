'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  pageId: string;
  title?: string;
  subHeading?: string;
  note?: string;
  bottomNote?: string;
  sectionIndex: number;
  sectionInnerIndex : number;
  subSectionIndex : number
}

const EditInnerSectionItems = ({
  pageId,
  sectionInnerIndex,
  subHeading,
  note,
  bottomNote,
  sectionIndex,
  subSectionIndex
}: Props) => {
  
  const [localSubHeading, setlocalSubHeading] = useState(subHeading || '');
  const [localNote, setLocalNote] = useState(note || '');
  const [localBottomNote, setLocalBottomNote] = useState(bottomNote || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setlocalSubHeading(subHeading || '');
    setLocalNote(note || '');
    setLocalBottomNote(bottomNote || '');
  }, [ subHeading, note, bottomNote]);

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageId,
          sectionIndex,
          sectionInnerIndex,
          subSectionIndex,
          ...(localSubHeading && { subHeading: localSubHeading }),
          ...(localNote && { note: localNote }),
          ...(localBottomNote && { bottomNote: localBottomNote }),
        }),
      });

      if (res.ok) {
        alert('✅ کامیابی سے محفوظ ہوگیا');
      } else {
        const data = await res.json();
        alert('❌ Error: ' + data.error || 'Unknown error');
      }
    } catch (err: any) {
      console.error('❌ Error:', err);
      alert('❌ Save failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {subHeading && (
        <div>
          <label>Sub Heading:</label>
          <input
            type="text"
            value={localSubHeading}
            onChange={(e) => setlocalSubHeading(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Main heading..."
          />
        </div>
      )}



      {note && (
        <div>
          <label>Note:</label>
          <textarea
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            className="border px-3 py-2 rounded w-full h-28 resize-y"
            placeholder="Main description..."
          />
        </div>
      )}

      {bottomNote && (
        <div>
          <label>Bottom Note:</label>
          <input
            type="text"
            value={localBottomNote}
            onChange={(e) => setLocalBottomNote(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Label..."
          />
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};

export default EditInnerSectionItems;
