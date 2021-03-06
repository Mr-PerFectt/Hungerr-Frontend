(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\KitchenStory_Frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "50+E":
    /*!************************************************!*\
      !*** ./src/app/pages/order/order.component.ts ***!
      \************************************************/

    /*! exports provided: OrderComponent */

    /***/
    function E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
        return OrderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/order.service */
      "kVqo");
      /* harmony import */


      var _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../enum/OrderStatus */
      "uC4g");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../parts/pagination/pagination.component */
      "r8It");

      function OrderComponent_tr_24_a_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/order/", order_r1.orderId, "");
        }
      }

      function OrderComponent_tr_24_a_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_24_a_21_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.cancel(order_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderComponent_tr_24_a_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tr_24_a_22_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.finish(order_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrderComponent_tr_24_a_20_Template, 2, 1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrderComponent_tr_24_a_21_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderComponent_tr_24_a_22_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r1.orderId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.buyerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.buyerEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.buyerPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.buyerAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, order_r1.orderAmount));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, order_r1.createTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.OrderStatus[order_r1.orderStatus]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.currentUser.role == ctx_r0.Role.Customer && ctx_r0.currentUser.name == order_r1.buyerEmail));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r1.orderStatus == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.role != ctx_r0.Role.Customer && order_r1.orderStatus == 0);
        }
      }

      var OrderComponent = /*#__PURE__*/function () {
        function OrderComponent(httpClient, orderService, userService, route) {
          _classCallCheck(this, OrderComponent);

          this.httpClient = httpClient;
          this.orderService = orderService;
          this.userService = userService;
          this.route = route;
          this.OrderStatus = _enum_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"];
          this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_6__["Role"];
        }

        _createClass(OrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = this.userService.currentUserValue;
            this.querySub = this.route.queryParams.subscribe(function () {
              _this.update();
            });
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            var nextPage = 1;
            var size = 10;

            if (this.route.snapshot.queryParamMap.get('page')) {
              nextPage = +this.route.snapshot.queryParamMap.get('page');
              size = +this.route.snapshot.queryParamMap.get('size');
            }

            this.orderService.getPage(nextPage, size).subscribe(function (page) {
              return _this2.page = page;
            }, function (_) {
              console.log("Get Orde Failed");
            });
          }
        }, {
          key: "cancel",
          value: function cancel(order) {
            this.orderService.cancel(order.orderId).subscribe(function (res) {
              if (res) {
                order.orderStatus = res.orderStatus;
              }
            });
          }
        }, {
          key: "finish",
          value: function finish(order) {
            this.orderService.finish(order.orderId).subscribe(function (res) {
              if (res) {
                order.orderStatus = res.orderStatus;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.querySub.unsubscribe();
          }
        }]);

        return OrderComponent;
      }();

      OrderComponent.ɵfac = function OrderComponent_Factory(t) {
        return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderComponent,
        selectors: [["app-order"]],
        decls: 26,
        vars: 2,
        consts: [["align", "center", 1, "display-4", "mb-5"], [1, "table", "table-striped", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "currentPage"], ["scope", "row", 1, "align-middle"], [1, "align-middle"], ["style", "display:\n            block", "href", "", 3, "routerLink", 4, "ngIf"], ["style", "display: block", "routerLink", "./", 3, "click", 4, "ngIf"], ["href", "", 2, "display", "block", 3, "routerLink"], ["routerLink", "./", 2, "display", "block", 3, "click"]],
        template: function OrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order #");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customer Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customer phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipping Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderComponent_tr_24_Template, 23, 15, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-pagination", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.page == null ? null : ctx.page.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx.page);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6pVG":
    /*!**********************************************************!*\
      !*** ./src/app/parts/navigation/navigation.component.ts ***!
      \**********************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function pVG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavigationComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Meals ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Wraps ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Deserts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Drink ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavigationComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          logout: true
        };
      };

      function NavigationComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Orders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_container_9_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sign Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function NavigationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(userService, router) {
          _classCallCheck(this, NavigationComponent);

          this.userService = userService;
          this.router = router;
          this.root = '/';
          this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_3__["Role"];
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.name$ = this.userService.name$.subscribe(function (aName) {
              return _this3.name = aName;
            });
            this.currentUserSubscription = this.userService.currentUser.subscribe(function (user) {
              _this3.currentUser = user;

              if (!user || user.role == _enum_Role__WEBPACK_IMPORTED_MODULE_3__["Role"].Customer) {
                _this3.root = '/';
              } else {
                _this3.root = '/seller';
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.currentUserSubscription.unsubscribe(); // this.name$.unsubscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.logout(); // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        decls: 12,
        vars: 5,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 3, "routerLink"], ["src", "/assets/brand.png", "width", "125", "alt", "", 1, "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item nav-link ", "routerLink", "/cart", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noUser", ""], [1, "navbar-nav"], ["routerLink", "/category/0", 1, "nav-item", "nav-link"], ["routerLink", "/category/1", 1, "nav-item", "nav-link"], ["routerLink", "/category/2", 1, "nav-item", "nav-link"], ["routerLink", "/category/3", 1, "nav-item", "nav-link"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fas", "fa-shopping-cart"], ["routerLink", "/order", 1, "nav-item", "nav-link"], [1, "fas", "fa-list-ul"], ["routerLink", "/profile", 1, "nav-item", "nav-link"], ["routerLink", "/login", 1, "nav-item", "nav-link", 3, "queryParams", "click"], ["routerLink", "/login", 1, "nav-item", "nav-link"], ["routerLink", "/register", 1, "nav-item", "nav-link"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationComponent_div_6_Template, 9, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_a_8_Template, 3, 0, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavigationComponent_ng_container_9_Template, 8, 3, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_ng_template_10_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.root);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser || ctx.currentUser.role == ctx.Role.Customer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser || ctx.currentUser.role == ctx.Role.Customer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r3);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9xKv":
    /*!**************************************************************!*\
      !*** ./src/app/pages/product-edit/product-edit.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProductEditComponent */

    /***/
    function xKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
        return ProductEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_productInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/productInfo */
      "guck");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductEditComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductEditComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_div_11_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      function ProductEditComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductEditComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_div_21_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
        }
      }

      function ProductEditComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductEditComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_div_43_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
        }
      }

      function ProductEditComponent_div_49_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stock is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductEditComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductEditComponent_div_49_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
        }
      }

      var ProductEditComponent = /*#__PURE__*/function () {
        function ProductEditComponent(productService, route, router) {
          _classCallCheck(this, ProductEditComponent);

          this.productService = productService;
          this.route = route;
          this.router = router;
          this.product = new _models_productInfo__WEBPACK_IMPORTED_MODULE_1__["ProductInfo"]();
          this.isEdit = false;
        }

        _createClass(ProductEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.productId = this.route.snapshot.paramMap.get('id');

            if (this.productId) {
              this.isEdit = true;
              this.productService.getDetail(this.productId).subscribe(function (prod) {
                return _this4.product = prod;
              });
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this5 = this;

            this.productService.update(this.product).subscribe(function (prod) {
              if (!prod) throw new Error();

              _this5.router.navigate(['/seller']);
            }, function (err) {});
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.productId) {
              this.update();
            } else {
              this.add();
            }
          }
        }, {
          key: "add",
          value: function add() {
            var _this6 = this;

            this.productService.create(this.product).subscribe(function (prod) {
              if (!prod) throw new Error();

              _this6.router.navigate(['/']);
            }, function (e) {});
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            console.log(this.product);
          }
        }]);

        return ProductEditComponent;
      }();

      ProductEditComponent.ɵfac = function ProductEditComponent_Factory(t) {
        return new (t || ProductEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ProductEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductEditComponent,
        selectors: [["app-product-edit"]],
        decls: 61,
        vars: 21,
        consts: [["align", "center", 1, "display-4", "mb-5"], [2, "width", "40%", "margin", "25px auto"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "productId"], ["type", "text", "id", "productId", "name", "productId", "required", "", 1, "form-control", "form-control-lg", 3, "readOnly", "disabled", "ngModel", "ngModelChange"], ["productIdInput", "", "productId", "ngModel"], [4, "ngIf"], ["type", "text", "id", "productIcon", "name", "productIcon", "placeholder", "Photo", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "productName", "name", "productName", "placeholder", "Name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productName", "ngModel"], ["for", "categoryType"], ["id", "categoryType", "name", "categoryType", "required", "", 1, "custom-select", "custom-select-lg", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["id", "productDescription", "name", "productDescription", "placeholder", "Description", 1, "form-control", "form-control-lg", "text-left", 3, "ngModel", "ngModelChange"], ["for", "productPrice"], ["type", "number", "id", "productPrice", "name", "productPrice", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productPrice", "ngModel"], ["for", "productStock"], ["type", "number", "id", "productStock", "name", "productStock", "min", "0", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productStock", "ngModel"], ["for", "productStatus"], ["id", "productStatus", "name", "productStatus", "required", "", 1, "custom-select", "custom-select-lg", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"]],
        template: function ProductEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductEditComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.product.productId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductEditComponent_div_11_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Photo Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.product.productIcon = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.product.productName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductEditComponent_div_21_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_select_ngModelChange_25_listener($event) {
              return ctx.product.categoryType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Books");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Food");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Clothes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Drink");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_textarea_ngModelChange_37_listener($event) {
              return ctx.product.productDescription = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.product.productPrice = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductEditComponent_div_43_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Stock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.product.productStock = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProductEditComponent_div_49_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductEditComponent_Template_select_ngModelChange_53_listener($event) {
              return ctx.product.productStatus = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Unavailable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx.isEdit)("disabled", ctx.isEdit)("ngModel", ctx.product.productId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.categoryType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productPrice);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productStock);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product.productStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-edit',
            templateUrl: './product-edit.component.html',
            styleUrls: ['./product-edit.component.css']
          }]
        }], function () {
          return [{
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, apiUrl */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiUrl", function () {
        return apiUrl;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      var apiUrl = '//54.82.17.114:8888/api';
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function LoginComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username and password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have been logged out. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(userService, router, route) {
          _classCallCheck(this, LoginComponent);

          this.userService = userService;
          this.router = router;
          this.route = route;
          this.submitted = false;
          this.model = {
            username: '',
            password: '',
            remembered: false
          };
          this.returnUrl = '/';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var params = this.route.snapshot.queryParamMap;
            this.isLogout = params.has('logout');
            this.returnUrl = params.get('returnUrl');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            this.submitted = true;
            console.log(this.model);
            this.userService.login(this.model).subscribe(function (user) {
              if (user) {
                if (user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_3__["Role"].Customer) {
                  _this7.returnUrl = '/seller';
                }

                _this7.router.navigateByUrl(_this7.returnUrl);
              } else {
                _this7.isLogout = false;
                _this7.isInvalid = true;
              }
            });
          }
        }, {
          key: "fillLoginFields",
          value: function fillLoginFields(u, p) {
            this.model.username = u;
            this.model.password = p;
            this.onSubmit();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 34,
        vars: 8,
        consts: [["align", "center", 1, "display-4", "mb-5"], [2, "width", "40%", "margin", "25px auto"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "text", "id", "email", "name", "email", "placeholder", "Enter email", "required", "", "autofocus", "", "autocomplete", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "password", "id", "password", "name", "password", "autocomplete", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "remember_me", "name", "remember-me", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "remember_me", 1, "form-check-label"], [1, "form-check-lable", "float-right", "mb-3"], ["routerLink", "/register", 1, "float-right"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-info"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.model.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Email is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.model.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Password is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.model.remembered = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Don't have an account yet? \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.remembered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.form.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_productInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/productInfo */
      "guck");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.productUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/product");
          this.categoryUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/category");
        }

        _createClass(ProductService, [{
          key: "getAllInPage",
          value: function getAllInPage(page, size) {
            var url = "".concat(this.productUrl, "?page=").concat(page, "&size=").concat(size);
            return this.http.get(url).pipe();
          }
        }, {
          key: "getCategoryInPage",
          value: function getCategoryInPage(categoryType, page, size) {
            var url = "".concat(this.categoryUrl, "/").concat(categoryType, "?page=").concat(page, "&size=").concat(size);
            return this.http.get(url).pipe();
          }
        }, {
          key: "getSearchInPage",
          value: function getSearchInPage(productName, page, size) {
            var url = "".concat(this.categoryUrl, "/search/").concat(productName, "?page=").concat(page, "&size=").concat(size);
            return this.http.get(url).pipe();
          }
        }, {
          key: "getDetail",
          value: function getDetail(id) {
            var url = "".concat(this.productUrl, "/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_) {
              console.log("Get Detail Failed");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _models_productInfo__WEBPACK_IMPORTED_MODULE_4__["ProductInfo"]());
            }));
          }
        }, {
          key: "update",
          value: function update(productInfo) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/seller/product/").concat(productInfo.productId, "/edit");
            return this.http.put(url, productInfo);
          }
        }, {
          key: "create",
          value: function create(productInfo) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/seller/product/new");
            return this.http.post(url, productInfo);
          }
        }, {
          key: "delelte",
          value: function delelte(productInfo) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/seller/product/").concat(productInfo.productId, "/delete");
            return this.http["delete"](url);
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error); // log to console instead
              // Let the app keep running by returning an empty result.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
            };
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HucY":
    /*!******************************!*\
      !*** ./src/app/enum/Role.ts ***!
      \******************************/

    /*! exports provided: Role */

    /***/
    function HucY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });

      var Role;

      (function (Role) {
        Role["Customer"] = "ROLE_CUSTOMER";
        Role["Employee"] = "ROLE_EMPLOYEE";
        Role["Manager"] = "ROLE_MANAGER";
      })(Role || (Role = {}));
      /***/

    },

    /***/
    "O7F/":
    /*!**********************************************************!*\
      !*** ./src/app/_interceptors/jwt-interceptor.service.ts ***!
      \**********************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function O7F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(userService) {
          _classCallCheck(this, JwtInterceptor);

          this.userService = userService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add authorization header with jwt token if available
            var currentUser = this.userService.currentUserValue;

            if (currentUser && currentUser.token) {
              request = request.clone({
                setHeaders: {
                  Authorization: "".concat(currentUser.type, " ").concat(currentUser.token),
                  'Content-Type': 'application/json'
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PSoG":
    /*!***************************************!*\
      !*** ./src/app/_guards/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PSoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, userService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.userService.currentUserValue;

            if (currentUser) {
              // check if route is restricted by role
              if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                console.log(currentUser.role + "fail in " + route.data.roles); // role not authorised so redirect to home page

                this.router.navigate(['/']);
                return false;
              } // authorised so return true


              return true;
            }

            console.log("Need log in"); // not logged in so redirect to login page with the return url{queryParams: {returnUrl: state.url}}

            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./parts/navigation/navigation.component */
      "6pVG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Hungerr';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 14,
        vars: 0,
        consts: [[1, "container"], [1, "text-center"], ["href", "https://github.com/Mr-PerFectt", 2, "color", "inherit"], [1, "fab", "fa-github", "fa-3x"], [1, "footer-copyright", "py-3", "text-center"], ["href", "https://mrperfect.ml/"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA9 2020 Copyright: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mr. Perfect ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YVnc":
    /*!**************************************!*\
      !*** ./src/app/enum/CategoryType.ts ***!
      \**************************************/

    /*! exports provided: CategoryType */

    /***/
    function YVnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryType", function () {
        return CategoryType;
      });

      var CategoryType;

      (function (CategoryType) {
        CategoryType[CategoryType["Books"] = 0] = "Books";
        CategoryType[CategoryType["Food"] = 1] = "Food";
        CategoryType[CategoryType["Clothes"] = 2] = "Clothes";
        CategoryType[CategoryType["Drink"] = 3] = "Drink";
      })(CategoryType || (CategoryType = {}));
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./parts/navigation/navigation.component */
      "6pVG");
      /* harmony import */


      var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/card/card.component */
      "c7Ye");
      /* harmony import */


      var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parts/pagination/pagination.component */
      "r8It");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/product-detail/detail.component */
      "x1/t");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/cart/cart.component */
      "sHrM");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-cookie-service */
      "6trp");
      /* harmony import */


      var _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./_interceptors/error-interceptor.service */
      "yZyG");
      /* harmony import */


      var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./_interceptors/jwt-interceptor.service */
      "O7F/");
      /* harmony import */


      var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/order/order.component */
      "50+E");
      /* harmony import */


      var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/order-detail/order-detail.component */
      "nunT");
      /* harmony import */


      var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/product-list/product.list.component */
      "ha/6");
      /* harmony import */


      var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/user-edit/user-detail.component */
      "cKaa");
      /* harmony import */


      var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/product-edit/product-edit.component */
      "9xKv");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _pages_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"], _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"], _pages_order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"], _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailComponent"], _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"], _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_19__["UserDetailComponent"], _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _parts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _pages_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"], _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"], _pages_order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"], _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailComponent"], _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"], _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_19__["UserDetailComponent"], _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_20__["ProductEditComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "6trp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.service */
      "qfBg");

      var CartService = /*#__PURE__*/function () {
        function CartService(http, cookieService, userService) {
          var _this8 = this;

          _classCallCheck(this, CartService);

          this.http = http;
          this.cookieService = cookieService;
          this.userService = userService;
          this.cartUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/cart");
          this.localMap = {};
          this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.items = this.itemsSubject.asObservable();
          this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.total = this.totalSubject.asObservable();
          this.userService.currentUser.subscribe(function (user) {
            return _this8.currentUser = user;
          });
        }

        _createClass(CartService, [{
          key: "getLocalCart",
          value: function getLocalCart() {
            if (this.cookieService.check('cart')) {
              this.localMap = JSON.parse(this.cookieService.get('cart'));
              return Object.values(this.localMap);
            } else {
              this.localMap = {};
              return [];
            }
          }
        }, {
          key: "getCart",
          value: function getCart() {
            var _this9 = this;

            var localCart = this.getLocalCart();

            if (this.currentUser) {
              if (localCart.length > 0) {
                return this.http.post(this.cartUrl, localCart).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) {
                  _this9.clearLocalCart();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (cart) {
                  return cart.products;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (_) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                }));
              } else {
                return this.http.get(this.cartUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (cart) {
                  return cart.products;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (_) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                }));
              }
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(localCart);
            }
          }
        }, {
          key: "addItem",
          value: function addItem(productInOrder) {
            if (!this.currentUser) {
              if (this.cookieService.check('cart')) {
                this.localMap = JSON.parse(this.cookieService.get('cart'));
              }

              if (!this.localMap[productInOrder.productId]) {
                this.localMap[productInOrder.productId] = productInOrder;
              } else {
                this.localMap[productInOrder.productId].count += productInOrder.count;
              }

              this.cookieService.set('cart', JSON.stringify(this.localMap));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
            } else {
              var url = "".concat(this.cartUrl, "/add");
              return this.http.post(url, {
                'quantity': productInOrder.count,
                'productId': productInOrder.productId
              });
            }
          }
        }, {
          key: "update",
          value: function update(productInOrder) {
            if (this.currentUser) {
              var url = "".concat(this.cartUrl, "/").concat(productInOrder.productId);
              return this.http.put(url, productInOrder.count);
            }
          }
        }, {
          key: "remove",
          value: function remove(productInOrder) {
            if (!this.currentUser) {
              delete this.localMap[productInOrder.productId];
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            } else {
              var url = "".concat(this.cartUrl, "/").concat(productInOrder.productId);
              return this.http["delete"](url).pipe();
            }
          }
        }, {
          key: "checkout",
          value: function checkout() {
            var url = "".concat(this.cartUrl, "/checkout");
            return this.http.post(url, null).pipe();
          }
        }, {
          key: "storeLocalCart",
          value: function storeLocalCart() {
            this.cookieService.set('cart', JSON.stringify(this.localMap));
          }
        }, {
          key: "clearLocalCart",
          value: function clearLocalCart() {
            console.log('clear local cart');
            this.cookieService["delete"]('cart');
            this.localMap = {};
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }, {
            type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "c7Ye":
    /*!**********************************************!*\
      !*** ./src/app/pages/card/card.component.ts ***!
      \**********************************************/

    /*! exports provided: CardComponent */

    /***/
    function c7Ye(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../parts/pagination/pagination.component */
      "r8It"); // import {prod, products} from '../shared/mockData';


      function CardComponent_div_3_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get It!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var productInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", productInfo_r1.productId, "");
        }
      }

      function CardComponent_div_3_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unavailable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stock: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CardComponent_div_3_a_21_Template, 2, 1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CardComponent_div_3_ng_template_22_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var productInfo_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", productInfo_r1.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", productInfo_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r1.productDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, productInfo_r1.productPrice, "INR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r1.productStock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", productInfo_r1.productStatus == 0)("ngIfElse", _r3);
        }
      }

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent(productService, route) {
          _classCallCheck(this, CardComponent);

          this.productService = productService;
          this.route = route;
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.querySub = this.route.queryParams.subscribe(function () {
              _this10.update();
            });
            this.paramSub = this.route.params.subscribe(function () {
              _this10.update();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.querySub.unsubscribe();
            this.paramSub.unsubscribe();
          }
        }, {
          key: "update",
          value: function update() {
            if (this.route.snapshot.queryParamMap.get('page')) {
              var currentPage = +this.route.snapshot.queryParamMap.get('page');
              var size = +this.route.snapshot.queryParamMap.get('size');
              this.getProds(currentPage, size);
            } else {
              this.getProds();
            }
          }
        }, {
          key: "getProds",
          value: function getProds() {
            var _this11 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

            if (this.route.snapshot.url.length == 1) {
              this.productService.getAllInPage(+page, +size).subscribe(function (page) {
                _this11.page = page;
                _this11.title = 'Its Hard To Spell When Your Hungry !';
              });
            } else {
              //  /category/:id
              var type = this.route.snapshot.url[1].path;
              this.productService.getCategoryInPage(+type, page, size).subscribe(function (categoryPage) {
                _this11.title = categoryPage.category;
                _this11.page = categoryPage.page;
              });
            }
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        decls: 5,
        vars: 3,
        consts: [["align", "center", 1, "display-4", "mb-5"], [1, "row", "card-deck", "text-center"], ["class", "col-lg-4 ", 4, "ngFor", "ngForOf"], [3, "currentPage"], [1, "col-lg-4"], [1, "card", "mb-4"], ["height", "50%", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "text-left"], [1, "card-test"], [1, "card-text"], ["class", "btn btn-primary btn-lg", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["offBlock", ""], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], [1, "btn", "btn-secondary", "btn-lg", "disabled"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 24, 11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pagination", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.page == null ? null : ctx.page.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx.page);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
          }]
        }], function () {
          return [{
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cKaa":
    /*!**********************************************************!*\
      !*** ./src/app/pages/user-edit/user-detail.component.ts ***!
      \**********************************************************/

    /*! exports provided: UserDetailComponent */

    /***/
    function cKaa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
        return UserDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/User */
      "vmXk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserDetailComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 3 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_16_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_div_16_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
        }
      }

      function UserDetailComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_23_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 3 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_23_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDetailComponent_div_23_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
        }
      }

      function UserDetailComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_30_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
        }
      }

      function UserDetailComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDetailComponent_div_37_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
        }
      }

      var UserDetailComponent = /*#__PURE__*/function () {
        function UserDetailComponent(userService, router) {
          _classCallCheck(this, UserDetailComponent);

          this.userService = userService;
          this.router = router;
          this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }

        _createClass(UserDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            var account = this.userService.currentUserValue.account;
            this.userService.get(account).subscribe(function (u) {
              _this12.user = u;
              _this12.user.password = '';
            }, function (e) {});
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            this.userService.update(this.user).subscribe(function (u) {
              _this13.userService.nameTerms.next(u.name);

              var url = '/';

              if (_this13.user.role != _enum_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].Customer) {
                url = '/seller';
              }

              _this13.router.navigateByUrl(url);
            }, function (_) {});
          }
        }]);

        return UserDetailComponent;
      }();

      UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
        return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserDetailComponent,
        selectors: [["app-user-detail"]],
        decls: 41,
        vars: 10,
        consts: [["align", "center", 1, "display-4", "mb-5"], [2, "width", "40%", "margin", "25px auto"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["readonly", "", "type", "email", "disabled", "", "id", "email", "name", "email", "placeholder", "Enter email", 1, "form-control", "form-control-lg", 3, "value"], ["type", "text", "id", "name", "name", "name", "placeholder", "Your name", "required", "", "autofocus", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "minlength", "3", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "text", "id", "phone", "name", "phone", "placeholder", "Phone", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "id", "address", "name", "address", "placeholder", "Address", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"]],
        template: function UserDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profiles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserDetailComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserDetailComponent_div_16_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserDetailComponent_div_23_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.user.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserDetailComponent_div_30_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.user.address = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserDetailComponent_div_37_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZWRpdC91c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-detail',
            templateUrl: './user-detail.component.html',
            styleUrls: ['./user-detail.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "guck":
    /*!***************************************!*\
      !*** ./src/app/models/productInfo.ts ***!
      \***************************************/

    /*! exports provided: ProductInfo */

    /***/
    function guck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductInfo", function () {
        return ProductInfo;
      });

      var ProductInfo = function ProductInfo(productInOrder) {
        _classCallCheck(this, ProductInfo);

        if (productInOrder) {
          this.productId = productInOrder.productId;
          this.productName = productInOrder.productName;
          this.productPrice = productInOrder.productPrice;
          this.productStock = productInOrder.productStock;
          this.productDescription = productInOrder.productDescription;
          this.productIcon = productInOrder.productIcon;
          this.categoryType = productInOrder.categoryType;
          this.productStatus = 0;
        } else {
          this.productId = '';
          this.productName = '';
          this.productPrice = 20;
          this.productStock = 100;
          this.productDescription = '';
          this.productIcon = '';
          this.categoryType = 0;
          this.productStatus = 0;
        }
      };
      /***/

    },

    /***/
    "ha/6":
    /*!**************************************************************!*\
      !*** ./src/app/pages/product-list/product.list.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProductListComponent */

    /***/
    function ha6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
        return ProductListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_CategoryType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../enum/CategoryType */
      "YVnc");
      /* harmony import */


      var _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../enum/ProductStatus */
      "prZG");
      /* harmony import */


      var _models_productInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../models/productInfo */
      "guck");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../parts/pagination/pagination.component */
      "r8It");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["class", "list"];

      function ProductListComponent_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_tr_25_a_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_tr_25_a_21_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInfo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.remove(ctx_r6.page.content, productInfo_r4.productId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductListComponent_tr_25_a_21_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var productInfo_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", productInfo_r4.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", productInfo_r4.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r4.productId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r4.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.CategoryType[productInfo_r4.categoryType]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r4.productDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, productInfo_r4.productPrice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInfo_r4.productStock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ProductStatus[productInfo_r4.productStatus]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/seller/product/", productInfo_r4.productId, "/edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.role) == ctx_r1.Role.Customer);
        }
      }

      function ProductListComponent_ng_template_27_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_ng_template_27_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_ng_template_27_div_15_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.required);
        }
      }

      function ProductListComponent_ng_template_27_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_ng_template_27_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_ng_template_27_div_25_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);
        }
      }

      function ProductListComponent_ng_template_27_div_47_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_ng_template_27_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_ng_template_27_div_47_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.errors.required);
        }
      }

      function ProductListComponent_ng_template_27_div_53_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stock is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProductListComponent_ng_template_27_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductListComponent_ng_template_27_div_53_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.errors.required);
        }
      }

      function ProductListComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Cuisine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_ng_template_27_Template_button_click_3_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductListComponent_ng_template_27_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.product.productId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductListComponent_ng_template_27_div_15_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Photo Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.product.productIcon = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.product.productName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductListComponent_ng_template_27_div_25_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.product.categoryType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Meals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Wraps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Desert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "textarea", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_textarea_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.product.productDescription = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.product.productPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProductListComponent_ng_template_27_div_47_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_input_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.product.productStock = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductListComponent_ng_template_27_div_53_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_ng_template_27_Template_select_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.product.productStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Unavailable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_ng_template_27_Template_button_click_63_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.close("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_ng_template_27_Template_button_click_66_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.close("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r3.isEdit)("disabled", ctx_r3.isEdit)("ngModel", ctx_r3.product.productId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.categoryType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.invalid && (_r16.dirty || _r16.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productStock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.product.productStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid);
        }
      }

      var ProductListComponent = /*#__PURE__*/function () {
        function ProductListComponent(userService, productService, route, router, modalService) {
          _classCallCheck(this, ProductListComponent);

          this.userService = userService;
          this.productService = productService;
          this.route = route;
          this.router = router;
          this.modalService = modalService;
          this.closeResult = '';
          this.product = new _models_productInfo__WEBPACK_IMPORTED_MODULE_6__["ProductInfo"]();
          this.isEdit = false;
          this.Role = _enum_Role__WEBPACK_IMPORTED_MODULE_7__["Role"];
          this.CategoryType = _enum_CategoryType__WEBPACK_IMPORTED_MODULE_4__["CategoryType"];
          this.ProductStatus = _enum_ProductStatus__WEBPACK_IMPORTED_MODULE_5__["ProductStatus"];
        }

        _createClass(ProductListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.querySub = this.route.queryParams.subscribe(function () {
              _this14.update();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.querySub.unsubscribe();
          }
        }, {
          key: "update",
          value: function update() {
            if (this.route.snapshot.queryParamMap.get('page')) {
              var currentPage = +this.route.snapshot.queryParamMap.get('page');
              var size = +this.route.snapshot.queryParamMap.get('size');
              this.getProds(currentPage, size);
            } else {
              this.getProds();
            }
          }
        }, {
          key: "getProds",
          value: function getProds() {
            var _this15 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            this.productService.getAllInPage(+page, +size).subscribe(function (page) {
              _this15.page = page;
            });
          }
        }, {
          key: "remove",
          value: function remove(productInfos, productInfo) {
            this.productService.delelte(productInfo).subscribe(function (_) {
              productInfos = productInfos.filter(function (e) {
                return e.productId != productInfo;
              });
            }, function (err) {});
          }
        }, {
          key: "open",
          value: function open(content) {
            var _this16 = this;

            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this16.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this16.closeResult = "Dismissed ".concat(_this16.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.productId) {
              this.update();
            } else {
              this.add();
            }
          }
        }, {
          key: "add",
          value: function add() {
            this.productService.create(this.product).subscribe(function (prod) {
              if (!prod) throw new Error(); //this.router.navigate(['/']);
            }, function (e) {});
          }
        }]);

        return ProductListComponent;
      }();

      ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
        return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
      };

      ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductListComponent,
        selectors: [["app-product", 8, "list"]],
        attrs: _c0,
        decls: 34,
        vars: 4,
        consts: [["align", "center", 1, "display-4"], ["style", "color: inherit", "routerLink", "/seller/product/new", "class", "float-right mb-3", 4, "ngIf"], ["id", "table", 1, "table", "table-striped", "text-center", 2, "width", "100%"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "currentPage"], ["content", ""], [1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], ["routerLink", "/seller/product/new", 1, "float-right", "mb-3", 2, "color", "inherit"], [1, "fas", "fa-plus", "fa-2x"], ["scope", "row", 1, "align-middle"], ["height", "100px", 3, "src", "alt"], [1, "align-middle"], [2, "display", "block", 3, "routerLink"], ["style", "display: block", "routerLink", "./", 3, "click", 4, "ngIf"], ["routerLink", "./", 2, "display", "block", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "productId"], ["type", "text", "id", "productId", "name", "productId", "required", "", 1, "form-control", "form-control-lg", 3, "readOnly", "disabled", "ngModel", "ngModelChange"], ["productIdInput", "", "productId", "ngModel"], [4, "ngIf"], ["type", "text", "id", "productIcon", "name", "productIcon", "placeholder", "Photo", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "productName", "name", "productName", "placeholder", "Name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productName", "ngModel"], ["for", "categoryType"], ["id", "categoryType", "name", "categoryType", "required", "", 1, "custom-select", "custom-select-lg", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["id", "productDescription", "name", "productDescription", "placeholder", "Description", 1, "form-control", "form-control-lg", "text-left", 3, "ngModel", "ngModelChange"], ["for", "productPrice"], ["type", "number", "id", "productPrice", "name", "productPrice", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productPrice", "ngModel"], ["for", "productStock"], ["type", "number", "id", "productStock", "name", "productStock", "min", "0", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["productStock", "ngModel"], ["for", "productStatus"], ["id", "productStatus", "name", "productStatus", "required", "", 1, "custom-select", "custom-select-lg", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_a_2_Template, 3, 0, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Stock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductListComponent_tr_25_Template, 22, 13, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-pagination", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductListComponent_ng_template_27_Template, 68, 21, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_29_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

              return ctx.open(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save New Cuisine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.role) == ctx.Role.Customer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.page == null ? null : ctx.page.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.closeResult);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _parts_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Lmxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product.list',
            templateUrl: './product.list.component.html',
            styleUrls: ['./product.list.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kVqo":
    /*!*******************************************!*\
      !*** ./src/app/services/order.service.ts ***!
      \*******************************************/

    /*! exports provided: OrderService */

    /***/
    function kVqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.orderUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["apiUrl"], "/order");
        }

        _createClass(OrderService, [{
          key: "getPage",
          value: function getPage() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            return this.http.get("".concat(this.orderUrl, "?page=").concat(page, "&size=").concat(size)).pipe();
          }
        }, {
          key: "show",
          value: function show(id) {
            return this.http.get("".concat(this.orderUrl, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel(id) {
            return this.http.patch("".concat(this.orderUrl, "/cancel/").concat(id), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }
        }, {
          key: "finish",
          value: function finish(id) {
            return this.http.patch("".concat(this.orderUrl, "/finish/").concat(id), null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }
        }]);

        return OrderService;
      }();

      OrderService.ɵfac = function OrderService_Factory(t) {
        return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderService,
        factory: OrderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nunT":
    /*!**************************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.component.ts ***!
      \**************************************************************/

    /*! exports provided: OrderDetailComponent */

    /***/
    function nunT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function () {
        return OrderDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/order.service */
      "kVqo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrderDetailComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/seller/product/", item_r1.productId, "/edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/seller/product/", item_r1.productId, "/edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, item_r1.productPrice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 11, item_r1.productPrice * item_r1.count));
        }
      }

      var OrderDetailComponent = /*#__PURE__*/function () {
        function OrderDetailComponent(orderService, route) {
          _classCallCheck(this, OrderDetailComponent);

          this.orderService = orderService;
          this.route = route;
        }

        _createClass(OrderDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.items$ = this.route.paramMap.pipe(
            //     map(paramMap =>paramMap.get('id')),
            //     switchMap((id:string) => this.orderService.show(id))
            // )
            this.order$ = this.orderService.show(this.route.snapshot.paramMap.get('id'));
          }
        }]);

        return OrderDetailComponent;
      }();

      OrderDetailComponent.ɵfac = function OrderDetailComponent_Factory(t) {
        return new (t || OrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      OrderDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderDetailComponent,
        selectors: [["app-order-detail"]],
        decls: 24,
        vars: 8,
        consts: [["align", "center", 1, "display-4", "mb-5"], [1, "table", "table-striped", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "float-right", 2, "display", "inline"], ["scope", "row", 1, "align-middle"], [3, "routerLink"], ["height", "100px", 3, "src", "alt"], [1, "align-middle"]],
        template: function OrderDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderDetailComponent_tr_18_Template, 17, 13, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0 = null;
            var tmp_1_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 2, ctx.order$)) == null ? null : tmp_0_0.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 4, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 6, ctx.order$)) == null ? null : tmp_1_0.orderAmount), "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-detail',
            templateUrl: './order-detail.component.html',
            styleUrls: ['./order-detail.component.css']
          }]
        }], function () {
          return [{
            type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "o97b":
    /*!**************************************************!*\
      !*** ./src/app/pages/signup/signup.component.ts ***!
      \**************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function o97b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/User */
      "vmXk");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function SignupComponent_div_11_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_11_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Email. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_11_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_11_div_2_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.email);
        }
      }

      function SignupComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 3 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_18_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_18_div_2_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
        }
      }

      function SignupComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_25_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 3 characters long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_25_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_25_div_2_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
        }
      }

      function SignupComponent_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_32_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
        }
      }

      function SignupComponent_div_39_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_39_div_1_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
        }
      }

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(location, userService, router) {
          _classCallCheck(this, SignupComponent);

          this.location = location;
          this.userService = userService;
          this.router = router;
          this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            this.userService.signUp(this.user).subscribe(function (u) {
              _this17.router.navigate(['/login']);
            }, function (e) {});
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 43,
        vars: 11,
        consts: [["align", "center", 1, "display-4", "mb-5"], [2, "width", "40%", "margin", "25px auto"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter email", "email", "", "required", "", "autofocus", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["type", "text", "id", "name", "name", "name", "placeholder", "Your name", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "minlength", "3", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "text", "id", "phone", "name", "phone", "placeholder", "Phone", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "id", "address", "name", "address", "placeholder", "Address", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_div_11_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_div_18_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_div_25_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.user.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignupComponent_div_32_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_37_listener($event) {
              return ctx.user.address = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SignupComponent_div_39_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "prZG":
    /*!***************************************!*\
      !*** ./src/app/enum/ProductStatus.ts ***!
      \***************************************/

    /*! exports provided: ProductStatus */

    /***/
    function prZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductStatus", function () {
        return ProductStatus;
      });

      var ProductStatus;

      (function (ProductStatus) {
        ProductStatus[ProductStatus["Available"] = 0] = "Available";
        ProductStatus[ProductStatus["Unavailable"] = 1] = "Unavailable";
      })(ProductStatus || (ProductStatus = {}));
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "6trp");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, cookieService) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.cookieService = cookieService;
          this.nameTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.name$ = this.nameTerms.asObservable();
          var memo = localStorage.getItem('currentUser');
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(memo));
          this.currentUser = this.currentUserSubject.asObservable();
          cookieService.set('currentUser', memo);
        }

        _createClass(UserService, [{
          key: "login",
          value: function login(loginForm) {
            var _this18 = this;

            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/login");
            return this.http.post(url, loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
              if (user && user.token) {
                _this18.cookieService.set('currentUser', JSON.stringify(user));

                if (loginForm.remembered) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                }

                console.log(user.name);

                _this18.nameTerms.next(user.name);

                _this18.currentUserSubject.next(user);

                return user;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Login Failed', null)));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.currentUserSubject.next(null);
            localStorage.removeItem('currentUser');
            this.cookieService["delete"]('currentUser');
          }
        }, {
          key: "signUp",
          value: function signUp(user) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/register");
            return this.http.post(url, user);
          }
        }, {
          key: "update",
          value: function update(user) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/profile");
            return this.http.put(url, user);
          }
        }, {
          key: "get",
          value: function get(email) {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/profile/").concat(email);
            return this.http.get(url);
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.log(error); // log to console instead
              // Let the app keep running by returning an empty result.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "r8It":
    /*!**********************************************************!*\
      !*** ./src/app/parts/pagination/pagination.component.ts ***!
      \**********************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function r8It(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["./"];
      };

      var _c1 = function _c1(a0, a1) {
        return {
          page: a0,
          size: a1
        };
      };

      function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r0.currentPage == null ? null : ctx_r0.currentPage.number, ctx_r0.currentPage == null ? null : ctx_r0.currentPage.size));
        }
      }

      function PaginationComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PaginationComponent_ng_container_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, i_r8 + 1, ctx_r9.currentPage == null ? null : ctx_r9.currentPage.size));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);
        }
      }

      function PaginationComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);
        }
      }

      function PaginationComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_ng_container_5_li_1_Template, 3, 5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_ng_container_5_ng_template_2_Template, 3, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r8 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentPage && ctx_r3.currentPage.number != i_r8)("ngIfElse", _r10);
        }
      }

      function PaginationComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, (ctx_r4.currentPage == null ? null : ctx_r4.currentPage.number) + 2, ctx_r4.currentPage == null ? null : ctx_r4.currentPage.size));
        }
      }

      function PaginationComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent() {
          _classCallCheck(this, PaginationComponent);
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "counter",
          value: function counter() {
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            return new Array(i);
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)();
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["app-pagination"]],
        inputs: {
          currentPage: "currentPage"
        },
        decls: 9,
        vars: 5,
        consts: [[1, "col-md-12", "column"], [1, "pagination", "justify-content-end"], ["class", "page-item", 4, "ngIf", "ngIfElse"], ["prev", ""], [4, "ngFor", "ngForOf"], ["next", ""], [1, "page-item"], [1, "page-link", 3, "routerLink", "queryParams"], [1, "page-item", "disabled"], [1, "page-link"], ["active", ""], ["routerLink", "./", 1, "page-link", 3, "queryParams"], [1, "page-item", "active"], ["disabled", "", 1, "page-link"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_ng_container_5_Template, 4, 2, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_li_6_Template, 3, 6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginationComponent_ng_template_7_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentPage == null ? null : ctx.currentPage.number) > 0)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counter(ctx.currentPage == null ? null : ctx.currentPage.totalPages));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.currentPage == null ? null : ctx.currentPage.number) + 1 < (ctx.currentPage == null ? null : ctx.currentPage.totalPages))("ngIfElse", _r5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
          }]
        }], function () {
          return [];
        }, {
          currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "sHrM":
    /*!**********************************************!*\
      !*** ./src/app/pages/cart/cart.component.ts ***!
      \**********************************************/

    /*! exports provided: CartComponent */

    /***/
    function sHrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/cart.service */
      "c14U");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../enum/Role */
      "HucY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CartComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_18_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInOrder_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.minusOne(productInOrder_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_tr_18_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInOrder_r5 = ctx.$implicit;
            return productInOrder_r5.count = $event;
          })("change", function CartComponent_tr_18_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInOrder_r5 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onChange(productInOrder_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_18_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInOrder_r5 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.addOne(productInOrder_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_18_Template_a_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var productInOrder_r5 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.remove(productInOrder_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var productInOrder_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", productInOrder_r5.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", productInOrder_r5.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", productInOrder_r5.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", productInOrder_r5.productId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInOrder_r5.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, productInOrder_r5.productPrice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", productInOrder_r5.productId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", productInOrder_r5.productStock)("ngModel", productInOrder_r5.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, productInOrder_r5.productPrice * productInOrder_r5.count));
        }
      }

      function CartComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_19_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.checkout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.total), "");
        }
      }

      function CartComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart is empty. Go to get something! :)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_div_23_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_23_tr_20_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var productInOrder_r16 = ctx.$implicit;
            return productInOrder_r16.count = $event;
          })("change", function CartComponent_div_23_tr_20_Template_input_change_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var productInOrder_r16 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.onChange(productInOrder_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_23_tr_20_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var productInOrder_r16 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.remove(productInOrder_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var productInOrder_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", productInOrder_r16.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInOrder_r16.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](productInOrder_r16.productDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, productInOrder_r16.productPrice, "INR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", productInOrder_r16.productId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", productInOrder_r16.productStock)("ngModel", productInOrder_r16.count);
        }
      }

      function CartComponent_div_23_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_23_div_27_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.checkout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue Shopping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CartComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shopping Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " item in your cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_div_23_tr_20_Template, 21, 10, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subtotal:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CartComponent_div_23_div_27_Template, 8, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.productInOrders.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.productInOrders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 5, ctx_r4.total, "INR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.productInOrders == null ? null : ctx_r4.productInOrders.length) > 0)("ngIfElse", _r2);
        }
      }

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(cartService, userService, router) {
          var _this19 = this;

          _classCallCheck(this, CartComponent);

          this.cartService = cartService;
          this.userService = userService;
          this.router = router;
          this.productInOrders = [];
          this.total = 0;
          this.updateTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            return _this19.currentUser = user;
          });
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.cartService.getCart().subscribe(function (prods) {
              _this20.productInOrders = prods;
            });
            this.sub = this.updateTerms.pipe( // wait 300ms after each keystroke before considering the term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), //
            // ignore new term if same as previous term
            // Same Object Reference, not working here
            //  distinctUntilChanged((p: ProductInOrder, q: ProductInOrder) => p.count === q.count),
            //
            // switch to new search observable each time the term changes
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (productInOrder) {
              return _this20.cartService.update(productInOrder);
            })).subscribe(function (prod) {
              if (prod) {
                throw new Error();
              }
            }, function (_) {
              return console.log('Update Item Failed');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!this.currentUser) {
              this.cartService.storeLocalCart();
            }

            this.userSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.total = this.productInOrders.reduce(function (prev, cur) {
              return prev + cur.count * cur.productPrice;
            }, 0);
          }
        }, {
          key: "addOne",
          value: function addOne(productInOrder) {
            productInOrder.count++;
            CartComponent.validateCount(productInOrder);

            if (this.currentUser) {
              this.updateTerms.next(productInOrder);
            }
          }
        }, {
          key: "minusOne",
          value: function minusOne(productInOrder) {
            productInOrder.count--;
            CartComponent.validateCount(productInOrder);

            if (this.currentUser) {
              this.updateTerms.next(productInOrder);
            }
          }
        }, {
          key: "onChange",
          value: function onChange(productInOrder) {
            CartComponent.validateCount(productInOrder);

            if (this.currentUser) {
              this.updateTerms.next(productInOrder);
            }
          }
        }, {
          key: "remove",
          value: function remove(productInOrder) {
            var _this21 = this;

            this.cartService.remove(productInOrder).subscribe(function (success) {
              _this21.productInOrders = _this21.productInOrders.filter(function (e) {
                return e.productId !== productInOrder.productId;
              });
              console.log('Cart: ' + _this21.productInOrders);
            }, function (_) {
              return console.log('Remove Cart Failed');
            });
          }
        }, {
          key: "checkout",
          value: function checkout() {
            var _this22 = this;

            if (!this.currentUser) {
              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: this.router.url
                }
              });
            } else if (this.currentUser.role !== _enum_Role__WEBPACK_IMPORTED_MODULE_6__["Role"].Customer) {
              this.router.navigate(['/seller']);
            } else {
              this.cartService.checkout().subscribe(function (_) {
                _this22.productInOrders = [];
              }, function (error1) {
                console.log('Checkout Cart Failed');
              });
              this.router.navigate(['/']);
            }
          }
        }], [{
          key: "validateCount",
          value: function validateCount(productInOrder) {
            var max = productInOrder.productStock;

            if (productInOrder.count > max) {
              productInOrder.count = max;
            } else if (productInOrder.count < 1) {
              productInOrder.count = 1;
            }

            console.log(productInOrder.count);
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartComponent,
        selectors: [["app-cart"]],
        decls: 24,
        vars: 5,
        consts: [["align", "center", 1, "display-4", "mb-5"], [1, "table", "table-striped", "text-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["empty", ""], [1, "pt-5", "pb-5"], ["class", "container", 4, "ngIf", "ngIfElse"], ["scope", "row", 1, "align-middle"], [3, "routerLink"], ["height", "100px", 3, "src", "alt"], [1, "align-middle"], [3, "click"], [1, "fa", "fa-minus"], ["min", "1", "size", "5", "type", "number", "required", "", "name", "count", 3, "id", "max", "ngModel", "ngModelChange", "change"], [1, "fa", "fa-plus"], ["routerLink", "./", 3, "click"], [2, "display", "inline"], [1, "btn", "btn-warning", "float-right", 3, "click"], [1, "text-muted", "text-center"], [1, "container"], [1, "row", "w-100"], [1, "col-lg-12", "col-md-12", "col-12"], [1, "display-5", "mb-2", "text-center"], [1, "mb-5", "text-center"], [1, "text-danger", "font-weight-bold"], ["id", "shoppingCart", 1, "table", "table-condensed", "table-responsive"], [2, "width", "60%"], [2, "width", "12%"], [2, "width", "10%"], [2, "width", "16%"], [1, "float-right", "text-right"], ["class", "row mt-4 d-flex align-items-center", 4, "ngIf", "ngIfElse"], ["data-th", "Product"], [1, "row"], [1, "col-md-3", "text-left"], ["alt", "", 1, "img-fluid", "d-none", "d-md-block", "rounded", "mb-2", "shadow", 3, "src"], [1, "col-md-9", "text-left", "mt-sm-2"], [1, "font-weight-light"], ["data-th", "Price"], ["data-th", "Quantity"], ["type", "number", "min", "1", "size", "5", "type", "number", "required", "", "name", "count", 1, "form-control", "form-control-lg", "text-center", 3, "id", "max", "ngModel", "ngModelChange", "change"], ["data-th", "", 1, "actions"], [1, "text-right"], [1, "btn", "btn-white", "border-secondary", "bg-white", "btn-md", "mb-2"], [1, "fas", "fa-sync"], ["routerLink", "./", 1, "btn", "btn-white", "border-secondary", "bg-white", "btn-md", "mb-2", 3, "click"], [1, "fas", "fa-trash"], [1, "row", "mt-4", "d-flex", "align-items-center"], [1, "col-sm-6", "order-md-2", "text-right"], [1, "btn", "btn-primary", "mb-4", "btn-lg", "pl-5", "pr-5", 3, "click"], [1, "col-sm-6", "mb-3", "mb-m-1", "order-md-1", "text-md-left"], ["href", "product"], [1, "fas", "fa-arrow-left", "mr-2"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Photo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Subtotal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_tr_18_Template, 22, 14, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartComponent_div_19_Template, 6, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_ng_template_20_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartComponent_div_23_Template, 28, 8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productInOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productInOrders == null ? null : ctx.productInOrders.length) > 0)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productInOrders == null ? null : ctx.productInOrders.length) > 0)("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
          }]
        }], function () {
          return [{
            type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uC4g":
    /*!*************************************!*\
      !*** ./src/app/enum/OrderStatus.ts ***!
      \*************************************/

    /*! exports provided: OrderStatus */

    /***/
    function uC4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatus", function () {
        return OrderStatus;
      });

      var OrderStatus;

      (function (OrderStatus) {
        OrderStatus[OrderStatus["New"] = 0] = "New";
        OrderStatus[OrderStatus["Finished"] = 1] = "Finished";
        OrderStatus[OrderStatus["Cenceled"] = 2] = "Cenceled";
      })(OrderStatus || (OrderStatus = {}));
      /***/

    },

    /***/
    "usAx":
    /*!******************************************!*\
      !*** ./src/app/models/ProductInOrder.ts ***!
      \******************************************/

    /*! exports provided: ProductInOrder */

    /***/
    function usAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductInOrder", function () {
        return ProductInOrder;
      });

      var ProductInOrder = function ProductInOrder(productInfo) {
        var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        _classCallCheck(this, ProductInOrder);

        this.productId = productInfo.productId;
        this.productName = productInfo.productName;
        this.productPrice = productInfo.productPrice;
        this.productStock = productInfo.productStock;
        this.productDescription = productInfo.productDescription;
        ;
        this.productIcon = productInfo.productIcon;
        this.categoryType = productInfo.categoryType;
        this.count = quantity;
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/card/card.component */
      "c7Ye");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/product-detail/detail.component */
      "x1/t");
      /* harmony import */


      var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/cart/cart.component */
      "sHrM");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_guards/auth.guard */
      "PSoG");
      /* harmony import */


      var _pages_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/order/order.component */
      "50+E");
      /* harmony import */


      var _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/order-detail/order-detail.component */
      "nunT");
      /* harmony import */


      var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/product-list/product.list.component */
      "ha/6");
      /* harmony import */


      var _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/user-edit/user-detail.component */
      "cKaa");
      /* harmony import */


      var _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/product-edit/product-edit.component */
      "9xKv");
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./enum/Role */
      "HucY");

      var routes = [{
        path: '',
        redirectTo: '/product',
        pathMatch: 'full'
      }, {
        path: 'product/:id',
        component: _pages_product_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
      }, {
        path: 'product/:keyword',
        component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
      }, {
        path: 'category/:id',
        component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
      }, {
        path: 'product',
        component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
      }, {
        path: 'category',
        component: _pages_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'logout',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'register',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: 'cart',
        component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
      }, {
        path: 'success',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }, {
        path: 'order/:id',
        component: _pages_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'order',
        component: _pages_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'seller',
        redirectTo: 'seller/product',
        pathMatch: 'full'
      }, {
        path: 'seller/product',
        component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_13__["Role"].Manager, _enum_Role__WEBPACK_IMPORTED_MODULE_13__["Role"].Employee]
        }
      }, {
        path: 'profile',
        component: _pages_user_edit_user_detail_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'seller/product/:id/edit',
        component: _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_13__["Role"].Manager, _enum_Role__WEBPACK_IMPORTED_MODULE_13__["Role"].Employee]
        }
      }, {
        path: 'seller/product/:id/new',
        component: _pages_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_enum_Role__WEBPACK_IMPORTED_MODULE_13__["Role"].Employee]
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes) //{onSameUrlNavigation: 'reload'}
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes) //{onSameUrlNavigation: 'reload'}
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vmXk":
    /*!********************************!*\
      !*** ./src/app/models/User.ts ***!
      \********************************/

    /*! exports provided: User */

    /***/
    function vmXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony import */


      var _enum_Role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enum/Role */
      "HucY");

      var User = function User() {
        _classCallCheck(this, User);

        this.active = true;
        this.role = _enum_Role__WEBPACK_IMPORTED_MODULE_0__["Role"].Customer;
      };
      /***/

    },

    /***/
    "x1/t":
    /*!**********************************************************!*\
      !*** ./src/app/pages/product-detail/detail.component.ts ***!
      \**********************************************************/

    /*! exports provided: DetailComponent */

    /***/
    function x1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
        return DetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/product.service */
      "Gdn9");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cart.service */
      "c14U");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "6trp");
      /* harmony import */


      var _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/ProductInOrder */
      "usAx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DetailComponent_button_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        }
      }

      function DetailComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unavailable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DetailComponent = /*#__PURE__*/function () {
        function DetailComponent(productService, cartService, cookieService, route, router) {
          _classCallCheck(this, DetailComponent);

          this.productService = productService;
          this.cartService = cartService;
          this.cookieService = cookieService;
          this.route = route;
          this.router = router;
        }

        _createClass(DetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProduct();
            this.title = 'Product Detail';
            this.count = 1;
          } // ngOnChanges(changes: SimpleChanges): void {
          //   // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
          //   // Add '${implements OnChanges}' to the class.
          //   console.log(changes);
          //   if (this.item.quantity in changes) {
          //   }
          // }

        }, {
          key: "getProduct",
          value: function getProduct() {
            var _this23 = this;

            var id = this.route.snapshot.paramMap.get('id');
            this.productService.getDetail(id).subscribe(function (prod) {
              _this23.productInfo = prod;
            }, function (_) {
              return console.log('Get Cart Failed');
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            var _this24 = this;

            this.cartService.addItem(new _models_ProductInOrder__WEBPACK_IMPORTED_MODULE_5__["ProductInOrder"](this.productInfo, this.count)).subscribe(function (res) {
              if (!res) {
                console.log('Add Cart failed' + res);
                throw new Error();
              }

              _this24.router.navigateByUrl('/cart');
            }, function (_) {
              return console.log('Add Cart Failed');
            });
          }
        }, {
          key: "validateCount",
          value: function validateCount() {
            console.log('Validate');
            var max = this.productInfo.productStock;

            if (this.count > max) {
              this.count = max;
            } else if (this.count < 1) {
              this.count = 1;
            }
          }
        }]);

        return DetailComponent;
      }();

      DetailComponent.ɵfac = function DetailComponent_Factory(t) {
        return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetailComponent,
        selectors: [["app-detail"]],
        decls: 40,
        vars: 16,
        consts: [["align", "center", 1, "display-4", "mb-5"], [1, "row", "text-center", "justify-content-center"], [1, "col-lg-6"], [1, "card", "mb-4"], ["height", "60%", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], ["name", "form", 3, "ngSubmit"], ["form", "ngForm"], [1, "text-left"], ["hidden", "", "name", "productId", 3, "value"], [1, "card-test"], [1, "card-text"], ["id", "price"], ["type", "number", "name", "count", "required", "", "min", "1", 3, "ngModel", "max", "ngModelChange", "change"], ["id", "subtotal"], ["type", "submit", "class", "btn btn-primary btn-lg", 3, "disabled", 4, "ngIf", "ngIfElse"], ["offBlock", ""], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], [1, "btn", "btn-secondary", "btn-lg", "disabled"]],
        template: function DetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetailComponent_Template_form_ngSubmit_9_listener() {
              return (ctx.productInfo == null ? null : ctx.productInfo.productStatus) == 0 && ctx.addToCart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stock: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Quantity: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.count = $event;
            })("change", function DetailComponent_Template_input_change_30_listener() {
              return ctx.validateCount();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Subtotal: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DetailComponent_button_37_Template, 2, 1, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DetailComponent_ng_template_38_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.productInfo == null ? null : ctx.productInfo.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productInfo == null ? null : ctx.productInfo.productName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.productInfo == null ? null : ctx.productInfo.productId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productInfo == null ? null : ctx.productInfo.productDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, ctx.productInfo == null ? null : ctx.productInfo.productPrice));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productInfo == null ? null : ctx.productInfo.productStock);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.count)("max", ctx.productInfo == null ? null : ctx.productInfo.productStock);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 14, ctx.count * (ctx.productInfo == null ? null : ctx.productInfo.productPrice)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.productInfo == null ? null : ctx.productInfo.productStatus) == 0)("ngIfElse", _r2);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css']
          }]
        }], function () {
          return [{
            type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yZyG":
    /*!************************************************************!*\
      !*** ./src/app/_interceptors/error-interceptor.service.ts ***!
      \************************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function yZyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(userService, router) {
          _classCallCheck(this, ErrorInterceptor);

          this.userService = userService;
          this.router = router;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this25 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this25.userService.logout();

                _this25.router.navigate(['/login']);
              }

              var error = err.error || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map