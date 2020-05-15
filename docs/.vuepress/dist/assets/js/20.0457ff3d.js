(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{265:function(e,t,i){"use strict";i.r(t);var r=i(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"lifecycle"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle"}},[e._v("#")]),e._v(" Lifecycle")]),e._v(" "),i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),i("p",[e._v("Fjord is an admin interface for editing and managing data, a content management system. It is possible to write your own packages or extend existing packages. In order to understand how and where it makes most sense to do this, it is important to understand the lifecycle of the Fjord application.")]),e._v(" "),i("h2",{attrs:{id:"lifecycle-overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-overview"}},[e._v("#")]),e._v(" Lifecycle Overview")]),e._v(" "),i("h3",{attrs:{id:"first-things"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-things"}},[e._v("#")]),e._v(" First Things")]),e._v(" "),i("p",[e._v("Fjord comes to life in its main ServiceProvider "),i("code",[e._v("Fjord\\FjordServiceProvider")]),e._v(" when the Fjord application instance gets created in the "),i("code",[e._v("register")]),e._v(" method of the provider.")]),e._v(" "),i("h3",{attrs:{id:"kernel"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kernel"}},[e._v("#")]),e._v(" Kernel")]),e._v(" "),i("p",[e._v("Next, the kernel is created and initialized. The kernel defines an array of "),i("code",[e._v("bootstrappers")]),e._v(" that will be run before the request is executed. This contains the discovering of all packages that are set in its "),i("code",[e._v("composer.json")]),e._v(" and the registration of its ServiceProviders.")]),e._v(" "),i("p",[e._v("As well the kernel builds the Fjord Vue application befor creating the "),i("code",[e._v("fjord::app")]),e._v(" view. This is done by checking the data that is passed to the view, preparing the props and then executing all extensions for the given vue component.")])])}),[],!1,null,null,null);t.default=a.exports}}]);