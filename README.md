# FpsLogger

The FPSLogger component is a versatile tool designed for performance monitoring in your applications. It seamlessly integrates at the screen level, either as a parent or sibling component, to provide real-time insights into the frames per second (FPS) performance of specified screen components. This component is particularly useful for developers looking to optimize user interface fluidity and responsiveness.

| Prop Name           | Type       | Required | Description                                                                                                                          |
| ------------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `screenName`        | `string`   | Yes      | Specifies the name of the screen component to monitor for FPS performance.                                                           |
| `totalCount`        | `number`   | No       | Accepts a numerical value (e.g., number of orders, items, etc.) to provide context for the performance data.                         |
| `fpsCaptureEnabled` | `boolean`  | Yes      | Set to `true` to enable FPS tracking for the specified component.                                                                    |
| `renderFPS`         | `function` | No       | An optional function that returns an element displaying the average and minimum FPS.                                                 |
| `handleFPSData`     | `function` | No       | An optional callback that provides access to minimum and average FPS data, along with any props passed to the `FPSLogger` component. |

## Installation

```sh
yarn add @swiggy-private/fps-logger
```

## API Definition

To use FpsLogger, import it from `@swiggy-private/fps-logger`

---

```js
import {FPSLogger} from '@swiggy-private/fps-logger'

function Example = () => {
  /*
    You can integrate Logger component as parent or sibling level
  */
  return (
    <View>
      <FPSLogger
        screenName="name_of_your_screen"
        totalCount={`takes a number for eg: number of orders`}
        fpsCaptureEnabled={`takes a boolean value to enable fps capture`}
        renderFPS={`optional! if true then renders avg and min fps`}
        handleFPSData={`optional! receives a function which can access avg fps, min fps, screenName and other params`}
      />
      <YourScreen/>
    </View>
  )
}
```

h
