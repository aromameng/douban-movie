# douban-movie (豆瓣电影)

微信小程序学习之作，参考 [https://github.com/bruintong/wechat-webapp-douban-location](https://github.com/bruintong/wechat-webapp-douban-location) 

功能待完善...、

### 学习笔记

1. bindtap catchtap 都是点击事件，区别在于后者会阻止冒泡事件向上冒泡。

2. 背景图片用本地图片解析不了，得用base64格式或网络图片代替（先上传到服务器）。

3. 发送请求时，get请求和post请求，header设置不一样:

get 请求：

    header:{
                "content-type":'application/json'
            }

post请求：

    header:{
            "content-type":'application/x-www-form-urlencoded'
        }

未完待续...

### 小感

只是做了几个简单的页面，对小程序了解不是特别深，但还是有些大概的直观感受。

a. 微信官方的UI，提供了很多好看的组件，还有官方的SDK插件，提高了开发效率

b. 限制太多，就标签这块，最常用的是view和text,太少了。div/ul/li/p 等常用的标签都不支持，可读性很差

c. 因为熟悉vue，所以入手还是挺快的，但是对比起来，灵活度上低很多。过滤器，指令等都不支持，数据绑定不支持复杂的js操作，连获取字符串长度都不支持...

d. 样式不支持sass或less写法,拖慢的开发效率

e. 优点也还是有的，兼容性方面会比web端要好很多，毕竟是只针对微信平台的。另外结构清晰，免去了很多构建工具配置的苦恼...

### 截图

首页：

![首页](/images/20170802210602.png)

详情页：

![详情页](/images/20170802210704.png)

影院热映：

![影院热映](/images/20170802210707.png)
