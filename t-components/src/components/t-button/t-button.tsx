import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {

  @Prop()
  variant: 'primary' | 'secondry' | 'tertiary' = 'primary';
  
  @Prop()
  type: 'button' | 'submit' | 'reset' = 'button';

  @Prop()
  fullwidth:boolean = false;

  render() {
    return (
        <button type={this.type} data-variant={this.variant} data-fullwidth={this.fullwidth}>
          <slot></slot>
        </button>
    );
  }

}
