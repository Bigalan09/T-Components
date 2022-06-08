import { Component, Prop, h, Host, Listen, Element, Method } from '@stencil/core';

import classNames from 'classnames';

@Component({
  tag: 't-button',
  styleUrl: 't-button.css',
  shadow: true,
})
export class TButton {
  @Element() hostElement: HTMLElement;

  @Prop() size?: 'small' | 'large' = 'large';

  @Prop() variant?: string = 'primary';

  @Prop() disabled?: boolean = false;

  @Prop() type?: 'reset' | 'submit' | 'button';

  @Prop() name?: string;

  @Prop() value?: string;

  @Prop() href?: string;

  @Prop() target?: string = '_self';

  @Prop() innerTabindex?: number;

  private focusableElement: HTMLElement;

  @Listen('click', { capture: true })
  handleHostClick(event: Event) {
    if (this.disabled === true) {
      event.stopImmediatePropagation();
    }
  }

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  hasShadowDom(el: HTMLElement) {
    return !!el.shadowRoot && !!(el as any).attachShadow;
  }

  /**
   * Hack to make the button behave has expected when inside forms.
   * @see https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/button/button.tsx#L155-L175
   */
  handleClick = (ev: Event) => {
    if (this.hasShadowDom(this.hostElement)) {
      const form = this.hostElement.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        if (this.type) {
          fakeButton.type = this.type;
        }
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  render() {
    const basePart = classNames('base', this.variant && `variant-${this.variant}`, this.disabled && 'disabled');

    return (
      <Host>
        {this.href ? (
          <a
            ref={el => (this.focusableElement = el)}
            class={this.getCssClassMap()}
            href={this.href}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
            part={basePart}
            tabIndex={this.innerTabindex}
          >
            <slot />
          </a>
        ) : (
          <button
            ref={el => (this.focusableElement = el)}
            class={this.getCssClassMap()}
            onClick={this.handleClick}
            disabled={this.disabled}
            type={this.type}
            part={basePart}
            tabIndex={this.innerTabindex}
            name={this.name}
            value={this.value}
          >
            <slot />
          </button>
        )}
      </Host>
    );
  }

  getCssClassMap() {
    return classNames('button', this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.disabled && !this.href && `button--disabled`);
  }
}
