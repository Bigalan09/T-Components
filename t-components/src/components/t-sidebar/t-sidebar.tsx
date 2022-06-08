import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-sidebar',
  styleUrl: 't-sidebar.css',
  shadow: true,
})
export class TSidebar {
  @Prop()
  header?: string = null;

  render() {
    let title = '';
    if (this.header !== null) {
      title = (
        <div class="header">
          <h1>{this.header}</h1>
        </div>
      );
    }
    return (
      <div class="sidebar">
        <div class="container">
          {title}
          <aside>
            <slot></slot>
          </aside>
        </div>
      </div>
    );
  }
}
