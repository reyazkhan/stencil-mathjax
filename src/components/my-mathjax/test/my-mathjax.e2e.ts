import { newE2EPage } from '@stencil/core/testing';

describe('my-mathjax', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-mathjax></my-mathjax>');

    const element = await page.find('my-mathjax');
    expect(element).toHaveClass('hydrated');
  });
});
