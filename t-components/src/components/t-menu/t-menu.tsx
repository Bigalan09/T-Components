import { Component, h } from '@stencil/core';

@Component({
  tag: 't-menu',
  styleUrl: 't-menu.css',
  shadow: true,
})
export class TMenu {

  render() {
    return (
      <div class="menu">
        <slot></slot>
      </div>
    );
  }

}
