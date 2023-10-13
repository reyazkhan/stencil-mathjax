import { Component, Prop, Watch, h } from '@stencil/core';
// import { HTMLStencilElement } from '@stencil/core/internal';
declare global {
  interface Window {
    MathJax: any;
  }
}
@Component({
  tag: 'my-angular-mathjax',
  styleUrl: 'my-angular-mathjax.css',
  shadow: true,
})
export class MyAngularMathjax {
  //   @Prop() content: any;
  componentWillLoad() {
    //     console.log('here');

    this.loadMathJaxScript();
    //     setTimeout(() => {
    //       console.log(this.content);
    //       document.querySelector('my-mathjax').shadowRoot.getElementById('math-content').innerHTML = this.content;
    //     }, 3000);
  }
  //   @Watch('content')
  //   handleContent() {
  //     console.log(this.content);
  //   }

  loadMathJaxScript() {
    if (document.getElementById('MathJax-script')) {
      return;
    }
    const mathJaxScript = document.createElement('script');
    mathJaxScript.id = 'MathJax-script';
    mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    mathJaxScript.async = true;

    document.head.appendChild(mathJaxScript);

    // MathJax configuration
    // mathJaxScript.addEventListener('load', () => {
    //   this.configureMathJax();
    document.addEventListener('DOMContentLoaded', function () {
      window.MathJax.Hub?.Queue(['Typeset', window.MathJax.Hub, document.getElementById('math-content')]);
    });
    // });
  }
  render() {
    return (
      <div id="math-content">
        <slot></slot>
      </div>
    );
  }
}
