import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from 'src/services/pdf/pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  async generatePdf(@Body('markdown') markdown: string, @Res() res: Response) {
    const pdf = await this.pdfService.markdownToPdf(markdown);
    res.set({
      'Content-type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="document.pdf"',
    });
    res.send(pdf);
  }
}
