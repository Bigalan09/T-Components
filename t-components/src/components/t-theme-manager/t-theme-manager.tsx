import { Component, Host, h, State, Listen, Method } from '@stencil/core';

@Component({
  tag: 't-theme-manager',
  styleUrl: 't-theme-manager.css',
  shadow: true,
})
export class TThemeManager {
  @State() isOpen: boolean = false;
  @State() theme: any = {
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

  @Listen('modalClosed')
  handleClick() {
    this.isOpen = !this.isOpen;
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  componentWillLoad() {
    this._handleThemeUpdate();
  }

  @Listen('themeEdited')
  themeEdited(event: CustomEvent<any>) {
    const data = event.detail;
    this.theme = data;

    localStorage.setItem('theme-data', JSON.stringify(this.theme));

    this._handleThemeUpdate();
  }

  private _handleThemeUpdate() {
    let theme = this.theme;
    if (localStorage.getItem('theme-data') !== null) {
      theme = JSON.parse(localStorage.getItem('theme-data'));
    }

    Object.keys(theme).forEach((name) => {
      document.documentElement.style.setProperty(`--color-${name}`, theme[name]) ;
    });
    this.theme = theme;
  }

  render() {
    return <Host>
      <slot></slot>
      <t-theme-editor theme={this.theme} isOpen={this.isOpen}></t-theme-editor>
    </Host>;
  }
}
