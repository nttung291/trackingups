/*!
 * froala_editor v2.8.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */

!function (n) {
	"function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function (e, t) {
		return t === undefined && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t)
	} : n(window.jQuery)
}(function (a) {
	a.extend(a.FE.DEFAULTS, {charCounterMax: -1, charCounterCount: !0}), a.FE.PLUGINS.charCounter = function (n) {
		var r;

		function o() {
			return (n.el.textContent || "").replace(/\u200B/g, "").length
		}

		function e(e) {
			if (n.opts.charCounterMax < 0) return !0;
			if (o() < n.opts.charCounterMax) return !0;
			var t = e.which;
			return !(!n.keys.ctrlKey(e) && n.keys.isCharacter(t) || t === a.FE.KEYCODE.IME) || (e.preventDefault(), e.stopPropagation(), n.events.trigger("charCounter.exceeded"), !1)
		}

		function t(e) {
			return n.opts.charCounterMax < 0 ? e : a("<div>").html(e).text().length + o() <= n.opts.charCounterMax ? e : (n.events.trigger("charCounter.exceeded"), "")
		}

		function u() {
			if (n.opts.charCounterCount) {
				var e = o() + (0 < n.opts.charCounterMax ? "/" + n.opts.charCounterMax : "");
				r.text(e), n.opts.toolbarBottom && r.css("margin-bottom", n.$tb.outerHeight(!0));
				var t = n.$wp.get(0).offsetWidth - n.$wp.get(0).clientWidth;
				0 <= t && ("rtl" == n.opts.direction ? r.css("margin-left", t) : r.css("margin-right", t))
			}
		}

		return {
			_init: function () {
				return !!n.$wp && !!n.opts.charCounterCount && ((r = a('<span class="fr-counter"></span>')).css("bottom", n.$wp.css("border-bottom-width")), n.$box.append(r), n.events.on("keydown", e, !0), n.events.on("paste.afterCleanup", t), n.events.on("keyup contentChanged input", function () {
					n.events.trigger("charCounter.update")
				}), n.events.on("charCounter.update", u), n.events.trigger("charCounter.update"), void n.events.on("destroy", function () {
					a(n.o_win).off("resize.char" + n.id), r.removeData().remove(), r = null
				}))
			}, count: o
		}
	}
});
