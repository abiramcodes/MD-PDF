export const markdown =
  "## Example Content for Testing\n\n" +
  "Use this section to verify markdown rendering, code blocks, tables, and lists inside the project.\n\n" +
  "### Quick checklist\n" +
  "- [ ] Render headings correctly\n" +
  "- [ ] Render fenced code blocks with syntax highlighting\n" +
  "- [ ] Render tables and lists\n" +
  "- [ ] Display images and links\n\n" +
  "### Example commands\n" +
  "```bash\n" +
  "# install dependencies and run dev server\n" +
  "npm install\n" +
  "ng serve --open\n" +
  "```\n\n" +
  "### Small Angular component example\n" +
  "```typescript\n" +
  "import { Component, signal } from '@angular/core';\n\n" +
  "@Component({\n" +
  "    selector: 'app-sample',\n" +
  "    template: `\n" +
  '        <div class="sample">\n' +
  "            <h3>Sample Component</h3>\n" +
  '            <button (click)="onClick()">Click me</button>\n' +
  "            <p>{{ message() }}</p>\n" +
  "        </div>\n" +
  "    `\n" +
  "})\n" +
  "export class SampleComponent {\n" +
  "    message = signal('Hello from SampleComponent');\n\n" +
  "    onClick(): void {\n" +
  "        this.message.set('Button clicked at ' + new Date().toLocaleTimeString());\n" +
  "    }\n" +
  "}\n" +
  "```\n\n" +
  "### Test cases\n" +
  "| Feature | Input | Expected output |\n" +
  "|---|---:|---|\n" +
  "| Dev server | ng serve | App served at http://localhost:4200 |\n" +
  "| Component render | <app-sample> | Button and message visible |\n" +
  "| Code block | ```typescript``` | Syntax highlighted block |\n\n" +
  "### link\n\n" +
  "Visit the Angular docs: https://angular.dev";
