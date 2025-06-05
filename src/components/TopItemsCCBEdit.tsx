'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  pageId: string;
  title?: string;
  mainheading?: string;
  mainDescription?: string;
  label?: string;
  sectionIndex: number;
}

const TopItemsCCBEdit = ({
  pageId,
  title,
  mainheading,
  mainDescription,
  label,
  sectionIndex,
}: Props) => {
  const [localTitle, setLocalTitle] = useState(title || '');
  const [localHeading, setLocalHeading] = useState(mainheading || '');
  const [localDesc, setLocalDesc] = useState(mainDescription || '');
  const [localLabel, setLocalLabel] = useState(label || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLocalTitle(title || '');
    setLocalHeading(mainheading || '');
    setLocalDesc(mainDescription || '');
    setLocalLabel(label || '');
  }, [title, mainheading, mainDescription, label]);

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/update-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageId,
          sectionIndex,
          ...(localHeading && { mainHeading: localHeading }),
          ...(localTitle && { title: localTitle }),
          ...(localDesc && { mainDescription: localDesc }),
          ...(localLabel && { label: localLabel }),
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
      {mainheading && (
        <div>
          <label>Main Heading:</label>
          <input
            type="text"
            value={localHeading}
            onChange={(e) => setLocalHeading(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Main heading..."
          />
        </div>
      )}

      {title && (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Title..."
          />
        </div>
      )}

      {mainDescription && (
        <div>
          <label>Main Description:</label>
          <textarea
            value={localDesc}
            onChange={(e) => setLocalDesc(e.target.value)}
            className="border px-3 py-2 rounded w-full h-28 resize-y"
            placeholder="Main description..."
          />
        </div>
      )}

      {label && (
        <div>
          <label>Label:</label>
          <input
            type="text"
            value={localLabel}
            onChange={(e) => setLocalLabel(e.target.value)}
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

export default TopItemsCCBEdit;
