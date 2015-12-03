---
layout: post_web
date: 2015-11-25 19:25
public: true
category: web
tags:
  - javascript
  - css
  - svg
title: CSS Animations on a SVG File
demo: index.html
---

I wanted to have a colour change logo for [Myles.City](http://myles.city/). It turned out really simple to do with CSS animations and a SVG file.

```css
@keyframes multicolour {
  0% {
    fill: #f00;
	stroke: #00ffff;
  }
  
  25% {
    fill: #f50;
	stroke: #00aaff;
  }
  
  50% {
    fill: #ff0;
	stroke: #0000ff;
  }
  
  75% {
    fill: #5f0;
	stroke: #aa00ff;
  }
  
  100% {
    fill: #f00;
	stroke: #00ffff;
  }
}

svg * {
	animation-name: multicolour;
	animation-duration: 5s;
	animation-timing-function: ease;
	animation-iteration-count: infinite;
}
```