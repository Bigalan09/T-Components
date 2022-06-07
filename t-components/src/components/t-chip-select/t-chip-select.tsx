import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 't-chip-select',
  styleUrl: 't-chip-select.css',
  shadow: true,
})
export class TChipSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
