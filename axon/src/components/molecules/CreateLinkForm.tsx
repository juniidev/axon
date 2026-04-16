import { useState } from "react";

interface CreateLinkFormProps {
  onAdd: (title: string, url: string) => void;
}

export const CreateLinkForm = ({ onAdd }: CreateLinkFormProps) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const canSubmit = title && url;

  return (
    <div className="flex flex-col gap-3">
      
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        className="p-2 rounded bg-neutral-800 text-white"
      />

      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        className="p-2 rounded bg-neutral-800 text-white"
      />

      <button
        disabled={!canSubmit}
        onClick={() => {
          onAdd(title, url);
          setTitle("");
          setUrl("");
        }}
        className={`p-2 rounded ${
          canSubmit ? "bg-blue-600" : "bg-neutral-700"
        }`}
      >
        Crear link
      </button>

    </div>
  );
};