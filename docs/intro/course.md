---
title: 基础教程
---

<head>
  <title>后端基础配置教程 | Aichat web docs</title>
  <meta
    name="description"
    content="To get started with Ionic Framework, the only requirement is a Node & npm environment. Learn what environment setup is required for your Ionic apps."
  />
</head>

后端配置指南.

:::note
部分功能社区版不支持，详情见版本功能说明
:::

## 营销管理

### 活动列表

#### 注册赠额

- 天数 -1 为永久套餐
- tonkens ： 根据字数计费（自定义可用模型）
- 普通聊天积分：对话次数计费（对话模型自定义可用模型）
- 高级聊天积分： 对话次数计费（对话模型自定义可用模型）
- 绘图积分： 次数计费（绘画模型自定义可用模型） 
- 类型： 单位时间内限额，不累计叠加
[图1](static/img/course/huodong01.png)

#### 邀请注册活动配置

被邀请人与邀请人会额外获得对应套餐，与注册赠额无关。

### 兑换码列表

支持生成兑换码对接发卡平台，兑换码支持批量导出。


### 套餐管理


## AI管理

### ai平台管理

### ai模型管理

### ai助手管理（assistants）

## 扩展模块

### Gpts 应用管理


### 插件管理

## 文件列表

### logo


### 附件


## 站点管理

### 网站基础地址

该地址为前端域名，必填，否则支付等功能无法使用

### 支持html代码自定义网页元素

### 全局脚本

可自行添加js脚本，无需输入script

### 邮箱后缀限制

@qq.com,@163.com,@gmail.com,@outlook.com,@yahoo.com,@hotmail.com,@live.com

配置后可限制注册邮箱地址

### 仅限邀请码注册

开启后无邀请码不可注册

### 注册后审核

开启后需审核，根据下面的选项控制注册后是否可以进行下一步操作。

### 未登录隐藏聊天内容

开启后自动跳转登录界面，不登录前端内容不可见

### 聊天窗口欢迎词

该配置为新建对话后对话框默认输出的内容

### 邮箱配置

- 密码非邮箱登录密码，请自行获取授权码
- 用户名与发件人必须同时为邮箱地址

### 短信配置

国内短信需备案域名，非备案域名可配置阿里云海外短信

### 支付配置

使用在线支付必须配置网站基址，最好是https

### 微信配置



### 聊天配置

### 绘画配置

开启后即可使用系统内置的EmbeddingMjProxyDraw，该功能对服务器性能要求很高，低配置请勿启用

