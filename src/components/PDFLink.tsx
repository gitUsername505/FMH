import React from "react";
import { FaFilePdf } from "react-icons/fa";

interface PdfLinkProps {
  fileUrl: string;
  fileName?: string;
  openInNewTab?: boolean;
}

const PdfLink: React.FC<PdfLinkProps> = ({
  fileUrl,
  fileName = "file.pdf",
  openInNewTab = true,
}) => {
  return (
    <a
      href={fileUrl}
      download={openInNewTab ? undefined : fileName}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FaFilePdf size={50} color="red" />
        <span>Download</span>
      </div>
    </a>
  );
};

export default PdfLink;
