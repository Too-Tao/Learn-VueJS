# 事件修饰符
* .stop 阻止单击事件继续传播
* .prevent 提交事件不再重载页面
* .capture 修饰符可以串联
* .self 只有修饰符
* .once 添加事件监听器时使用事件捕获模式。即元素自身触发的事件先在此处理，然后才交由内部元素进行处理
* .passive 只当在 event.target 是当前元素自身时触发处理函数。即事件不是从内部元素触发的
*使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生*

# 按键修饰符
## 按键码
* .enter
* .tab
* .delete (捕获“删除”和“退格”键)
* .esc
* .space
* .up
* .down
* .left
* .right

## .exact 修饰符
```
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```