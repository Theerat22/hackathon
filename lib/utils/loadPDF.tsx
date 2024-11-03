// utils/loadPDF.
import type { PDFParse } from 'pdf-parse';
const pdfParse: PDFParse = require('pdf-parse');

import fs from 'fs';

export const loadPDFContent = async (filePath: string): Promise<string> => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
};
