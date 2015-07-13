define(function () {
    var Dictionary = function (text) {
        this._text = text;
    };

    Dictionary.prototype.get = function (key) {
        var current = this._text;
        key = key.split(".");
        if (typeof key[0] === 'string') {
            var match = false;
            var keyCount = 0;
            while (typeof key[keyCount] !== 'undefined') {
                if (typeof current[key[keyCount]] !== 'undefined') {
                    match = current[key[keyCount]];
                    current = current[key[keyCount]];
                    keyCount++;
                } else {
                    match = false;
                    break;
                }
            }
            if (match !== false) {
                return match;
            }
        }
        return null;
    };

    return Dictionary;
});
