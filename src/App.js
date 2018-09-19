Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const View1_1 = require("./View1");
const View2_1 = require("./View2");
class AppComponent extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement("h1", null, "Hello React TS World!!")),
            React.createElement(View1_1.default, null),
            React.createElement(View2_1.default, null)));
    }
}
exports.default = AppComponent;
