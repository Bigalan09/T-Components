import { Component, Host, h, State, Listen, Method } from '@stencil/core';

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

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Listen('themeEdited')
  themeEdited(event: CustomEvent<any>) {
    const data = event.detail;
    console.log(data);
  }

  render() {
    return <Host>
      <slot></slot>
      <t-theme-editor isOpen={this.isOpen}></t-theme-editor>
    </Host>;
  }
}
