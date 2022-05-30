import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-sidebar',
  styleUrl: 't-sidebar.css',
  shadow: true,
})
export class TSidebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
