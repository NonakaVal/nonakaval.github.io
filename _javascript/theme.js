/**
 * Theme management class
 *
 * To reduce flickering during page load, this script should be loaded synchronously.
 */
class Theme {
  static #modeKey = 'mode';
  static #modeAttr = 'data-mode';
  static switchable = !document.documentElement.hasAttribute(this.#modeAttr);

  static get DARK() {
    return 'dark';
  }

  static get LIGHT() {
    return 'light';
  }

  /**
   * @returns {string} Theme mode identifier
   */
  static get ID() {
    return 'theme-mode';
  }

  /**
   * Gets the current visual state of the theme.
   *
   * @returns {string} The current visual state, either the manually set mode,
   *                   or the default ('dark').
   */
  static get visualState() {
    if (this.#hasMode) {
      return this.#mode;
    } else {
      return this.DARK;
    }
  }

  static get #mode() {
    return (
      sessionStorage.getItem(this.#modeKey) ||
      document.documentElement.getAttribute(this.#modeAttr)
    );
  }

  static get #isDarkMode() {
    return this.#mode === this.DARK;
  }

  static get #hasMode() {
    return this.#mode !== null;
  }

  /**
   * Maps theme modes to provided values
   * @param {string} light Value for light mode
   * @param {string} dark Value for dark mode
   * @returns {Object} Mapped values
   */
  static getThemeMapper(light, dark) {
    return {
      [this.LIGHT]: light,
      [this.DARK]: dark
    };
  }

  /**
   * Initializes the theme based on the stored mode (defaults to dark)
   */
  static init() {
    if (!this.switchable) {
      return;
    }

    if (!this.#hasMode) {
      return;
    }

    if (this.#isDarkMode) {
      this.#setDark();
    } else {
      this.#setLight();
    }
  }

  /**
   * Flips the current theme mode
   */
  static flip() {
    if (this.#hasMode) {
      this.#clearMode();
    } else {
      this.#setLight();
    }
    this.#notify();
  }

  static #setDark() {
    document.documentElement.setAttribute(this.#modeAttr, this.DARK);
    sessionStorage.setItem(this.#modeKey, this.DARK);
  }

  static #setLight() {
    document.documentElement.setAttribute(this.#modeAttr, this.LIGHT);
    sessionStorage.setItem(this.#modeKey, this.LIGHT);
  }

  static #clearMode() {
    document.documentElement.removeAttribute(this.#modeAttr);
    sessionStorage.removeItem(this.#modeKey);
  }

  /**
   * Notifies other plugins that the theme mode has changed
   */
  static #notify() {
    window.postMessage({ id: this.ID }, '*');
  }
}

Theme.init();

export default Theme;
