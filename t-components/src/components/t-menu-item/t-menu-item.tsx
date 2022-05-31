import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 't-menu-item',
  styleUrl: 't-menu-item.css',
  shadow: true,
})
export class TMenuItem {

  @Prop()
  header:boolean;

  @Prop()
  href:string;

  @Listen('click', { capture: true })
  private onClick(_event) {
    if (this.href) {
      window.location.href = this.href;
    }
  }

  render() {
    return (
      <Host data-header={this.header}>
        <slot></slot>
      </Host>
    );
  }

}
