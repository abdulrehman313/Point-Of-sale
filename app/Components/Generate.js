import html2pdf from "html2pdf.js";

const Generate = async (htmlContent, pdfName) => {
  const pdfOptions = {
    margin: 10,
    filename: pdfName || "document.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  const element = document.createElement("div");
  element.innerHTML = htmlContent;

  try {
    const pdf = await html2pdf().from(element).set(pdfOptions).outputPdf();
    pdf.save();
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
