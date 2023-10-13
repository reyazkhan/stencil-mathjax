import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Listen('click')
  handleClick() {
    console.log('btn clicked');
  }

  render() {
    return (
      //   <Host>
      //     <slot></slot>
      //   </Host>
      <button>Click Me</button>
    );
  }
}
