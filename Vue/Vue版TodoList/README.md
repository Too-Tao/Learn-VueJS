# 2019.3.2 上午 雨
## splice 和 slice 是对数组进行操作
* list.splice( index, 1) 删除下标为index的元素
* list.slice( begin, end ) 在list数组中截取下标 begin 到 end 的元素

## v-for 可以搭配 v-if 一起使用
### 比如

```html
<ul>
      <h2>代办事项</h2>
      <li v-for=" ( item, index ) in list " v-if="!item.done">
        {{ item.message }}
        <button @click="handleToUndone(index)">完成</button>
        <button @click="handleRemove(index)">删除</button>
        <button @click="handleEdit(index, item)">编辑</button>
      </li>
      <hr>
      <h2>完成事项</h2>
      <li v-for=" ( item, index ) in list " v-if="item.done">
        {{ item.message }}
        <button @click="handleToDone(index)">未做</button>
        <button @click="handleRemove(index)">删除</button>
        <button @click="handleEdit(index, item)">编辑</button>
      </li>
    </ul>
```
    