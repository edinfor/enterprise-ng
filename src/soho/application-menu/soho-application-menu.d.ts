/**
 * Soho Application Menu.
 *
 * This file contains the Typescript mappings for the public
 * interface of the Soho jQuery applicationmenu control.
 */

/**
 * Application Menu Options
 */
type SohoApplicationMenuOptionsBreakPoint = 'phablet' | 'tablet' | 'desktop' | 'large';

interface SohoApplicationMenuOptions {
  /** Defines the point at which the application should be displayed - depends on device. */
  breakpoint: SohoApplicationMenuOptionsBreakPoint;

  /** Open the menu when the screen width is larger that the breakpoint. */
  openOnLarge: boolean;

  /** The controls which can trigger the display state of the application menu. */
  triggers: any[];
}

/**
 * Application Menu Api
 */
interface SohoApplicationMenuStatic {
  /**
   * Opens the application menu.
   *
   * param noFocus - if set the current focus is not modified.
   */
  openMenu(noFocus?: boolean): void;

  /**
   * Closes the application menu.
   */
  closeMenu():void;

  /**
   * Add and remove application nav menu triggers.
   *
   * @param triggers - list of triggers
   * @param remove - if set the the triggers will be removed.
   * @param norebuild - if set this control's events won't automatically be rebound to include
   *                    the new triggers.
   */
  modifyTriggers(triggers: any[], remove: boolean, norebusild: boolean): void;

  /**
   * Updates the control based on the new settings.
   */
  updated(): void;
}

interface JQueryStatic {
  applicationmenu: SohoApplicationMenuStatic;
}

interface JQuery {
  applicationmenu(options?: SohoApplicationMenuOptions): JQuery;
}
