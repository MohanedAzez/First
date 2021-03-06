"use strict";

exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(require("./container"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Selector =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Selector, _Container);

  function Selector(opts) {
    var _this;

    _this = _Container.call(this, opts) || this;
    _this.type = _types.SELECTOR;
    return _this;
  }

  return Selector;
}(_container.default);

exports.default = Selector;
module.exports = exports.default;