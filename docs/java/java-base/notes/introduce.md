---
title: Java简介
author: 沧海
---
<LastUpdated />

## 什么是Java？

不是啥神秘的东西，就是一门计算机编程语言，不要怂，直接就是干。

## Java历史

> 90年代初，在美国sun公司有一名叫做James Gosling（詹姆斯·高斯林，被称为java之父）的工程师带领着他的团队开发出了一款编程语言，名字叫做“Oak”，之后改名为Java，即Java最初叫做Oak。

历史长河就不细细探究了，但是我们必须得知道的是：
1. 我们的Java之父？
- James Gosling（詹姆斯·高斯林）

2. 第一个版本发布？
- 1996年1月，sun公司发布了java第一个版本。

3. 它是哪家公司的？
- 2009年，sun公司被Oracle（甲骨文）公司收购，即java现在属于Oracle公司。

## Java版本概览

```mermaid
J2SE 1.1.4		Sparkler	宝石				        1997-09-12
J2SE 1.1.5		Pumpkin		南瓜				        1997-12-13
J2SE 1.1.6		Abigail		阿比盖尔--女子名		    1998-04-24
J2SE 1.1.7		Brutus		布鲁图--古罗马政治家和将军	1998-09-28
J2SE 1.1.8		Chelsea		切尔西--城市名			1999-04-08
J2SE 1.2		Playground	运动场				    1998-12-04
J2SE 1.2.1		none		无				        1999-03-30
J2SE 1.2.2		Cricket		蟋蟀				        1999-07-08
J2SE 1.3		Kestrel		美洲红隼(sǔn)			2000-05-08
J2SE 1.3.1		Ladybird	瓢虫				        2001-05-17
J2SE 1.4.0		Merlin		灰背隼				    2002-02-13
J2SE 1.4.1		grasshopper	蚱蜢				        2002-09-16
J2SE 1.4.2		Mantis		螳螂				        2003-06-26
JavaSE 5.0 (1.5.0)	Tiger		老虎	
JavaSE 5.1 (1.5.1)	Dragonfly	蜻蜓	
JavaSE 6.0 (1.6.0)	Mustang		野马
JavaSE 7.0 (1.7.0)	Dolphin		海豚
JavaSE 8.0 (1.8.0)	2014年发布，目前市面上最常用的版本
JavaSE 9.0          2017年9月发布，从次之后每隔半年发布一个新的版本
JavaSE 10
JavaSE 11           LTS长期支持版本
JavaSE 12
JavaSE 13
JavaSE 14
JavaSE 15
JavaSE 16           
JavaSE 17           2021年9月发布  LTS长期支持版本
```

版本这么多，我们选哪一款？
- 目前市面上公司里最常用的版本是javaSE 8.0，所以建议可以直接使用这个版本

## Java语言平台

- JavaSE（Java Platform Standard Edition）java标准版
以前叫做J2SE，5.0版本后改名叫做JAVASE，主要用于桌面应用程序的开发，该技术体系是后两者的基础，可以认为这是Javase基础知识，如果打算以后做Android开发，也需要先学习这部分的知识。

- JavaME（Java Platform Micro Edition）java小型版
以前叫做J2ME，后来更名为JAVAME，是为开发电子消费产品和嵌入式设备提供的解决方案。

- JavaEE（Java Platform Enterprise Edition）java企业版(JakartaEE)
以前叫做J2EE，后来更名为JAVAEE，是为开发企业环境下的应用程序提供的一套解决方案，主要针对于Web应用程序开发，比如淘宝的服务器端、京东的服务器端、12306服务器端等大部分都是java开发的，这个也是Java开发相关人员主要的工作方向。
在2018年3月初，Oracle公司将JavaEE移交给开源组织Eclipse基金会管理，因此JavaEE被改名为JakartaEE。

## JRE和JDK

- 什么是JVM？

JVM（java virtual machine）java虚拟机，我们编写的程序是会由这个虚拟机来执行。

- 什么是JRE？

JRE（Java Runtime Environment）即Java运行时环境，主要负责运行Java程序。

- 什么是JDK？

JDK（Java Development Kit）即Java开发工具包，主要用来开发Java程序，给Java开发人员使用的。后面我们需要下载一个jdk来安装使用。

- JVM，JRE和JDK的关系

Java程序员开发完程序之后需要编译运行，因此JDK包含了JRE，JRE包含了JVM。安装JDK之后，就不用再去特意安装JRE了，JRE中包含了JVM（Java虚拟机）。对于那些只希望运行Java程序的人来说，只需要安装JRE即可。

[]