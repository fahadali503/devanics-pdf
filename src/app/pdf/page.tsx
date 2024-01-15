'use client';

import { useRef, useState } from "react";
import pdfData from './data.json';
import { PdfData } from "./type";
import { useReactToPrint, } from "react-to-print";
import { PdfComponent } from "./components";
import { PdfNavbar } from "./components/Navbar";

const pageStyle = `
    @page {
        size: A4;
        padding-top: 100mm;
    }

    header, footer {
        position: fixed;
        left: 0;
        right: 0;
        background-color: #f0f0f0; /* Set the background color as needed */
        padding: 10px; /* Adjust the padding value as needed */
      }
      
      header {
        top: 0;
      }
      
      footer {
        bottom: 0;
      }
      
    @media all {
        .pagebreak {
          display: none;
        }
      }

      @media print {
        .pagebreak {
          page-break-before: always;
        }
      }
  `;
export default function Page() {
    const [data, setData] = useState<PdfData>(pdfData);
    const componentRef = useRef<HTMLDivElement>();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current!,
        pageStyle
    });

    return <div>
        <PdfComponent data={pdfData} ref={componentRef as React.RefObject<HTMLDivElement>} />
        <button onClick={handlePrint}>Print this out!</button>
    </div>
}