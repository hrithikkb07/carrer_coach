export async function extractTextFromPDF(file) {
  if (!file || file.size === 0) return "";

  const apiKey = process.env.OCR_SPACE_API_KEY;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("language", "eng");
  formData.append("isOverlayRequired", "false");
  formData.append("filetype", "PDF");

  const res = await fetch("https://api.ocr.space/parse/image", {
    method: "POST",
    headers: {
      apikey: apiKey,
    },
    body: formData,
  });

  const data = await res.json();

  if (data.IsErroredOnProcessing) {
    console.error("OCR Error:", data.ErrorMessage);
    return "";
  }

  console.log("OCR Data:", data);
  return data.ParsedResults?.map(p => p.ParsedText).join("\n") || "";
}
