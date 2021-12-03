# Card

---

## API

属性说明如下：

| 属性                  | 说明                     | 类型            | 默认值 | 版本 |     |
| --------------------- | ------------------------ | --------------- | ------ | ---- | --- |
| `cover`               | title 前的图标           | `string`        | none   |      |     |
| `title`               | 标题                     | `string`        | none   |      |     |
| `shadow`              | 卡片阴影                 | `boolean`       | false  |      |     |
| `showShadowWhenHover` | hover 时显示阴影效果     | `boolean`       | false  |      |     |
| `extra`               | title 右边额外插入的元素 | `ReactNode`     | none   |      |     |
| `style`               | style 属性               | `CSSProperties` | none   |      |     |
| `className`           | class 属性               | `string`        | none   |      |     |
| `titleOverflowHidden` | title 多了是否换行       | `boolean`       | none   |      |     |
| `actions`             | 卡片尾部按钮             | `Action[]`      | none   |      |     |

---

## 类型声明

```ts
interface Action {
  // action 名
  name: string;
  // action 对应的点击事件
  event?: () => any;
}
```
