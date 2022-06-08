import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-display',
  styleUrl: 't-display.css',
  shadow: true,
})
export class TDisplay {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
