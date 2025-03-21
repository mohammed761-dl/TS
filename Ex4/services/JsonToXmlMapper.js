"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonToXmlMapper = void 0;
var JsonToXmlMapper = /** @class */ (function () {
    function JsonToXmlMapper(rules) {
        this.rules = rules;
    }
    JsonToXmlMapper.prototype.transform = function (jsonData) {
        var xml = "<root>\n";
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (jsonData[rule.sourceField] !== undefined) {
                var transformedValue = rule.transform(jsonData[rule.sourceField]);
                xml += "  <".concat(rule.targetField, ">").concat(transformedValue, "</").concat(rule.targetField, ">\n");
            }
        }
        xml += "</root>";
        return xml;
    };
    return JsonToXmlMapper;
}());
exports.JsonToXmlMapper = JsonToXmlMapper;
