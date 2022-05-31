/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TContainer {
    }
    interface TDisplay {
    }
    interface TMenu {
    }
    interface TMenuItem {
        "header": boolean;
        "href": string;
    }
    interface TSidebar {
    }
    interface TThemeManager {
    }
}
declare global {
    interface HTMLTContainerElement extends Components.TContainer, HTMLStencilElement {
    }
    var HTMLTContainerElement: {
        prototype: HTMLTContainerElement;
        new (): HTMLTContainerElement;
    };
    interface HTMLTDisplayElement extends Components.TDisplay, HTMLStencilElement {
    }
    var HTMLTDisplayElement: {
        prototype: HTMLTDisplayElement;
        new (): HTMLTDisplayElement;
    };
    interface HTMLTMenuElement extends Components.TMenu, HTMLStencilElement {
    }
    var HTMLTMenuElement: {
        prototype: HTMLTMenuElement;
        new (): HTMLTMenuElement;
    };
    interface HTMLTMenuItemElement extends Components.TMenuItem, HTMLStencilElement {
    }
    var HTMLTMenuItemElement: {
        prototype: HTMLTMenuItemElement;
        new (): HTMLTMenuItemElement;
    };
    interface HTMLTSidebarElement extends Components.TSidebar, HTMLStencilElement {
    }
    var HTMLTSidebarElement: {
        prototype: HTMLTSidebarElement;
        new (): HTMLTSidebarElement;
    };
    interface HTMLTThemeManagerElement extends Components.TThemeManager, HTMLStencilElement {
    }
    var HTMLTThemeManagerElement: {
        prototype: HTMLTThemeManagerElement;
        new (): HTMLTThemeManagerElement;
    };
    interface HTMLElementTagNameMap {
        "t-container": HTMLTContainerElement;
        "t-display": HTMLTDisplayElement;
        "t-menu": HTMLTMenuElement;
        "t-menu-item": HTMLTMenuItemElement;
        "t-sidebar": HTMLTSidebarElement;
        "t-theme-manager": HTMLTThemeManagerElement;
    }
}
declare namespace LocalJSX {
    interface TContainer {
    }
    interface TDisplay {
    }
    interface TMenu {
    }
    interface TMenuItem {
        "header"?: boolean;
        "href"?: string;
    }
    interface TSidebar {
    }
    interface TThemeManager {
    }
    interface IntrinsicElements {
        "t-container": TContainer;
        "t-display": TDisplay;
        "t-menu": TMenu;
        "t-menu-item": TMenuItem;
        "t-sidebar": TSidebar;
        "t-theme-manager": TThemeManager;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "t-container": LocalJSX.TContainer & JSXBase.HTMLAttributes<HTMLTContainerElement>;
            "t-display": LocalJSX.TDisplay & JSXBase.HTMLAttributes<HTMLTDisplayElement>;
            "t-menu": LocalJSX.TMenu & JSXBase.HTMLAttributes<HTMLTMenuElement>;
            "t-menu-item": LocalJSX.TMenuItem & JSXBase.HTMLAttributes<HTMLTMenuItemElement>;
            "t-sidebar": LocalJSX.TSidebar & JSXBase.HTMLAttributes<HTMLTSidebarElement>;
            "t-theme-manager": LocalJSX.TThemeManager & JSXBase.HTMLAttributes<HTMLTThemeManagerElement>;
        }
    }
}
