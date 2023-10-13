import { newSpecPage } from '@stencil/core/testing';
import { MyMathjax } from '../my-mathjax';

describe('my-mathjax', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyMathjax],
      html: `<my-mathjax></my-mathjax>`,
    });
    expect(page.root).toEqualHtml(`
      <my-mathjax>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-mathjax>
    `);
  });
});
