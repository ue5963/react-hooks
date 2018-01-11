
export default class DataSheet_localizationSheet {
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
    item['key'] = "start_textblock_820492";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_textblock_313235";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_textblock_1044042";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "start_textblock_303115";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "listitem1_textblock_110732";
    item['en'] = "タイトル";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "listitem1_textblock2_983025";
    item['en'] = "内容が入ります";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "listitem1_button_106001";
    item['en'] = "New button";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "listitem1_textblock3_156161";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "listitem2_button_200599";
    item['en'] = "New button";
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

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }
}
