import { Component, h } from '@stencil/core';

@Component({
  tag: 't-sidebar',
  styleUrl: 't-sidebar.css',
  shadow: true,
})
export class TSidebar {

  render() {
    return (
      <div class="sidebar">
        <div class="container">
          <div class="header">
            <h1>T-Components</h1>
          </div>
          <aside>
            <slot></slot>
          </aside>
        </div>
      </div>
    );
  }

}
