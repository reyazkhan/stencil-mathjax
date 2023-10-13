import { Component, Prop, h } from '@stencil/core';
declare global {
  interface Window {
    MathJax: any;
  }
}
@Component({
  tag: 'my-mathjax',
  styleUrl: 'my-mathjax.css',
  shadow: true,
})
export class MyMathjax {
  @Prop() content: string;
  componentDidLoad() {
    console.log('component DIDLoad 2');
    console.log(this.content);
    console.log(document.querySelector('my-mathjax').shadowRoot.getElementById('render'));
    this.renderOrCall();
    // this.renderMath2();

    // // setTimeout(() => {
    // //   console.log(document.querySelector('my-mathjax').shadowRoot.getElementById('render'));
    // // }, 1000);
    // if (window?.MathJax && this.content) {
    //   window.MathJax.Hub.Config({
    //     'extensions': ['tex2jax.js', 'fast-preview.js'],
    //     'jax': ['input/TeX', 'output/HTML-CSS'],
    //     'tex2jax': {
    //       inlineMath: [
    //         ['$$', '$$'],
    //         ['\\(', '\\)'],
    //       ],
    //       displayMath: [
    //         ['$$', '$$'],
    //         ['\\[', '\\]'],
    //       ],
    //       processEscapes: true,
    //     },
    //     'HTML-CSS': { fonts: ['TeX'], linebreaks: { automatic: true } },
    //     'showProcessingMessages': true,
    //     'mml2jax': { preview: 'none' }, // This line enables MathML rendering
    //     'TeX': { extensions: ['[mhchem]/mhchem.js'] },
    //     // This line enables mhchem extension for chemical formulas
    //   });
    //   window.MathJax.Hub.Register.StartupHook('End', function () {
    //     console.log('Mathjax loaded.');
    //     console.log(document.getElementById('render'));
    //   });
    //   window.MathJax.Hub.Queue([
    //     'Typeset',
    //     window.MathJax?.Hub,
    //     document.querySelector('my-mathjax').shadowRoot.getElementById('render')?.innerText,
    //     // this.latexRenderer,
    //   ]);
    // }
  }

  componentDidUpdate() {
    // this.renderMath2();
  }

  private latexRenderer: HTMLDivElement | null = null;

  private renderOrCall = () => {
    if (this.isMathJax()) {
      this.renderMath();
    } else {
      this.loadJS('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML', this.callBack);
    }
  };

  private callBack = () => {
    this.renderMath();
  };

  private isMathJax = () => {
    return window && window.MathJax;
  };

  private loadJS = (file: string, cb: () => void) => {
    if (file) {
      var jsElm = document.createElement('script');
      jsElm.type = 'application/javascript';
      jsElm.src = file;
      jsElm.async = true;
      if (cb) {
        jsElm.onload = cb;
      }
      document.body.appendChild(jsElm);
    }
  };
  private renderMath = () => {
    if (this.isMathJax() && this.latexRenderer) {
      console.log('2');

      window.MathJax.Hub.Config({
        'extensions': ['mml2jax.js', 'tex2jax.js', 'fast-preview.js'],
        'jax': ['input/TeX', 'output/HTML-CSS'],
        'tex2jax': {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
          ],
          displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]'],
          ],
          processEscapes: false,
        },
        'HTML-CSS': { fonts: ['TeX'], linebreaks: { automatic: true } },
        'showProcessingMessages': true,
      });
      window?.MathJax?.Hub?.Queue([
        'Typeset',
        window.MathJax.Hub,
        this.latexRenderer,
        // document.querySelector('my-mathjax').shadowRoot.getElementById('render'),
      ]);
    }
  };

  render() {
    return (
      //   <Host>
      //     <slot></slot>
      //   </Host>
      <div>
        {/* <div ref={el => (this.latexRenderer = el)}>{this.content}</div> */}
        {/* <div id="render">{this.content}</div> */}
        {/* <div innerHTML={this.content}></div> */}
        {/* <div ref={el => (this.element = el as HTMLElement)}></div> */}
        {/* <div ref={el => (this.container = el as HTMLDivElement)} innerHTML={this.content}></div> */}
        <div ref={el => (this.latexRenderer = el)} innerHTML={this.content}></div>
        {/* <div ref={el => (this.latexRenderer = el)}>
          <div class="mathml-content" style={{ display: 'block' }} innerHTML={this.content}></div>
          <div class="html-content" style={{ display: 'block' }} innerHTML={this.content}></div>
        </div> */}
        {/* <div class="math-content"></div> */}
        <span>--------------------------------</span>
      </div>
    );
  }
}
