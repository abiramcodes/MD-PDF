import { Module } from '@nestjs/common';
import { PdfModule } from './controllers/pdf/pdf.module';

@Module({
  imports: [PdfModule],
})
export class AppModule {}
