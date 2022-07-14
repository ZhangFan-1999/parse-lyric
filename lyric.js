const reg = /\[(\d{2}:\d{2})\.\d{2,3}\](.+)/g

export default class Lyric{
  constructor(lrcStr){
    this.lrcStr=lrcStr
    this.lrcArr=[]
    this.timeArr=[]
  }
  // 歌词初始化
  _init(){
    let tmp = reg.exec(this.lrcStr)
    // 循环匹配歌词直到匹配不到为止
    while (tmp) {
      this.timeArr.push(tmp[1])
      this.lrcArr.push(tmp[2])
      tmp = reg.exec(this.lrcStr)
    }
  }
  //格式化时间获取当前歌词的行数
  _timeFomatter(currentTime){
    const minutes = parseInt(currentTime / 60)
    const seconds = parseInt(currentTime % 60)
    // 当前格式化好的时间
    const timeStr = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    const index = this.timeArr.findIndex(item => item === timeStr)
    return index
  }

  // 歌词滚动
  _scroll(currentLine,eleClassName){
    const eleDom=document.querySelector(eleClassName)
    console.log(eleDom);
    if(eleDom,currentLine>-1){
      // 歌词播放到第七行再开始滚动eleDom
      if(currentLine>6){
        eleDom.style.top = -(currentLine - 5) * 35 + 'px';
      }
      for (var i = 0; i < eleDom.children.length; i++) {
        eleDom.children[i].className = ' '
      }
      // 给当前播放的歌词高亮显示
      eleDom.children[currentLine].className = 'active'
    }
  }

  // 滚动歌词到顶部
  _scrollToTop(eleClassName){
    const eleDom = document.querySelector(eleClassName)
    eleDom.style.top = 0 + "px"
  }

  // 将歌词滚动到当前位置
  _scrollToCurrent(currentLine,eleClassName){
    if(currentLine>6){
      setTimeout(() => {
        const eleDom = document.querySelector(eleClassName)
        eleDom.style.top = -(currentLine - 5) * 35 + "px"
        eleDom.children[currentLine].className = 'active'
      }, 100)
    }
  }
}

