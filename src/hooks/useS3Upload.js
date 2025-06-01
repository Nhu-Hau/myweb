import { useState } from "react";

export default function useS3Upload() {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return { imageUrl, handleUpload };
}
