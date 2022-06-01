import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 't-input',
  styleUrl: 't-input.css',
  shadow: true,
})
export class TInput {

  @Prop({mutable: true, reflect: true})
  value: string;

  @Prop()
  type:string = "text";

  @Prop()
  placeholder:string = "";

  render() {
    return (
      <Host>
        <input type={this.type} placeholder={this.placeholder} value={this.value} />
      </Host>
    );
  }

}
