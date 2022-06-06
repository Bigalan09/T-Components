import { Component, h, Prop, Listen, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 't-menu-item',
  styleUrl: 't-menu-item.css',
  shadow: true,
})
export class TMenuItem {

  @Element()
  el: HTMLElement;

  @Prop()
  header:boolean;

  @Prop()
  href:string;

  @Event({eventName: 'menuItemClicked'}) menuItemClicked: EventEmitter<void>;

  @Listen('click', { capture: true })
  private onClick(_event) {
    if (this.href) {
      window.location.href = this.href;
    } else {
      this.menuItemClicked.emit();
    }
  }

  render() {
    return (
      <div class="item" data-header={this.header}>
        <a><span><slot></slot></span></a>
      </div>
    );
  }

}
