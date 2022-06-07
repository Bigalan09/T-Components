import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 't-input',
  styleUrl: 't-input.css',
  shadow: true,
})
export class TInput {
  @Prop({mutable: true, reflect: true})
  fullwidth:boolean = false;

  @Prop({mutable: true, reflect: true})
  value: any;

  @Prop()
  type:string = "text";

  @Prop()
  placeholder:string = "";

  @Event() valueChanged: EventEmitter<string>;
    private onInputChangeValue(event: Event) {
        this.value = (event.target as HTMLInputElement).value;
        this.valueChanged.emit(this.value);
    }
  
  render() {
    return (
      <Host data-fullwidth={this.fullwidth}>
        <input placeholder={this.placeholder} type={this.type} value={this.value} onInput={this.onInputChangeValue.bind(this)} />
      </Host>
    );
  }
}
