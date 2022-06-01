import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 't-theme-manager',
  styleUrl: 't-theme-manager.css',
  shadow: true,
})
export class TThemeManager {
  @State() isOpen: boolean = false;

  @Listen('modalClosed')
  handleClick() {
      this.isOpen = !this.isOpen;
  }

  render() {
    let rendered = null;

    if (this.isOpen === true) {
      rendered = <t-theme-editor></t-theme-editor>;
    }

    return <Host>
      <button onClick={() => this.handleClick()}>
        {this.isOpen ? "Open" : "Closed"}
      </button>
      <slot></slot>
      {rendered}
    </Host>;
  }
}
