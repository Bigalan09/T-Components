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
    return <Host>
      <button onClick={() => this.handleClick()}>
        {this.isOpen ? "Open" : "Closed"}
      </button>
      <slot></slot>
      <t-theme-editor isOpen={this.isOpen}></t-theme-editor>
    </Host>;
  }
}
