import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-container',
  styleUrl: 't-container.css',
  shadow: true,
})
export class TContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
