import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 't-sidebar',
  styleUrl: 't-sidebar.css',
  shadow: true,
})
export class TSidebar {

  @State()
  private open:boolean = true;

  private onClick() {
    this.open = !this.open;
  }
  
  render() {
    return (
      <Host
        aria-hidden={this.open ? 'false' : 'true'}
        style={{
          'width': this.open ? "13vw" : "auto"
        }}>
        <h1 onClick={() => this.onClick()}>{this.open ? "T-Components" : ">" }</h1>
        {this.open ? <slot></slot> : <strong></strong> }
      </Host>
    );
  }

}
