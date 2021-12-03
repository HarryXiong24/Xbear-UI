# Message

---

## API

组件提供了一些静态方法，使用方式和参数如下：

- `Message.success(ShowProps)`
- `Message.error(ShowProps)`
- `Message.info(ShowProps)`
- `Message.warning(ShowProps)`
- `Message.loading(ShowProps)`

`ShowProps` 对象属性如下：

| 参数       | 说明                                        | 类型       | 默认值 |
| :--------- | :------------------------------------------ | :--------- | :----- |
| `content`  | 提示内容                                    | `string`   | -      |
| `duration` | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number`   | 1      |
| `icon`     | 插入的图标                                  | `IconProp` |        |
| `onClose`  | 关闭时触发的回调函数                        | `function` | -      |

---

## 类型声明

```ts
export type MessageType = 'success' | 'info' | 'warning' | 'loading' | 'error';
```
