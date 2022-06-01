import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 't-theme-editor',
  styleUrl: 't-theme-editor.css',
  shadow: true,
})
export class TThemeEditor {

  private _theme = {
    "primarylight": "#7082b8",
    "primary": "#f8f8f2",
    "primarydark": "#ff79c6",
    "successlight": "#0f0",
    "success": "#0c0",
    "successdark": "#090",
    "errorlight": "#fd4545",
    "error": "#ff2d2d",
    "errordark": "#c62424",
    "secondarylight": "#AAA",
    "secondary": "#8be9fd",
    "secondarydark": "#666",
    "warninglight": "#ffc281",
    "warning": "#ffb86c",
    "warningdark": "#e6a055",
    "infolight": "#a0a0ff",
    "info": "#7070ff",
    "infodark": "#4040ff",
    "welllight": "#44475a",
    "well": "#363948",
    "white": "#fff",
    "black": "#282a36",
    "tag-1": "#d34448",
    "tag-2": "#50fa7b",
    "tag-3": "#f1fa8c",
    "tag-4": "#bd93f9",
    "tag-5": "#ff79c6",
    "tag-6": "#6495ed",
    "tag-7": "#faffdf",
    "disabled": "#66cfbc",
    "backgroundprimary": "#282a36",
    "backgroundsecondary": "#21222c",
    "button": "#21222c"
  };

  @Event() modalClosed: EventEmitter<boolean>;
  
  close(): void {
    this.modalClosed.emit(true);
  }

  render() {
    return (
      <div class="overlay is-visible">
        <div class="modal-window">
          <div class="close" onClick={() => this.close()}>X</div>
          <div class="modal-window__content">
          {Object.keys(this._theme).map((color) =>
            <t-color-editor colorname={color} color={this._theme[color]}></t-color-editor>
          )}
          </div>
        </div>
      </div>
    );
  }

}
