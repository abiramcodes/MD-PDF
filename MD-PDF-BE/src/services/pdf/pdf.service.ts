/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { marked } from 'marked';
import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-clike.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-diff.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-latex.min';
import 'prismjs/components/prism-markup.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-powershell.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
//as of now it will only have specific languages,
//later, need to add a field for selecting languages

@Injectable()
export class PdfService {
  constructor() {
    const renderer = new marked.Renderer();

    renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
      const code = text;
      const prismAny = Prism as unknown as any;
      const languageGrammar =
        (lang && prismAny.languages[lang]) || prismAny.languages.markup;
      const languageName = lang || 'markup';
      const highlighted = prismAny.highlight(
        code,
        languageGrammar,
        languageName,
      );
      return `<pre class="language-${languageName}"><code class="language-${languageName}">${highlighted}</code></pre>`;
    };

    marked.setOptions({
      renderer,
      gfm: true,
      breaks: true,
    });
  }

  private convertToHTML(markdown: string) {
    const html = marked.parse(markdown);
    return html;
  }

  public async markdownToPdf(markdown: string) {
    const html = await this.convertToHTML(markdown);
    const prismCss = fs.readFileSync(
      require.resolve('prismjs/themes/prism-okaidia.css'),
      'utf8',
    );

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setContent(`
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { 
                font-family: Roboto, sans-serif;
            }
          </style>
          <style>${prismCss}</style>
        </head>
        <body>
          <div>${html}</div>
        </body>
      </html>
    `);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        bottom: '10mm',
        right: '5mm',
        left: '5mm',
      },
    });

    await browser.close();

    return pdfBuffer;
  }
}
