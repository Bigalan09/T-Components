import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

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

  @Event() colorChanged: EventEmitter<any>;

  @Listen('valueChanged')
  private onValueChanged(event: CustomEvent<any>) {
    let value = event.detail;
    this.colorChanged.emit({color: value, name: this.colorname});
  }

  render() {
    return (
      <Host>
        <label>{this.colorname}</label><br />
        <t-input type="text" value={this.color} />
      </Host>
    );
  }

}
