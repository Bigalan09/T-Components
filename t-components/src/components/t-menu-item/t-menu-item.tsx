import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 't-menu-item',
  styleUrl: 't-menu-item.css',
  shadow: true,
})
export class TMenuItem {

  @Prop()
  header:boolean;

  render() {
    return (
      <Host data-header={this.header}>
        <slot></slot>
      </Host>
    );
  }

}
