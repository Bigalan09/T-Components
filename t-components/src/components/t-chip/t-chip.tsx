import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 't-chip',
  styleUrl: 't-chip.css',
  shadow: true,
})
export class TChip {

  @Prop()
    id: string;

    @Prop()
    image: string;

    @Prop()
    text: string;

    @Prop()
    closeable: boolean = false;

    @Event({ eventName: 'chip-close' })
    close: EventEmitter;

    onClose() {
        const event: any = {
            text: this.text,
            closeable: this.closeable,
            id: this.id
        };

        this.close.emit(event);
    }

    render() {
        const close = (() => {
            if (this.closeable) {
                return <span class="chip-close" onClick={this.onClose.bind(this)}>&#x2716;</span>;
            }
        })();

        const chipClasses = {
            'chip': true
        };

        return (
            <div class={chipClasses}>
                <span class="chip-text">{this.text}</span>
                {close}
            </div>
        );
    }

}
