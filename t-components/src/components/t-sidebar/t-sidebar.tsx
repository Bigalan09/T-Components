import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 't-sidebar',
  styleUrl: 't-sidebar.css',
  shadow: true,
})
export class TSidebar {

  render() {
    return (
      <Host>
        <aside>
        <h1>T-Components</h1>
          <slot></slot>
        </aside>
      </Host>
    );
  }

}
