import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop() name: string;
  @Prop() email: string;
  @State() counter: number = 0;
  increment = () => {
    this.counter += 1;
  };
  @Watch('counter')
  watchProphandler(newValue: boolean, oldValue: boolean) {
    console.log('oldValue is ' + oldValue + ' newValue is ' + newValue);
  }
  render() {
    return (
      //   <Host>
      //     <slot></slot>
      // 	  </Host>
      <div class={'user-card'}>
        <h2>{this.name}</h2>
        <p>{this.email}</p>
        <p>Count : {this.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
