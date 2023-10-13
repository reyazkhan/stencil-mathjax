import { newSpecPage } from '@stencil/core/testing';
import { MyAngularMathjax } from '../my-angular-mathjax';

describe('my-angular-mathjax', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAngularMathjax],
      html: `<my-angular-mathjax></my-angular-mathjax>`,
    });
    expect(page.root).toEqualHtml(`
      <my-angular-mathjax>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-angular-mathjax>
    `);
  });
});
