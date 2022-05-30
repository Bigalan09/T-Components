import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-menu-item',
  styleUrl: 't-menu-item.css',
  shadow: true,
})
export class TMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
