'use client';

import { useRef, useState } from "react";
import pdfData from './data.json';
import { PdfData } from "./type";
import { PdfComponent } from "./components";
import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { PdfDocument } from "./pdf-components";

export default function PdfPage() {
  const [data, setData] = useState<PdfData>(pdfData);

  return <div className="h-[800px]">
    <PDFViewer className="h-full w-full">
      <PdfDocument data={data} />
    </PDFViewer>
    {/* <PDFDownloadLink document={<PdfDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink> */}
  </div>

}