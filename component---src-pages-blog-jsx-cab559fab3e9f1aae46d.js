(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",s="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:i},l.a.createElement("h2",{className:s},t)),l.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),i="mb-6",s="font-semibold text-gray-900 pb-1",c="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,l=e.description,o=e.link,m=void 0!==o&&o,u=e.internal;return t=void 0!==u&&u?r.a.createElement(n.Link,{to:m},a):r.a.createElement("a",{href:m},a),r.a.createElement("div",{className:i},r.a.createElement("h3",{className:s+" "+(m?"hover:underline hover:text-black":"")},m?t:a),r.a.createElement("p",{className:c},l))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("6uTu"),s=a("ivnd"),c="text-lg font-bold",o="underline";t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Not found"}),l.a.createElement("h1",{className:c},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:o,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("STHm"),i=a("hbLQ"),s=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(i.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},c=a("eNIv"),o=a("6uTu"),m=a("ivnd"),u=a("pssB"),d=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(o.a,null,l.a.createElement(m.a,{title:"Blog"}),l.a.createElement(c.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(s,{posts:a})):l.a.createElement(u.default,null)},"3587809548")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-cab559fab3e9f1aae46d.js.map