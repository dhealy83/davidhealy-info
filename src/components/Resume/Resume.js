import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Button } from "react-bootstrap";

import "./Resume.css";

import MyResume from "./David_Healy_Resume.pdf";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <>
      <div>
        <div>
          <Document
            file={MyResume}
            style={{ backgroundColor: "transparent" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>

      <div className="pdfNavButtons d-flex justify-content-evenly mx-3">
        <div>
          <Button className=" px-4 bg-secondary" onClick={goToPrevPage}>
            Prev
          </Button>
        </div>

        <div className="">
          Page {pageNumber} of {numPages}
        </div>
        <div>
          <Button className=" px-4 bg-secondary" onClick={goToNextPage}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Resume;
