(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{202:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("使用加速器可以提升获取Docker官方镜像的速度")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("推荐安装1.10.0以上版本的Docker客户端，参考文档 "),e("a",{attrs:{href:"https://yq.aliyun.com/articles/110806",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-ce"),e("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("针对Docker客户端版本大于 1.10.0 的用户")]),t._v(" "),e("p",[t._v("您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器")]),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"阿里云镜像加速器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云镜像加速器"}},[this._v("#")]),this._v(" 阿里云镜像加速器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("加速器地址")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("https://pujb7oa3.mirror.aliyuncs.com")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"操作文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作文档"}},[this._v("#")]),this._v(" 操作文档")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[this._v("#")]),this._v(" "),s("strong",[this._v("Ubuntu")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_1-安装／升级docker客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装／升级docker客户端"}},[this._v("#")]),this._v(" 1. 安装／升级Docker客户端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_2-配置镜像加速器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置镜像加速器"}},[this._v("#")]),this._v(" 2. 配置镜像加速器")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/docker\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'EOF\'\n\n# 修改配置\n{\n  "registry-mirrors": ["https://pujb7oa3.mirror.aliyuncs.com"]\n}\nEOF')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新加载daemon.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])])}],!1,null,null,null);s.default=a.exports}}]);