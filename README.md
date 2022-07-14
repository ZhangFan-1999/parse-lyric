# parse-lyric

用于解析歌词并且提供了一些滚动方法



### 1、前提：前端的dom结构

```html
<div>
	<ul>
		<li>歌词渲染再这里</li>
	</ul>
</div>
```

注意：真正要滚动的元素是ul，外层的div需要相对定位，ul需要绝对定位，改变的是ul的top属性



### 2、引入lyric.js后：

使用方法很简单，将lyric.js文件下载后放到自己的项目文件夹中即可

```js
const lyric=new Lyric(参数)
//参数：服务器获取到的歌词文本
```



### 3、相关API

```
_init()
从服务器获取到歌词后初始化歌词

_timeFomatter(currentTime)
用于格式化歌词，获取到当前歌词的行数，currentTime表示audio标签的当前时间，返回值是当前歌词的行数

_scroll(currentLine,eleClassName)
用于滚动eleClassName元素，传入滚动元素的css选择器即可，参数currentLine表示当前和歌词所在的行数

_scrollToTop(eleClassName)
用于滚动eleClassName元素到顶部

_scrollToCurrent(currentLine,eleClassName)
强制滚动到当前正在播放的歌词，currentLine表示当前歌词的行数，eleClassName表示滚动的元素
```

