"use client"
import { Document, Page, } from "@react-pdf/renderer";
import { PdfHeader } from "./Header";
import { PdfFooter } from "./Footer";
import { PageContent } from "./content";
import { PdfData } from "../type";

type Props = {
    data: PdfData;
}
export function PdfDocument({ data }: Props) {
    return <Document >
        <Page size={'A4'} >
            <PdfHeader />
            <PageContent data={data} />
            <PdfFooter />
        </Page>
        <Page size={'A4'} >
            <PdfHeader />
            <PageContent data={data} />
            <PdfFooter />
        </Page>
    </Document>
}