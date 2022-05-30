import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-menu',
  styleUrl: 't-menu.css',
  shadow: true,
})
export class TMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
