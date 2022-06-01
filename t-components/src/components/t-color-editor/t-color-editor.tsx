import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 't-color-editor',
  styleUrl: 't-color-editor.css',
  shadow: true,
})
export class TColorEditor {

  @Prop()
  color: string;

  @Prop()
  colorname: string;

  render() {
    return (
      <Host>
        <label>{this.colorname}</label><br />
        <t-input type="text" value={this.color} />
      </Host>
    );
  }

}
