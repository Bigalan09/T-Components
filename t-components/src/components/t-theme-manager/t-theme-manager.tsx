import { Component, Host, h, State, Listen, Method } from '@stencil/core';

@Component({
  tag: 't-theme-manager',
  styleUrl: 't-theme-manager.css',
  shadow: true,
})
export class TThemeManager {
  @State() isOpen: boolean = false;
  @State() _theme :any;
  
  private defultTheme: any = {
    "primarylight": "#7082b8",
    "primary": "#f8f8f2",
    "primarydark": "#ff79c6",
    "successlight": "#00ff00",
    "success": "#00cc00",
    "successdark": "#009900",
    "errorlight": "#fd4545",
    "error": "#ff2d2d",
    "errordark": "#c62424",
    "secondarylight": "#aaaaaa",
    "secondary": "#8be9fd",
    "secondarydark": "#666666",
    "warninglight": "#ffc281",
    "warning": "#ffb86c",
    "warningdark": "#e6a055",
    "infolight": "#a0a0ff",
    "info": "#7070ff",
    "infodark": "#4040ff",
    "welllight": "#44475a",
    "well": "#363948",
    "white": "#ffffff",
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

  @Method()
  async resetTheme() {
    localStorage.removeItem('theme-data');
    this._handleThemeUpdate();
  }

  @Listen('themeEdited')
  themeEdited(event: CustomEvent<any>) {
    const data = event.detail;
    localStorage.setItem('theme-data', JSON.stringify(data));

    this._handleThemeUpdate();
  }

  private _handleThemeUpdate() {
    let theme = this.defultTheme;
    if (localStorage.getItem('theme-data') !== null) {
      theme = JSON.parse(localStorage.getItem('theme-data'));
    }

    Object.keys(theme).forEach((name) => {
      document.documentElement.style.setProperty(`--color-${name}`, theme[name]) ;
    });
    this._theme = theme;
  }

  render() {
    return <Host>
      <slot></slot>
      <t-theme-editor theme={this._theme} isOpen={this.isOpen}></t-theme-editor>
    </Host>;
  }
}
