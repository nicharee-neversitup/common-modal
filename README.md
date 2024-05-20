# Modal and Popup

## Importing

```jsx
import { CommonModal } from '@/components/common'
```

## Usage

```html
<CommonModal {...props}> <div>{body}</div></CommonModal>
```

## API

Common props ref：[Common props](https://ant.design/components/modal#api)

| Property               | Description                                                                                                | Type                                                                                                                       | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| afterClose             | Specify a function that will be called when modal is closed completely                                     | function                                                                                                                   | -                       |
| classNames             | Config Modal build-in module's className                                                                   | `header?: string; body?: string; footer?: string; mask?: string; wrapper?: string;`                                        | -                       |
| styles                 | Config Modal build-in module's style                                                                       | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties;`                              | -                       |
| cancelButtonProps      | The cancel button props                                                                                    | [ButtonProps](https://ant.design/components/button#api)                                                                    | -                       |
| cancelText             | Text of the Cancel button                                                                                  | ReactNode                                                                                                                  | `Cancel`                |
| centered               | Centered Modal                                                                                             | boolean                                                                                                                    | false                   |
| closeIcon              | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false`                    | ReactNode                                                                                                                  | &lt;CloseOutlined />    |
| confirmLoading         | Whether to apply loading visual effect for OK button or not                                                | boolean                                                                                                                    | false                   |
| destroyOnClose         | Whether to unmount child components on onClose                                                             | boolean                                                                                                                    | false                   |
| focusTriggerAfterClose | Whether need to focus trigger element after dialog is closed                                               | boolean                                                                                                                    | true                    |
| footer                 | Footer content, set as `footer={null}` when you don't need default buttons                                 | (params:[footerRenderParams](https://ant.design/components/modal#footerrenderparams))=> React.ReactNode \| React.ReactNode | (OK and Cancel buttons) |
| forceRender            | Force render Modal                                                                                         | boolean                                                                                                                    | false                   |
| getContainer           | The mounted node for Modal but still display at fullscreen                                                 | HTMLElement \| () => HTMLElement \| Selectors \| false                                                                     | document.body           |
| keyboard               | Whether support press esc to close                                                                         | boolean                                                                                                                    | true                    |
| mask                   | Whether show mask or not                                                                                   | boolean                                                                                                                    | true                    |
| maskClosable           | Whether to close the modal dialog when the mask (area outside the modal) is clicked                        | boolean                                                                                                                    | true                    |
| modalRender            | Custom modal content render                                                                                | (node: ReactNode) => ReactNode                                                                                             | -                       |
| okButtonProps          | The ok button props                                                                                        | [ButtonProps](https://ant.design/components/button#api)                                                                    | -                       |
| okText                 | Text of the OK button                                                                                      | ReactNode                                                                                                                  | `OK`                    |
| okType                 | Button `type` of the OK button                                                                             | string                                                                                                                     | `primary`               |
| style                  | Style of floating layer, typically used at least for adjusting the position                                | CSSProperties                                                                                                              | -                       |
| title                  | The modal dialog's title                                                                                   | ReactNode                                                                                                                  | -                       |
| open                   | Whether the modal dialog is visible or not                                                                 | boolean                                                                                                                    | false                   |
| width                  | Width of the modal dialog                                                                                  | string \| number                                                                                                           | 520                     |
| wrapClassName          | The class name of the container of the modal dialog                                                        | string                                                                                                                     | -                       |
| zIndex                 | The `z-index` of the Modal                                                                                 | number                                                                                                                     | 1000                    |
| onCancel               | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | function(e)                                                                                                                | -                       |
| onOk                   | Specify a function that will be called when a user clicks the OK button                                    | function(e)                                                                                                                | -                       |
| afterOpenChange        | Callback when the animation ends when Modal is turned on and off                                           | (open: boolean) => void                                                                                                    | -                       |

<b>Extra props</b>

| Property | Description                                                                                                                                                                                             | Type   | Default                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------- |
| theme    | custom style `Modal` by [Modal Design Token](https://ant.design/components/modal#design-token) <br/>`object` <br/>`{`<br/>`  globalToken: Global Token;`<br/>`componentToken: Component Token;`<br/>`}` | Object | -                                                                 |
| locale   | to set locale text config                                                                                                                                                                               | Object | [th_TH](https://unpkg.com/browse/antd@5.17.2/lib/locale/th_TH.js) |

#### Note

- The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state every time, set `destroyOnClose` on it.
- There is a situation that using `<Modal />` with Form, which won't clear fields value when closing Modal even you have set `destroyOnClose`. You need `<Form preserve={false} />` in this case.
- `Modal.method()` RTL mode only supports hooks.

### Modal.method()

There are five ways to display the information based on the content's nature:

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:

| Property          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                       | Default                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| afterClose        | Specify a function that will be called when modal is closed completely                                                                                                                                                                                                                                                                                                                                                                       | function                                                                                                                   | -                              |
| autoFocusButton   | Specify which button to autofocus                                                                                                                                                                                                                                                                                                                                                                                                            | null \| `ok` \| `cancel`                                                                                                   | `ok`                           |
| cancelButtonProps | The cancel button props                                                                                                                                                                                                                                                                                                                                                                                                                      | [ButtonProps](https://ant.design/components/button#api)                                                                    | -                              |
| cancelText        | Text of the Cancel button with Modal.confirm                                                                                                                                                                                                                                                                                                                                                                                                 | string                                                                                                                     | `Cancel`                       |
| centered          | Centered Modal                                                                                                                                                                                                                                                                                                                                                                                                                               | boolean                                                                                                                    | false                          |
| className         | The className of container                                                                                                                                                                                                                                                                                                                                                                                                                   | string                                                                                                                     | -                              |
| closable          | Whether a close (x) button is visible on top right of the confirm dialog or not                                                                                                                                                                                                                                                                                                                                                              | boolean                                                                                                                    | false                          |
| closeIcon         | Custom close icon                                                                                                                                                                                                                                                                                                                                                                                                                            | ReactNode                                                                                                                  | undefined                      |
| content           | Content                                                                                                                                                                                                                                                                                                                                                                                                                                      | ReactNode                                                                                                                  | -                              |
| footer            | Footer content, set as `footer: null` when you don't need default buttons                                                                                                                                                                                                                                                                                                                                                                    | (params:[footerRenderParams](https://ant.design/components/modal#footerrenderparams))=> React.ReactNode \| React.ReactNode | -                              |
| getContainer      | Return the mount node for Modal                                                                                                                                                                                                                                                                                                                                                                                                              | HTMLElement \| () => HTMLElement \| Selectors \| false                                                                     | document.body                  |
| icon              | Custom icon                                                                                                                                                                                                                                                                                                                                                                                                                                  | ReactNode                                                                                                                  | &lt;ExclamationCircleFilled /> |
| keyboard          | Whether support press esc to close                                                                                                                                                                                                                                                                                                                                                                                                           | boolean                                                                                                                    | true                           |
| mask              | Whether show mask or not.                                                                                                                                                                                                                                                                                                                                                                                                                    | boolean                                                                                                                    | true                           |
| maskClosable      | Whether to close the modal dialog when the mask (area outside the modal) is clicked                                                                                                                                                                                                                                                                                                                                                          | boolean                                                                                                                    | false                          |
| okButtonProps     | The ok button props                                                                                                                                                                                                                                                                                                                                                                                                                          | [ButtonProps](https://ant.design/components/button#api)                                                                    | -                              |
| okText            | Text of the OK button                                                                                                                                                                                                                                                                                                                                                                                                                        | string                                                                                                                     | `OK`                           |
| okType            | Button `type` of the OK button                                                                                                                                                                                                                                                                                                                                                                                                               | string                                                                                                                     | `primary`                      |
| style             | Style of floating layer, typically used at least for adjusting the position                                                                                                                                                                                                                                                                                                                                                                  | CSSProperties                                                                                                              | -                              |
| title             | Title                                                                                                                                                                                                                                                                                                                                                                                                                                        | ReactNode                                                                                                                  | -                              |
| width             | Width of the modal dialog                                                                                                                                                                                                                                                                                                                                                                                                                    | string \| number                                                                                                           | 416                            |
| wrapClassName     | The class name of the container of the modal dialog                                                                                                                                                                                                                                                                                                                                                                                          | string                                                                                                                     | -                              |
| zIndex            | The `z-index` of the Modal                                                                                                                                                                                                                                                                                                                                                                                                                   | number                                                                                                                     | 1000                           |
| onCancel          | Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. If the function does not take any parameter (`!onCancel.length`) then modal dialog will be closed unless returned value is `true` (`!!onCancel()`). You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function(close)                                                                                                            | -                              |
| onOk              | Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. If the function does not take any parameter (`!onOk.length`) then modal dialog will be closed unless returned value is `true` (`!!onOk()`). You can also just return a promise and when the promise is resolved, the modal dialog will also be closed             | function(close)                                                                                                            | -                              |

All the `Modal.method`s will return a reference, and then we can update and close the modal dialog by the reference.

```jsx
const modal = Modal.info()

modal.update({
  title: 'Updated title',
  content: 'Updated content',
})

// on 4.8.0 or above, you can pass a function to update modal
modal.update((prevConfig) => ({
  ...prevConfig,
  title: `${prevConfig.title} (New)`,
}))

modal.destroy()
```

- `Modal.destroyAll`

`Modal.destroyAll()` could destroy all confirmation modal dialogs(`Modal.confirm|success|info|error|warning`). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)

```jsx
import { browserHistory } from 'react-router'

// router change
browserHistory.listen(() => {
  Modal.destroyAll()
})
```

### Modal.useModal()

When you need using Context, you can use `contextHolder` which created by `Modal.useModal` to insert into children. Modal created by hooks will get all the context where `contextHolder` are. Created `modal` has the same creating function with `Modal.method`.

```jsx
const [modal, contextHolder] = Modal.useModal()

React.useEffect(() => {
  modal.confirm({
    // ...
  })
}, [])

return <div>{contextHolder}</div>
```

`modal.confirm` return method:

- `destroy`: Destroy current modal
- `update`: Update current modal
- `then`: (Hooks only) Promise chain call, support `await` operation

```tsx
// Return `true` when click `onOk` and `false` when click `onCancel`
const confirmed = await modal.confirm({ ... });
```

## footerRenderParams

<!-- prettier-ignore -->
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| originNode | default node | React.ReactNode                   | -      |
| extra      | extended options | { OkBtn: FC; CancelBtn: FC } | -      |

## Design Token

https://ant.design/components/modal#design-token
