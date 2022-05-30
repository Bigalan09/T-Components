import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-theme-manager',
  styleUrl: 't-theme-manager.css',
  shadow: true,
})
export class TThemeManager {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
