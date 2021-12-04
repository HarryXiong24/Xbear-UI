# Tabs

---

## API

`Tabs` 属性说明如下：

| 属性           | 说明                                | 类型                              | 默认值 | 版本 |
| -------------- | ----------------------------------- | --------------------------------- | ------ | ---- |
| `defaultIndex` | 当前激活 tab 面板的 index，默认为 0 | `number`                          | 0      |      |
| `className`    | 可以扩展的 className                | `string`                          | none   |      |
| `type`         | Tabs 的样式，两种可选，默认为 line  | `'line' \| 'card'`                | 'line' |      |
| `onSelect`     | 点击 Tab 触发的回调函数             | `(selectedIndex: number) => void` | none   |      |

---

`Tabs.Item` 属性说明如下：

| 属性       | 说明               | 类型                             | 默认值 | 版本 |
| ---------- | ------------------ | -------------------------------- | ------ | ---- |
| `label`    | Tab 选项上面的文字 | `string` \| `React.ReactElement` | none   |      |
| `disabled` | Tab 选项是否被禁用 | `boolean`                        | false  |      |
