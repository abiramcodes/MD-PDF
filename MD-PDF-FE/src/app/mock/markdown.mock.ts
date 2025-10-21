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
  "### Blockquote\n" +
  "> This is a blockquote. It can be used to highlight a quote from another source.\n" +
  ">\n" +
  "> Blockquotes can also span multiple paragraphs if you wish.\n\n" +
  "### Additional Section 1\n" +
  "This is the first additional paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\n\n" +
  "### Additional Section 2\n" +
  "This is the second additional paragraph. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\n\n" +
  "### Additional Section 3\n" +
  "This is the third additional paragraph. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.\n\n" +
  "### Additional Section 4\n" +
  "This is the fourth additional paragraph. Cras vestibulum bibendum augue. Proin huius, scelerisque sed, mollis in, enim. Praesent ut ligula non mi varius sagittis. Cras id desertus.\n\n" +
  "### Additional Section 5\n" +
  "This is the fifth additional paragraph. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.";
