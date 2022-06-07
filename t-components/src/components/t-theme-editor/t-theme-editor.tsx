import { Component, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 't-theme-editor',
  styleUrl: 't-theme-editor.css',
  shadow: true,
})
export class TThemeEditor {

  @Prop({mutable: true, reflect: true})
  theme:any;

  @Prop({mutable: true, reflect: true})
  isOpen: boolean = false;

  @Event() themeEdited: EventEmitter<any>;

  @Listen('colorChanged')
  _colorChanged(event: CustomEvent<any>) {
    var data = event.detail;
    this.theme[data.name] = data.color;
    this.themeEdited.emit(this.theme);
  }

  render() {
    return (
      <t-modal isOpen={this.isOpen}>
        <div class="container">
        {Object.keys(this.theme).map((color) =>
          <t-color-editor colorname={color} color={this.theme[color]}></t-color-editor>
        )}
        </div>
      </t-modal>
    );
  }

}
