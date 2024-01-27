---
title: Themes
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionic App Themes | Change Default App Background Themes & Colors</title>
  <meta
    name="description"
    content="Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes."
  />
</head>

提供了几个全局变量，这些变量可用于更改整个组件的默认主题。[应用程序颜色](#application-colors)可用于改变大多数 Ionic 组件的外观，而[阶梯颜色](#stepped-colors)则可在某些 Ionic 组件中用作变体。

## 应用颜色

Ionic 中多处使用了应用程序颜色。这些颜色对于轻松创建深色主题或与品牌相匹配的主题非常有用。

值得注意的是，背景和文本颜色变量还需要以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>设置一个 rgb 变量。请参阅 [The Alpha Problem](advanced.md#the-alpha-problem)，了解为什么还需要 `rgb` 属性。

| Name                                       | Description                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | Background color of the entire app                   |
| `--ion-background-color-rgb`               | Background color of the entire app, rgb format       |
| `--ion-text-color`                         | Text color of the entire app                         |
| `--ion-text-color-rgb`                     | Text color of the entire app, rgb format             |
| `--ion-backdrop-color`                     | Color of the Backdrop component                      |
| `--ion-backdrop-opacity`                   | Opacity of the Backdrop component                    |
| `--ion-overlay-background-color`           | Background color of the overlays                     |
| `--ion-border-color`                       | Border color                                         |
| `--ion-box-shadow-color`                   | Box shadow color                                     |
| `--ion-tab-bar-background`                 | Background of the Tab Bar                            |
| `--ion-tab-bar-background-focused`         | Background of the focused Tab Bar                    |
| `--ion-tab-bar-border-color`               | Border color of the Tab Bar                          |
| `--ion-tab-bar-color`                      | Color of the Tab Bar                                 |
| `--ion-tab-bar-color-selected`             | Color of the selected Tab Button                     |
| `--ion-toolbar-background`                 | Background of the Toolbar                            |
| `--ion-toolbar-border-color`               | Border color of the Toolbar                          |
| `--ion-toolbar-color`                      | Color of the components in the Toolbar               |
| `--ion-toolbar-segment-color`              | Color of the Segment Buttons in the Toolbar          |
| `--ion-toolbar-segment-color-checked`      | Color of the checked Segment Buttons in the Toolbar  |
| `--ion-toolbar-segment-background`         | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-background-checked` | Background of the Segment Buttons in the Toolbar     |
| `--ion-toolbar-segment-indicator-color`    | Color of the Segment Button indicator in the Toolbar |
| `--ion-item-background`                    | Background of the Item                               |
| `--ion-item-border-color`                  | Border color of the Item                             |
| `--ion-item-color`                         | Color of the components in the Item                  |
| `--ion-placeholder-color`                  | Color of the placeholder in Inputs                   |

## 阶梯颜色

在探索了定制 Ionic 主题的不同方法后，我们发现不能只使用一种背景或文字颜色。为了在整个设计中体现重要性和深度，我们需要使用不同深浅的背景和文字颜色。为了适应这种模式，我们创建了阶梯颜色。

虽然更新背景（`--ion-background-color`）和文本（`--ion-text-color`）变量会改变大多数组件的外观，但某些 Ionic 组件的外观可能会出现偏差或破损。在应用深色主题时，这种情况会更加明显。

在某些组件中，我们使用比背景深或比文本浅的色调。例如，项目标题文本可能需要使用 <CodeColor color="#404040">#404040</CodeColor>，这比我们默认的文本颜色浅一些。同时，加载组件的背景颜色比白色深一些，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor> 。我们使用阶梯颜色来定义这些细微变化。在更新应用程序的背景或文本颜色时，更新阶梯颜色非常重要。

默认情况下，Ionic 的阶梯色从默认背景颜色值 <CodeColor color="#ffffffff">#ffffffff</CodeColor> 开始，并与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 混合，百分比不断增加。阶跃色的完整列表显示在下面的生成器中。

## 阶跃色彩发生器

为您的应用程序创建自定义背景和文本颜色主题。更新以下背景或文本颜色的十六进制值，然后将生成的代码直接复制并粘贴到您的 Ionic 项目中。

<SteppedColorGenerator />
