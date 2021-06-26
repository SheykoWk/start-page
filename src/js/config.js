class Config {
  defaults = {
    crypto: {
      currency: 'USD',
      coin: 'ETH'
    },
    temperature: {
      location: 'New York',
      scale: 'C'
    }
  };

  constructor (config) {
    this.autoConfig(config);
    this.save();

    return new Proxy(this, {
      ...this,
      __proto__: this.__proto__,
      set(target, prop, value) {
        return this.settingUpdatedCallback(target, prop, value);
      }
    });
  }

  settingUpdatedCallback(target, prop, val) {
    if (!(prop in target)) return false;

    Reflect.set(target, prop, val);
    Object.assign(this, target);

    this.save();

    return true;
  }

  autoConfig(config) {
    Object.keys(this.defaults).forEach(setting => {
      if (setting in config)
        this[setting] = config[setting];
      else
        if (this.inStorage(setting))
          this[setting] = this.getStorageValue(setting);
        else
          this[setting] = this.defaults[setting];
    });
  }

  toJSON() {
    return { ...this, defaults: undefined };
  }

  // TODO: move to storage.js
  getStorageValue(prop) {
    return JSON.parse(localStorage.config)[prop] || this.defaults[prop];
  }

  // TODO: move to storage.js
  inStorage(value) {
    return value in JSON.parse(localStorage.config);
  }

  // TODO: move to storage.js
  save() {
    localStorage.config = JSON.stringify(this);
  }
}
