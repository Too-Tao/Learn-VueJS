# 2019.3.3 多云

## 在写vue项目时使用了eslint，console.log()会报错
### 解决办法
* 在eslint的规则里添加
```
"rules": {
  "no-console": "off"
}
```
* 使用window
```
window.console.log()
```

## 一段优质的代码
### this.todos = [...this.todos, this.todos]