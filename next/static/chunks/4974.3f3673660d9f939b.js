"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4974],
  {
    87270: function (n, e, t) {
      var o = t(67294),
        r = t(25617),
        i = t(7400),
        a = t(33207);
      e.Z = function () {
        var n = (0, r.I0)(),
          e = (0, r.v9)(i.U9),
          t = (0, r.v9)(i.Y2),
          l = (0, o.useMemo)(
            function () {
              return e.findIndex(function (n) {
                return (null == t ? void 0 : t.id) === n.id;
              });
            },
            [e, t]
          ),
          c = (0, o.useMemo)(
            function () {
              return e.length ? e[l === e.length - 1 ? 0 : l + 1] : void 0;
            },
            [l, e]
          ),
          u = (0, o.useCallback)(
            function (e) {
              e &&
                e.id !== (null == t ? void 0 : t.id) &&
                (n(a.Nw.setSceneSelected(e)), n(a.Nw.setprevSceneSelected(t)));
            },
            [t, n]
          );
        return (0, o.useMemo)(
          function () {
            return { nextScene: c, onNextScene: u };
          },
          [c, u]
        );
      };
    },
    67653: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var o = t(29815),
        r = t(7400),
        i = t(33207),
        a = t(22617),
        l = t(27556),
        c = t(76489),
        u = t(67294),
        s = t(25617),
        d = function (n) {
          var e = n.listFormCaptureOpenedCookie,
            t = void 0 === e ? "[]" : e,
            d = (0, s.I0)(),
            p = (0, s.v9)(r.Pl),
            f = (0, s.v9)(r.j1),
            v = (0, s.v9)(r.M5),
            m = (0, s.v9)(r.kh),
            h = (0, s.v9)(r.pJ),
            g = (0, s.v9)(r.B3),
            C = (0, s.v9)(r.Yc),
            b = (0, s.v9)(r.kN),
            x = (0, s.v9)(r.ci),
            w = (0, s.v9)(r.IX),
            S = (0, s.v9)(r.R8),
            k = (0, u.useCallback)(function () {
              return l.sk ? {} : (0, c.Q)(document.cookie);
            }, []),
            y = (0, u.useCallback)(
              function () {
                return JSON.parse(
                  (l.sk ? t : k()[a.g.LIST_FORM_CAPTURE_OPENED] || "[]") || "[]"
                );
              },
              [k, t]
            ),
            P = (0, u.useCallback)(
              function (n) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : void 0;
                y().indexOf(null == n ? void 0 : n.form) > -1
                  ? e && t
                    ? (d(i.Nw.setHotspotSelected(t)),
                      d(i.Nw.setHotspotSelectedTemporary(void 0)))
                    : d(i.Nw.setIsVisibleFormCapture(!1))
                  : d(i.Nw.setIsVisibleFormCapture(!0));
              },
              [d, y]
            ),
            _ = (0, u.useCallback)(
              function () {
                var n = y();
                -1 === n.indexOf(null == f ? void 0 : f.id) &&
                  (n.length
                    ? (document.cookie = ""
                        .concat(a.g.LIST_FORM_CAPTURE_OPENED, "=")
                        .concat(
                          JSON.stringify(
                            (0, o.Z)(n).concat([null == f ? void 0 : f.id])
                          ),
                          "; path=/"
                        ))
                    : (document.cookie = ""
                        .concat(a.g.LIST_FORM_CAPTURE_OPENED, "=")
                        .concat(
                          JSON.stringify([null == f ? void 0 : f.id]),
                          "; path=/"
                        ))),
                  d(i.Nw.setIsVisibleFormCapture(!1)),
                  h &&
                    (d(i.Nw.setHotspotSelected(h)),
                    d(i.Nw.setHotspotSelectedTemporary(void 0)));
              },
              [d, f, h, y]
            ),
            N = (0, u.useCallback)(
              function (n) {
                var e = b.indexOf(n.id),
                  t = w.indexOf(n.type);
                -1 !== e
                  ? (P(x[e], !0, n),
                    d(i.Nw.setFormCaptureConfigSelelected(x[e])),
                    d(i.Nw.setHotspotSelectedTemporary(n)))
                  : -1 !== t
                  ? (P(S[t], !0, n),
                    d(i.Nw.setFormCaptureConfigSelelected(S[t])),
                    d(i.Nw.setHotspotSelectedTemporary(n)))
                  : d(i.Nw.setHotspotSelected(n));
              },
              [d, P, b, w, x, S]
            ),
            O = (0, u.useCallback)(
              function (n) {
                var e = g.findIndex(function (e) {
                  return e === n.id;
                });
                e > -1 &&
                  (P(C[e]), d(i.Nw.setFormCaptureConfigSelelected(C[e])));
              },
              [d, P, g, C]
            ),
            T = (0, u.useCallback)(
              function () {
                v && (null == v ? void 0 : v.type) === "project"
                  ? setTimeout(function () {
                      P(v);
                    }, 1e3 * (v.waitTime || 2))
                  : d(i.Nw.setIsVisibleFormCapture(!1));
              },
              [d, v, P]
            );
          return (0, u.useMemo)(
            function () {
              return {
                onOpenFormCapture: P,
                onCloseFormCapture: _,
                formCaptureSelected: f,
                isVisibleFormCapture: p,
                formCaptureConfigGlobal: m,
                formCaptureConfigSelected: v,
                onCheckShowFormCaptureOnScene: O,
                onCheckShowFormCaptureOnHotspot: N,
                onCheckShowFormCaptureOnProject: T,
              };
            },
            [P, _, f, p, m, v, O, N, T]
          );
        };
    },
    44974: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return Q;
          },
        });
      var o = t(85893),
        r = t(67294),
        i = t(25617),
        a = t(11163),
        l = t(5152),
        c = t.n(l),
        u = t(7297),
        s = t(29750),
        d = t(19521);
      function p() {
        var n = (0, u.Z)([
          "\n  :root {\n    --color-primary: ",
          ";\n    --color-primary--light: ",
          "80;\n    --color-secondary: ",
          ";\n    --color-text: ",
          ";\n    --color-popup-bg: ",
          ";\n    --color-popup-text: ",
          ";\n    --color-icon: #fff;\n  }\n\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var f = (0, d.vJ)(
          p(),
          function (n) {
            return n.primaryColor || s.A9[n.selected].primaryColor;
          },
          function (n) {
            return n.primaryColor || s.A9[n.selected].primaryColor;
          },
          function (n) {
            return n.secondaryColor || s.A9.custom1.secondaryColor;
          },
          function (n) {
            return n.textColor || s.A9[n.selected].textColor;
          },
          function (n) {
            return n.popupBgColor || s.zP;
          },
          function (n) {
            return n.popupTextColor || s.Wd;
          }
        ),
        v = t(27556),
        m = t(17230),
        h = t(67653),
        g = t(38505);
      function C() {
        var n = (0, u.Z)([
          "\n  width: 100%;\n  height: 100%;\n  background-color: #fefefe;\n  color: rgba(0, 0, 0, 0.75);\n  position: relative;\n  display: flex;\n  .mainContent {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = (0, u.Z)([
          "\n  position: absolute;\n  width: 100%;\n  z-index: 10;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0));\n  padding: 0.25rem 0.75rem 1.5rem;\n  color: #fff;\n  ",
          ";\n  .title {\n    &-main {\n      font-weight: 500;\n      margin-top: 0.7rem;\n      margin-bottom: 0.7rem;\n      font-size: 0.9rem;\n      text-transform: uppercase;\n      letter-spacing: 0.06rem;\n      text-shadow: 0 1px 6px rgb(0 0 0 / 0.1);\n    }\n    &-extra {\n      ",
          ";\n      font-size: 15px;\n      width: 100%;\n      &__scene {\n        font-size: 0.8rem;\n        font-weight: 300;\n        margin: 0 1.6rem;\n        margin-top: -0.25px;\n        text-shadow: 0 1px 6px rgb(0 0 0 / 0.35);\n        text-align: center;\n        /* font-family: 'Dancing Script', cursive; */\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        max-width: 100%;\n      }\n      &__icon {\n        font-size: 1.1rem;\n        cursor: pointer;\n        transition: all 0.05;\n        i {\n          width: 1.9rem;\n          height: 1.2rem;\n          border: 1px solid rgb(255 255 255 / 0.6);\n          /* background: rgb(0 0 0 / 0.5); */\n          backdrop-filter: blur(10px);\n          /* border-radius: 6px; */\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition: var(--transition-smooth);\n          @media (hover: hover) and (pointer: fine) {\n            &:hover {\n              /* transform: scale(1.2, 1); */\n              background: #fff;\n              color: #212121;\n            }\n          }\n        }\n        &.prevIcon {\n        }\n        &.nextIcon {\n        }\n        @media (hover: hover) and (pointer: fine) {\n          &:hover {\n            text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,\n              0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6,\n              0 0 80px #ff4da6;\n          }\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, u.Z)([
          "\n  ",
          ";\n  position: absolute;\n  width: 220px;\n  height: 100%;\n  z-index: 10;\n  cursor: pointer;\n  transition: transform 0.4s;\n  top: 0;\n  .navigation {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 50%;\n    margin-top: -25px;\n    left: -25px;\n    cursor: pointer;\n    background: white;\n    transform: rotate(45deg);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    z-index: 11;\n    i {\n      position: absolute;\n      font-size: 24px;\n    }\n  }\n  .title {\n    position: absolute;\n    left: 3rem;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #fff;\n    z-index: 15;\n    .subTitle {\n      font-size: 12px;\n      text-transform: uppercase;\n      letter-spacing: 1.5px;\n      opacity: 0.75;\n    }\n    .mainTitle {\n      /* font-family: 'Dancing Script', cursive; */\n      font-size: 1.25rem;\n    }\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: black;\n    opacity: 0.75;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = (0, u.Z)([
          "\n              transform: translate(-50%, -50%) rotate(-45deg);\n              left: 50%;\n              top: 50%;\n            ",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = (0, u.Z)([
          "\n              transform: rotate(135deg);\n              right: 10px;\n              left: auto;\n              top: 3px;\n            ",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = (0, u.Z)(["\n      transform: none;\n    "]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = (0, u.Z)([
          "\n  box-shadow: 12px 0px 24px rgba(0, 0, 0, 0.15);\n  border-right: 1px solid rgb(255 255 255 / 0.5);\n  left: 0;\n  transform: translateX(-100%);\n  transition: var(--transition-smooth);\n  .navigation {\n    right: -25px;\n    left: auto;\n    i {\n      ",
          "\n    }\n  }\n  .title {\n    right: 3rem;\n    text-align: right;\n    overflow: hidden;\n  }\n  ",
          "\n\n  @media(max-width: 768px) {\n    transform: translateX(-100%) !important;\n    .navigation i {\n      transform: rotate(-45deg) !important;\n      right: 10px !important;\n      top: 3px !important;\n      left: unset !important;\n    }\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = (0, u.Z)([
          "\n              transform: translate(-50%, -50%) rotate(-45deg);\n              left: 50%;\n              top: 50%;\n            ",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = (0, u.Z)([
          "\n              transform: rotate(135deg);\n              left: 10px;\n              right: auto;\n              top: 20px;\n            ",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = (0, u.Z)(["\n      transform: none;\n    "]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = (0, u.Z)([
          "\n  box-shadow: -12px 0px 24px rgba(0, 0, 0, 0.15);\n  border-left: 1px solid rgb(255 255 255 / 0.5);\n  right: 0;\n  transform: translateX(100%);\n  transition: var(--transition-smooth);\n  .navigation {\n    i {\n      ",
          "\n    }\n  }\n  ",
          "\n\n  @media(max-width: 768px) {\n    transform: translateX(100%) !important;\n    .navigation i {\n      transform: rotate(-45deg) !important;\n      left: 10px !important;\n      top: 24px !important;\n    }\n  }\n",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = (0, u.Z)([
          "\n  width: 100%;\n  height: 100%;\n  position: relative;\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      var j = d.ZP.div.withConfig({
        displayName: "styled__HomeWrapper",
        componentId: "Panoee__sc-7985c0c6-0",
      })(C());
      d.ZP.div.withConfig({
        displayName: "styled__HeaderWrapper",
        componentId: "Panoee__sc-7985c0c6-1",
      })(b(), g.S8, g.b0);
      var G = d.ZP.div.withConfig({
        displayName: "styled__ChangeSceneWrapper",
        componentId: "Panoee__sc-7985c0c6-2",
      })(x(), g.HE);
      (0, d.ZP)(G).withConfig({
        displayName: "styled__PrevSceneWrapper",
        componentId: "Panoee__sc-7985c0c6-3",
      })(
        y(),
        function (n) {
          return n.show ? (0, d.iv)(w()) : (0, d.iv)(S());
        },
        function (n) {
          return n.show && (0, d.iv)(k());
        }
      ),
        (0, d.ZP)(G).withConfig({
          displayName: "styled__NextSceneWrapper",
          componentId: "Panoee__sc-7985c0c6-4",
        })(
          O(),
          function (n) {
            return n.show ? (0, d.iv)(P()) : (0, d.iv)(_());
          },
          function (n) {
            return n.show && (0, d.iv)(N());
          }
        ),
        d.ZP.div.withConfig({
          displayName: "styled__TourWrapper",
          componentId: "Panoee__sc-7985c0c6-5",
        })(T());
      var Z = t(7400),
        F = t(828),
        A = t(29815),
        I = t(22617),
        E = t(76489),
        R = function (n) {
          var e = n.detailProject,
            t = n.configProtectPassword,
            o = n.listProjectGuardOpenedCookie,
            i = void 0 === o ? "[]" : o,
            a = n.passwordTourCookie,
            l = (0, F.Z)((0, r.useState)(!1), 2),
            c = l[0],
            u = l[1],
            s = (0, r.useCallback)(function () {
              return v.sk ? {} : (0, E.Q)(document.cookie);
            }, []),
            d = (0, r.useMemo)(
              function () {
                return JSON.parse(
                  (v.sk ? i : s()[I.g.LIST_PROJECT_PASS_GUARD] || "[]") || "[]"
                );
              },
              [s, i]
            ),
            p = (0, r.useMemo)(
              function () {
                if (
                  (null == t ? void 0 : t.isEnabled) &&
                  (null == t ? void 0 : t.password)
                ) {
                  var n = v.sk ? a : s()[I.g.PASSWORD_TOUR] || "",
                    o = (0, v.lO)(null == t ? void 0 : t.password);
                  return (null == t ? void 0 : t.isAlwaysAsk)
                    ? !c
                    : !(
                        c ||
                        (d.indexOf((0, v.lO)(null == e ? void 0 : e.id)) > -1 &&
                          n === o)
                      );
                }
                return !1;
              },
              [s, e, a, c, t, d]
            ),
            f = (0, r.useCallback)(
              function () {
                if ((u(!0), !(null == t ? void 0 : t.isAlwaysAsk))) {
                  document.cookie = ""
                    .concat(I.g.PASSWORD_TOUR, "=")
                    .concat(
                      (0, v.lO)(null == t ? void 0 : t.password),
                      "; path=/"
                    );
                  var n = (0, v.lO)(null == e ? void 0 : e.id);
                  d.length
                    ? (document.cookie = ""
                        .concat(I.g.LIST_PROJECT_PASS_GUARD, "=")
                        .concat(
                          JSON.stringify(
                            Array.from(new Set((0, A.Z)(d).concat([n])))
                          ),
                          "; path=/"
                        ))
                    : (document.cookie = ""
                        .concat(I.g.LIST_PROJECT_PASS_GUARD, "=")
                        .concat(JSON.stringify([n]), "; path=/"));
                }
              },
              [t, e, d]
            );
          return (0, r.useMemo)(
            function () {
              return {
                isPasswordCorrectly: c,
                setIsPasswordCorrectly: u,
                isOpenGuardPassword: p,
                onCheckGuardPassword: f,
              };
            },
            [p, c, f]
          );
        },
        M = t(87270),
        U = c()(
          function () {
            return Promise.all([t.e(3953), t.e(2796)]).then(t.bind(t, 72796));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [72796];
              },
            },
          }
        ),
        z = c()(
          function () {
            return t.e(3344).then(t.bind(t, 93344));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [93344];
              },
            },
          }
        ),
        H = c()(
          function () {
            return Promise.all([t.e(3953), t.e(1895)]).then(t.bind(t, 31895));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [31895];
              },
            },
          }
        ),
        J = c()(
          function () {
            return t.e(2885).then(t.bind(t, 22885));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [22885];
              },
            },
          }
        ),
        D = c()(
          function () {
            return Promise.all([t.e(3953), t.e(8318)]).then(t.bind(t, 58318));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [58318];
              },
            },
          }
        ),
        V = c()(
          function () {
            return Promise.all([
              t.e(1649),
              t.e(1577),
              t.e(6994),
              t.e(812),
              t.e(6323),
              t.e(3730),
            ]).then(t.bind(t, 13730));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [13730];
              },
            },
          }
        ),
        W = c()(
          function () {
            return Promise.all([t.e(9505), t.e(5781)]).then(t.bind(t, 35781));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [35781];
              },
            },
            ssr: !1,
          }
        ),
        L = c()(
          function () {
            return t.e(4509).then(t.bind(t, 84509));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [84509];
              },
            },
            ssr: !1,
          }
        ),
        Y = c()(
          function () {
            return Promise.all([t.e(5098), t.e(6366)]).then(t.bind(t, 16366));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [16366];
              },
            },
            ssr: !1,
          }
        ),
        B = c()(
          function () {
            return Promise.all([t.e(4222), t.e(1015)]).then(t.bind(t, 45298));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [45298];
              },
            },
            ssr: !1,
          }
        ),
        X = c()(
          function () {
            return t.e(2188).then(t.bind(t, 82188));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82188];
              },
            },
          }
        ),
        q = c()(
          function () {
            return t.e(4989).then(t.bind(t, 54989));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [54989];
              },
            },
          }
        ),
        Q = (0, r.memo)(function (n) {
          var e,
            t,
            l,
            c,
            u = n.isPublic,
            s = n.isExport,
            d = n.isCollaborationMode,
            p = void 0 !== d && d,
            g = n.isPreventChangeUrl,
            C = void 0 !== g && g,
            b = n.passwordTourCookie,
            x = n.listProjectGuardOpenedCookie,
            w = n.listFormCaptureOpenedCookie,
            S = (0, a.useRouter)(),
            k = (0, r.useRef)(null),
            y = (0, i.v9)(Z.S5),
            P = (0, i.v9)(Z.nS),
            _ = (0, i.v9)(Z.M9),
            N = (0, i.v9)(Z.Y2),
            O = (0, i.v9)(Z._8),
            T = (0, i.v9)(Z.AA),
            G = (0, i.v9)(Z.pG),
            F = (0, i.v9)(Z.Cx),
            A = (0, i.v9)(Z.cC),
            I = (0, m.o)().onUpdatePageViewByUrl,
            E = (0, M.Z)(),
            Q = E.nextScene,
            K = E.onNextScene,
            $ = R({
              detailProject: _,
              configProtectPassword: A,
              passwordTourCookie: b,
              listProjectGuardOpenedCookie: x,
            }),
            nn = $.isOpenGuardPassword,
            ne = $.onCheckGuardPassword,
            nt = (0, h.Z)({ listFormCaptureOpenedCookie: w }),
            no = nt.onCloseFormCapture,
            nr = nt.formCaptureSelected,
            ni = nt.isVisibleFormCapture,
            na = nt.formCaptureConfigGlobal,
            nl = nt.formCaptureConfigSelected,
            nc = nt.onCheckShowFormCaptureOnScene,
            nu = nt.onCheckShowFormCaptureOnProject,
            ns = (0, r.useMemo)(
              function () {
                return y && (null == y ? void 0 : y.length)
                  ? (0, v.Yw)(y)
                  : void 0;
              },
              [y]
            );
          return (
            (0, r.useEffect),
            (0, r.useEffect)(
              function () {
                null === ni && (null == _ ? void 0 : _.id) && nu();
              },
              [null == _ ? void 0 : _.id]
            ),
            (0, r.useEffect)(
              function () {
                !1 === ni && N && nc(N);
              },
              [ni, N]
            ),
            nn
              ? (0, o.jsx)(V, {
                  scene: N,
                  password: null == A ? void 0 : A.password,
                  onSubmit: ne,
                })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsxs)(j, {
                      ref: k,
                      children: [
                        p && (0, o.jsx)(Y, {}),
                        (0, o.jsxs)("div", {
                          className: "mainContent",
                          children: [
                            !!P &&
                              (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (null == T ? void 0 : T.selected) ===
                                    "blank" &&
                                    (0, o.jsx)(J, {
                                      onChangeScene: K,
                                      onNextScene: K.bind(this, Q),
                                    }),
                                  (null == T ? void 0 : T.selected) ===
                                    "wall" &&
                                    (0, o.jsx)(U, {
                                      onChangeScene: K,
                                      onNextScene: K.bind(this, Q),
                                    }),
                                  (null == T ? void 0 : T.selected) ===
                                    "basekrpano" &&
                                    (0, o.jsx)(D, {
                                      onChangeScene: K,
                                      onNextScene: K.bind(this, Q),
                                    }),
                                  (null == T ? void 0 : T.selected) ===
                                    "custom1" &&
                                    (0, o.jsx)(z, {
                                      onChangeScene: K,
                                      onNextScene: K.bind(this, Q),
                                    }),
                                  (!(null == T ? void 0 : T.selected) ||
                                    (null == T ? void 0 : T.selected) ===
                                      "default") &&
                                    (0, o.jsx)(H, {
                                      onChangeScene: K,
                                      onNextScene: K.bind(this, Q),
                                    }),
                                ],
                              }),
                            (0, o.jsx)(L, {}),
                            !!G.length &&
                              (0, o.jsx)(X, {
                                listCallToAction: G,
                                callToActionConfig: F,
                              }),
                            (0, o.jsx)(W, {}),
                            !!(null == nr ? void 0 : nr.id) &&
                              (0, o.jsx)(B, {
                                onCancel: no,
                                visible: ni,
                                formCaptureSelected: nr,
                                formCaptureConfigGlobal: na,
                                formCaptureConfigSelected: nl,
                              }),
                          ],
                        }),
                        (0, o.jsx)(f, {
                          selected:
                            (null == T ? void 0 : T.selected) || "default",
                          primaryColor:
                            null == T
                              ? void 0
                              : null === (e = T.config) || void 0 === e
                              ? void 0
                              : e.primaryColor,
                          secondaryColor:
                            (null == T ? void 0 : T.selected) === "custom1"
                              ? null == T
                                ? void 0
                                : null === (t = T.config) || void 0 === t
                                ? void 0
                                : t.secondaryColor
                              : null == T
                              ? void 0
                              : null === (l = T.config) || void 0 === l
                              ? void 0
                              : l.primaryColor,
                          textColor:
                            null == T
                              ? void 0
                              : null === (c = T.config) || void 0 === c
                              ? void 0
                              : c.textColor,
                          popupBgColor: null == O ? void 0 : O.bgColor,
                          popupTextColor: null == O ? void 0 : O.textColor,
                        }),
                      ],
                    }),
                    !!(null == ns ? void 0 : ns.htmls) &&
                      (0, o.jsx)(q, { html: null == ns ? void 0 : ns.htmls }),
                    !!(null == ns ? void 0 : ns.scripts) &&
                      (0, o.jsx)(q, { html: null == ns ? void 0 : ns.scripts }),
                  ],
                })
          );
        });
    },
    17230: function (n, e, t) {
      t.d(e, {
        o: function () {
          return s;
        },
      });
      var o = t(7400),
        r = t(27556),
        i = r.sk ? void 0 : window,
        a = function () {
          return {
            pageview: function (n, e, t, o) {
              !r.sk &&
                i.gtag &&
                i.gtag("event", "page_view", {
                  page_title: n,
                  page_location: e,
                  page_path: t,
                  send_to: o,
                });
            },
            event: function (n) {
              var e = n.eventName,
                t = n.sceneName,
                o = n.hotspotType,
                a = n.hotspotName;
              !r.sk &&
                i.gtag &&
                i.gtag("event", e, {
                  hotspotName: a,
                  hotspotType: o,
                  sceneName: t,
                });
            },
          };
        },
        l = t(11163),
        c = t(67294),
        u = t(25617),
        s = function () {
          var n = (0, l.useRouter)(),
            e = (0, u.v9)(o.nS),
            t = (0, u.v9)(o.QR),
            r = (0, u.v9)(o.J6),
            i = (0, u.v9)(o.EC),
            s = (0, u.v9)(o.Y2),
            d = (0, u.v9)(o.aS),
            p = (0, c.useCallback)(
              function () {
                var o = ""
                    .concat(null == s ? void 0 : s.title, " | ")
                    .concat(
                      ((null == t ? void 0 : t.title) || e).toUpperCase()
                    ),
                  l =
                    (null == t ? void 0 : t.description) ||
                    "Panoee - Virtual Tour 360",
                  c = window.origin + n.asPath;
                r && a().pageview(o, l, c, r), i && a().pageview(o, l, c, i);
              },
              [e, t, r, s, n.asPath, i]
            ),
            f = (0, c.useCallback)(
              function () {
                if (d) {
                  var n = d.title,
                    e = d.type;
                  d.title &&
                    a().event({
                      eventName: "clicked-hotspot-name-".concat(n),
                      sceneName: (null == s ? void 0 : s.title) || "",
                      hotspotType: e,
                      hotspotName: n,
                    }),
                    a().event({
                      eventName: "clicked-hotspot-type-".concat(e),
                      sceneName: (null == s ? void 0 : s.title) || "",
                      hotspotType: e,
                      hotspotName: n,
                    });
                }
              },
              [d, s]
            );
          return (0, c.useMemo)(
            function () {
              return { onUpdatePageViewByUrl: p, onPushEventClickedHotspot: f };
            },
            [p, f]
          );
        };
    },
  },
]);
//# sourceMappingURL=4974.3f3673660d9f939b.js.map
