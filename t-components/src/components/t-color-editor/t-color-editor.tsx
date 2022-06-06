import { Component, Host, h, Prop, Event, EventEmitter, Listen, Element } from '@stencil/core';

@Component({
  tag: 't-color-editor',
  styleUrl: 't-color-editor.css',
  shadow: true,
})
export class TColorEditor {

  @Element() colorElement: HTMLElement;

  @Prop()
  color: string;

  @Prop()
  colorname: string;

  @Event() colorChanged: EventEmitter<any>;

  @Listen('valueChanged')
  private _onValueChanged(event: CustomEvent<any>) {
    let value = event.detail;
    this.colorChanged.emit({color: value, name: this.colorname});
    this.colorElement.style.borderLeftColor = value;
  }
  
  componentWillLoad() {
    this.colorElement.style.borderLeftColor = this.color;
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
