(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{215:function(v,a,_){"use strict";_.r(a);var t=_(0),r=Object(t.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"java设计原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java设计原则"}},[v._v("#")]),v._v(" Java设计原则")]),v._v(" "),_("p",[v._v("开：开闭原则")]),v._v(" "),_("p",[v._v("口：接口隔离原则")]),v._v(" "),_("p",[v._v("合：合成复用原则")]),v._v(" "),_("p",[v._v("里：里氏替换原则")]),v._v(" "),_("p",[v._v("最：迪米特法则（最少知识原则）")]),v._v(" "),_("p",[v._v("单：单一职责原则")]),v._v(" "),_("p",[v._v("依：依赖倒置原则")]),v._v(" "),_("h2",{attrs:{id:"单一职责原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则"}},[v._v("#")]),v._v(" 单一职责原则")]),v._v(" "),_("h4",{attrs:{id:"基本介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),_("p",[v._v("单一职责原则（ Single Responsibility Principle ）是指：")]),v._v(" "),_("p",[v._v("对类来说的，即一个类应该只负责一项职责。如类A负责两个不同职责：职责1，职责2。 当职责1需求变更而改变A时，可能造成职责2执行错误，所以需要将类A的粒度分解为 A1，A2")]),v._v(" "),_("h4",{attrs:{id:"注意事项和细节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项和细节"}},[v._v("#")]),v._v(" 注意事项和细节")]),v._v(" "),_("ul",[_("li",[v._v("降低类的复杂度，一个类只负责一项职责。 "),_("strong",[v._v("（一个类只做一种事，一个方法只做一件事）")])]),v._v(" "),_("li",[v._v("提高类的可读性，可维护性")]),v._v(" "),_("li",[v._v("降低变更引起的风险")]),v._v(" "),_("li",[v._v("通常情况下，我们应当遵守单一职责原则，只有逻辑足够简单，才可以在代码级违 反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则")])]),v._v(" "),_("h2",{attrs:{id:"接口隔离原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口隔离原则"}},[v._v("#")]),v._v(" 接口隔离原则")]),v._v(" "),_("h4",{attrs:{id:"基本介绍-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-2"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),_("p",[v._v("接口隔离原则(Interface Segregation Principle) 是指：")]),v._v(" "),_("p",[v._v("客户端不应该依赖它不需要的接 口，即一个类对另一个类的依赖 应该建立在最小的接口上")]),v._v(" "),_("h2",{attrs:{id:"依赖倒置原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则"}},[v._v("#")]),v._v(" 依赖倒置原则")]),v._v(" "),_("h4",{attrs:{id:"基本介绍-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-3"}},[v._v("#")]),v._v(" 基本介绍")]),v._v(" "),_("p",[v._v("依赖倒置原则（Dependencies Inversion Principle）是指：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("高层模块不应该依赖底层模块，二者应该依赖其抽象")])]),v._v(" "),_("li",[_("p",[v._v("抽象不应该依赖细节，两者都应该依赖抽象")])]),v._v(" "),_("li",[_("p",[v._v("依赖倒置原则的核心思想是面向接口编程")])]),v._v(" "),_("li",[_("p",[v._v("依赖倒置原则是基于这样的设计理念：相对于细节的多边形，抽象的东西要稳定得多。以抽象为基础搭建架构要稳定得多。在Java中，抽象是指Interface或Abstract，细节就是具体的实现类")])]),v._v(" "),_("li",[_("p",[v._v("使用接口或抽象类的目的是制定好规范，而不涉及任何具体操作，把展示细节的操作交给具体注意事项和细节")])])]),v._v(" "),_("h4",{attrs:{id:"注意事项和细节："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项和细节："}},[v._v("#")]),v._v(" 注意事项和细节：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("低层模块尽量都要有抽象类或接口，或两者都有，程序稳定性更好")])]),v._v(" "),_("li",[_("p",[v._v("变量的声明类型尽量是抽象类或接口，这样我们变量引用和实际对象间就存在一个缓冲层，有利于程序拓展和优化")])]),v._v(" "),_("li",[_("p",[v._v("继承时遵循里氏替换原则")])])]),v._v(" "),_("h2",{attrs:{id:"里氏替换原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则"}},[v._v("#")]),v._v(" 里氏替换原则")]),v._v(" "),_("h4",{attrs:{id:"里氏替换原则是什么："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则是什么："}},[v._v("#")]),v._v(" 里氏替换原则是什么：")]),v._v(" "),_("ul",[_("li",[v._v("里氏替换原则（Liskow Substitution Principle）在1988年，由麻省理工学院的一名姓里的女士提出。")]),v._v(" "),_("li",[v._v("所有引用基类的地方都可以透明的使用其子类的对象")]),v._v(" "),_("li",[v._v("在使用继承时，遵循里氏替换原则，在子类中尽量不要重写父类的方法")]),v._v(" "),_("li",[v._v("里氏替换原则告诉我们，继承实际上让两个类的耦合增强了，在适当情况下可以通过聚合，组合，依赖，来解决问题")])]),v._v(" "),_("h4",{attrs:{id:"怎么做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么做"}},[v._v("#")]),v._v(" 怎么做")]),v._v(" "),_("ul",[_("li",[v._v("通俗的做法：原来的父类和子类都继承一个更加通俗的基类，原有继承关系去掉采用依赖，聚合，组合等关系代替")])]),v._v(" "),_("h2",{attrs:{id:"开闭原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则"}},[v._v("#")]),v._v(" 开闭原则")]),v._v(" "),_("h4",{attrs:{id:"开闭原则是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则是什么"}},[v._v("#")]),v._v(" 开闭原则是什么")]),v._v(" "),_("ul",[_("li",[v._v("开闭原则（Open Closed Principle）是编程中最基础，最重要的设计原则")]),v._v(" "),_("li",[v._v("一个软件、模块或函数应该对扩展开放（"),_("strong",[v._v("对服务提供方而言")]),v._v("），对修改关闭（"),_("strong",[v._v("对服务消费方而言")]),v._v("）。用抽象构建框架，用实现扩展细节")]),v._v(" "),_("li",[v._v("当软件需求发生变化时，尽量通过扩展软件实体行为来实现变化，而不是通过修改已有代码来实现变化")]),v._v(" "),_("li",[v._v("编程中遵循其他原则，以及使用设计模式的目的就是遵循开闭原则")])]),v._v(" "),_("h2",{attrs:{id:"迪米特法则（最少知识原则）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则（最少知识原则）"}},[v._v("#")]),v._v(" 迪米特法则（最少知识原则）")]),v._v(" "),_("h4",{attrs:{id:"迪米特法则是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迪米特法则是什么"}},[v._v("#")]),v._v(" 迪米特法则是什么")]),v._v(" "),_("ul",[_("li",[v._v("迪米特法则（Demeter Principle）又叫最少知识原则，即一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部，对外除了提供public方法，不对外泄露任何信息")]),v._v(" "),_("li",[v._v("一个对象应该对其他对象保持最少的了解")]),v._v(" "),_("li",[v._v("类与类之间关系越密切，耦合度越大")]),v._v(" "),_("li",[v._v("迪米特法则还有个更简单的定义：只与直接的朋友通信")]),v._v(" "),_("li",[v._v("**直接的朋友 **：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说两个对象之间是朋友关系。耦合的方式有很多，依赖、关联、组合、聚合等。其中，我们称出现成员变量，方法参数，方法返回值中的类为直接朋友，而出现在局部变量中的类不是直接朋友。也就是说，陌生的类最好不要以局部变量的形式出现在类的内部")])]),v._v(" "),_("h4",{attrs:{id:"注意事项和细节-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项和细节-2"}},[v._v("#")]),v._v(" 注意事项和细节")]),v._v(" "),_("ul",[_("li",[v._v("迪米特法则的核心是降低类之间的耦合")]),v._v(" "),_("li",[v._v("但是注意，由于每个类都减少不了不必要的依赖，因此迪米特法则知识要求降低类之间的耦合关系，并不是完全没有耦合关系")])]),v._v(" "),_("h2",{attrs:{id:"合成复用原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#合成复用原则"}},[v._v("#")]),v._v(" 合成复用原则")]),v._v(" "),_("p",[v._v("尽量使用合成、聚合的方式，而不是继承")]),v._v(" "),_("h2",{attrs:{id:"设计原则的核心思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计原则的核心思想"}},[v._v("#")]),v._v(" 设计原则的核心思想")]),v._v(" "),_("ul",[_("li",[v._v("找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起")]),v._v(" "),_("li",[v._v("针对接口编程，而不是针对实现编程")]),v._v(" "),_("li",[v._v("为了交互对象之间的松耦合设计而努力")])])])}],!1,null,null,null);a.default=r.exports}}]);