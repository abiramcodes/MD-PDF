import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from 'src/services/pdf/pdf.service';

@Module({
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
