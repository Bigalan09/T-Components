import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 't-modal',
  styleUrl: 't-modal.css',
  shadow: true,
})
export class TModal {

  @Prop({mutable: true, reflect: true})
  isOpen: boolean = false;

  @Event() modalClosed: EventEmitter<boolean>;
  
  close(): void {
    this.isOpen = false;
    this.modalClosed.emit(true);
  }

  render() {
    return (
      <div class={{
        'overlay': true,
        'is-visible': this.isOpen
      }}>
        <div class="modal">
          <div class="close" onClick={() => this.close()}>
            &#x2716;
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }

}
