
import React ,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import './resume.css';

import {Document,Page,PageNumber} from 'react-pdf';
import { pdfjs } from 'react-pdf';

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const linktopdf="https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function Resume()
{
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return(
        <div class="container">
            <div class="row ">
                <h5 class="text-center h5-class-style">Resume</h5>
            </div>
            <div class="row">
            <Document file={linktopdf} onLoadSuccess={onDocumentLoadSuccess}>
                   <Page pageNumber={pageNumber} />
            </Document>
            </div>
        </div>
    )
}
export default Resume;