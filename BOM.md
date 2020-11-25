## 相关词汇：

1. ### API:

应用程序接口（Application Programming Interface），在JS中以函数，类，方法，属性等显示。

2. ### GUI：

图形用户界面（Graphical User Interface），以画面和键鼠操作的形式体现。

3. ### CLI：

命令行界面（Command-Line Interface），以命令输入和输出为体现。
***
## BOM:

浏览器对象模型（Browser Object Model），一般来说泛指那些浏览器理提供的除JS内置API以外的，且与DOM操作无关的API。如：alert,prompt,confirm,setTimeout等。

完善的DOM API一般认为是以下浏览器提供的对象:

- screen：显示设备信息
    - width/height:显示设备宽高像素（页面相关的宽高在DOM API中）
    - colorDepth/pixelDepth:色深，即色彩多样性，但现代开发中基本无用
    - availHeight/Width:显示设备的屏幕的可用高度/宽度，不包含window任务栏的高度
- history:浏览器历史记录
- location：url地址栏信息
    - host:主机
    - port:端口
    - protocol：协议
    - 
- navigator：浏览器配置信息
    - appCodeName:"Mozilla"，历史遗留原因
    - appName:"Netscape"，历史遗留原因
    - user-Agent:用户代理，发送HTTP请求时使用。

这些对象分别为我们提供了页面与浏览器相关的各种信息。