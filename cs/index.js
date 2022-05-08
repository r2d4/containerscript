"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RunOp = exports.Image = void 0;
var constructs_1 = require("constructs");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, undefined, '') || this;
    }
    Image.prototype.synth = function () {
        resolveDependencies(this);
    };
    Image.prototype.run = function (command) {
        console.log("Running command: ".concat(command));
        this.node.addDependency(command);
    };
    return Image;
}(constructs_1.Construct));
exports.Image = Image;
;
var RunOp = /** @class */ (function (_super) {
    __extends(RunOp, _super);
    function RunOp(scope, id) {
        return _super.call(this, scope, id) || this;
    }
    return RunOp;
}(constructs_1.Construct));
exports.RunOp = RunOp;
function resolveDependencies(app) {
    var deps = [];
    for (var _i = 0, _a = app.node.findAll(); _i < _a.length; _i++) {
        var child = _a[_i];
        for (var _b = 0, _c = child.node.dependencies; _b < _c.length; _b++) {
            var dep = _c[_b];
            deps.push({ source: child, target: dep });
        }
    }
    for (var _d = 0, deps_1 = deps; _d < deps_1.length; _d++) {
        var dep = deps_1[_d];
        // create explicit api object dependencies from implicit construct dependencies
        var targetApiObjects = constructs_1.Node.of(dep.target).findAll().filter(function (c) { return c; });
        var sourceApiObjects = constructs_1.Node.of(dep.source).findAll().filter(function (c) { return c; });
        for (var _e = 0, targetApiObjects_1 = targetApiObjects; _e < targetApiObjects_1.length; _e++) {
            var target = targetApiObjects_1[_e];
            for (var _f = 0, sourceApiObjects_1 = sourceApiObjects; _f < sourceApiObjects_1.length; _f++) {
                var source = sourceApiObjects_1[_f];
                if (target !== source) {
                    constructs_1.Node.of(source).addDependency(target);
                }
            }
        }
    }
    console.log(deps);
}
var img = new Image();
img.synth();
