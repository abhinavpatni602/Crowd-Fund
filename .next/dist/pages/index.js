'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\abhin\\Desktop\\BlockChain\\kickstarter\\pages\\index.js?entry';


var index = function (_Component) {
    (0, _inherits3.default)(index, _Component);

    function index() {
        (0, _classCallCheck3.default)(this, index);

        return (0, _possibleConstructorReturn3.default)(this, (index.__proto__ || (0, _getPrototypeOf2.default)(index)).apply(this, arguments));
    }

    (0, _createClass3.default)(index, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: 'campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Campaign', primary: true, icon: 'add circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return index;
}(_react.Component);

exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsImluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7Ozs7OztJLEFBRUU7Ozs7Ozs7Ozs7OzBDQU9DLEFBQ2Q7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQVksQUFDaEQ7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUFzQztBQUF0QztxQkFBQSxrQkFBc0MsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUZoRCxBQUVVLEFBQXNDLEFBQ25EOzJCQUhKLEFBQU8sQUFHRyxBQUViO0FBTFUsQUFDSDtBQUZSLEFBQWMsQUFRZCxhQVJjOztpREFRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ1Q7bUNBQ0UsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNFO0FBREY7QUFBQSwrQkFDRSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFERixBQUNFLEFBQ0EsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLFNBQXhCLEFBQWdDLG1CQUFrQixTQUFsRCxNQUEwRCxNQUExRCxBQUErRDs4QkFBL0Q7Z0NBSkYsQUFFRSxBQUNBLEFBQ0EsQUFHQztBQUhEO3VCQU5KLEFBQ0UsQUFDQSxBQU9HLEFBQUssQUFJWDs7Ozs7Ozs7Ozs7O3VDQTlCNkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCLEFBQWhCLEFBQXVDOztpQ0FBekQ7QTtpRUFDQyxFQUFDLFcsQUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBSm9COztrQixBQUFkIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FiaGluL0Rlc2t0b3AvQmxvY2tDaGFpbi9raWNrc3RhcnRlciJ9