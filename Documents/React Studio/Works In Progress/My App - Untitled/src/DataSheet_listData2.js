
export default class DataSheet_listData2 {
  constructor() {
    this.items = [];
    this.requestedKeyPath = '';

    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['column 1'] = "Row 1";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['column 1'] = "Row 2";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['column 1'] = "Row 3";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['column 1'] = "Row 4";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['column 1'] = "Row 5";
  }

  addItem = (item) => {
    let key = 1;
    if (this.items.length > 0) {
      key += this.items[this.items.length - 1].key;
    }
    item.key = key;
    this.items.push(item);
  }

  loadFromJson = (json) => {
    function setupArrayKeys(json) {
      // for an array, ensure that items have a key (this is required by React)
      for (var i = 0; i < json.length; i++) {
        if (json[i].key === undefined)
          json[i].key = i;
      }
    }

    if (Array.isArray(json)) {
      // for an array, ensure that items have a key (this is required by React)
      for (var i = 0; i < json.length; i++) {
        if (json[i].key === undefined)
          json[i].key = i;
      }
      setupArrayKeys(json);
      this.items = json;
    }
    else if (json) {
      // if we received a single JSON object, set it as the first row in the sheet.
      // if there's a keypath specified, look up that first.
      var keyPath = this.requestedKeyPath;
      if ( !keyPath || keyPath.length < 1) {
        if ( !json.key) json.key = 0;
        this.items = [ json ];
      } else {
        // look for the requested key path within this object
        var pathComps = keyPath.split('.');
        for (var comp of pathComps) {
          if ( !json.hasOwnProperty(comp)) break;
          json = json[comp];
        }
        if (Array.isArray(json)) {
          setupArrayKeys(json);
          this.items = json;
        } else {
          if ( !json.key) json.key = 0;
          this.items = [ json ];
        }
      }
    }
    else {
      this.items = [];
    }
  }
}
