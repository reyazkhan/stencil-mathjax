import { newE2EPage } from '@stencil/core/testing';

describe('my-angular-mathjax', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-angular-mathjax></my-angular-mathjax>');

    const element = await page.find('my-angular-mathjax');
    expect(element).toHaveClass('hydrated');
  });
});
