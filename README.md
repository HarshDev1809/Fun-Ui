# Fun UI

`Fun UI` is a lightweight React Component Library designed to bring a playful and engaging experience to your web applications. With a focus on creative and fun emoticon-based components, `Fun UI` allows developers to add a personal touch to their interfaces effortlessly. Perfect for projects that aim to stand out with unique and interactive elements, `Fun UI` is both easy to use and highly customizable.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage Demo](#usage-demo)
- [Components](#components)
  - [Loader](#1-loader)
    - [Face Loader](#--face-loader)
      - [Usage](#usage)
      - [Customisation](#customisation)
      - [Variants](#variants)
    - [Classic Loader](#--classic-loader)
      - [Usage](#usage)
      - [Customisation](#customisation)
      - [Variants](#variants)
    - [Sand Watch Loader](#--sand-watch-loader)
      - [Usage](#usage)
      - [Customisation](#customisation)
      - [Variants](#variants)
  - [Emoticons](#2-emoticons)
    - [Classic Emoticons](#--classic-emoticons)
    - [Face Emoticons](#--face-emoticons)
- [License](#license)
- [Contributing](#contributing)

## Features

- **Playful Emoticons:** Inject fun and personality into your website with a wide range of emoticon-based components.
- **Customizable:** Tailor the components to match your brand’s style and preferences.
- **Seamless Integration:** Easily integrate components into your project with minimal setup.

## Installation

To install the package, use npm:

```bash
npm install @moj-ui/fun-ui
```

## Usage Demo

A basic example of `<FaceLoader />` from `@moj-ui/fun-ui`.

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function App() {
  return (
    <div className="App">
      <FaceLoader
        variant={1}
        caption={"Looking for Data..."}
        captionStyle={{ fontSize: "0.35em" }}
        time={1000}
      />
    </div>
  );
}

export default App;
```

### Output :

![Face Loader example](assets/gifs/loaders/FaceLoader/FaceLoader1.gif)

## Components

### 1. Loader:

A collection of fun Loaders built using emoticons which adds an enjoyable touch to your React application.

#### - Face Loader:

Collections of exciting Loaders consisting of face emoticons.

##### Usage:

To use Face Loader component, you can import `<FaceLoader />` from `@moj-ui/fun-ui` and use it in your app.

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";
```

Basic usage eg:

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <FaceLoader />
    </div>
  );
}

export default Demo;
```

**Output:**
![Face Loader Basic output gif](assets/gifs/loaders/FaceLoader/FaceLoaderBasic.gif)

##### Customisation:

You can use in built attritbutes to customise loader according to your personal touch.

###### Attributes:

1. **variant:** You can use `variant` attribute to choose from various Variants available according to you want. The `default` value is `1`. Choose the index of the loader you want to choose. Click [here](#face-loader-variants) to see the available Face Loaders.

eg:

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <FaceLoader variant={20} />
    </div>
  );
}
export default Demo;
```

Output:
![Face Loader gif](assets/gifs/loaders/FaceLoader/FacLoaderUsage1.gif)

2. **time:** You can change the time interval of loader using `time` attribute. The `time` takes time in `ms`. The `default` value is `2000` ms. Remember `1 s = 1000 ms`.

eg :

To set time interval to 1 sec.

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <FaceLoader time={1000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo1000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage1000.gif)

To set time interval to 3 sec.

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <FaceLoader time={3000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo3000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage3000.gif)

3. **style:** you can use custom CSS according to you need.

eg:

To increase the size & colour of the loader, you can pass an object in `style` attribute.

```javascript
const newStyle = {
  color: "green", // To change the color to green.
  fontSize: "6em", // To change the size of Loader to 6em.
};
```

Complete Code :

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "6em",
  };

  return (
    <div className="demo">
      <FaceLoader style={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoStyle](assets/gifs/loaders/FaceLoader/FaceLoaderUsageStyle.gif)

The Default `style` is:

- color : grey
- size : 4rem

4. **caption:** You can add a caption to you loader to make it even more personal.

eg:

To add caption `Looking for Data...`

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <FaceLoader caption={"Looking for Data..."} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaption](assets/gifs/loaders/FaceLoader/FaceLoader1.gif)

The default value of `caption` is `none`.

you can use `captionStyle` property to customise caption according to your need.

```javascript
import { FaceLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "2em",
  };

  return (
    <div className="demo">
      <FaceLoader caption={"Looking for Data..."} captionStyle={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaptionStyle](assets/gifs/loaders/FaceLoader/FaceLoaderCaptionStyle.gif)

the default style of caption is:

- color : grey
- size : 0.35em

##### Variants

| Variant |    Loader     |                              Output                              |
| :-----: | :-----------: | :--------------------------------------------------------------: |
|    1    |     (0_0)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader1.gif)  |
|    2    |  (`~`0_0`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader2.gif)  |
|    3    |  (`*`0_0`*`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader3.gif)  |
|    4    |    ( !0_0)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader4.gif)  |
|    5    |     (o_o)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader5.gif)  |
|    6    |  (`~`o_o`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader6.gif)  |
|    7    |   (\*o_o\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader7.gif)  |
|    8    |    ( !o_o)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader8.gif)  |
|    9    |     (O_O)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader9.gif)  |
|   10    |  (`~`O_O`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader10.gif) |
|   11    |   (\*O_O\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader11.gif) |
|   12    |    ( !O_O)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader12.gif) |
|   13    |    (^\_^)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader13.gif) |
|   14    | (`~`^\_^`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader14.gif) |
|   15    |  (\*^\_^\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader15.gif) |
|   16    |   ( !^\_^)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader16.gif) |
|   17    |     (^.^)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader17.gif) |
|   18    |  (`~`^.^`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader18.gif) |
|   19    |   (\*^.^\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader19.gif) |
|   20    |    ( !^.^)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader20.gif) |
|   21    |    (-\_-)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader21.gif) |
|   22    |   ( !-\_-)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader22.gif) |
|   23    |     (T_T)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader23.gif) |
|   24    |   (\*\_\*)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader24.gif) |
|   25    |    (\*o\*)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader25.gif) |
|   26    |    (\*.\*)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader26.gif) |
|   27    |    (>\_<)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader27.gif) |
|   28    |    ("\_")     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader28.gif) |
|   29    |   ( !"\_")    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader29.gif) |
|   30    |    (=\_=)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader30.gif) |
|   31    |   ( !=\_=)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader31.gif) |
|   32    |     (U_U)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader32.gif) |
|   33    |  (`~`U_U`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader33.gif) |
|   34    |   (\*U_U\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader34.gif) |
|   35    |    ( !U_U)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader35.gif) |
|   36    |     (V_V)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader36.gif) |
|   37    |  (`~`V_V`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader37.gif) |
|   38    |   (\*V_V\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader38.gif) |
|   39    |    ( !V_V)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader39.gif) |
|   40    |     (U.U)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader40.gif) |
|   41    |  (`~`U.U`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader41.gif) |
|   42    |   (\*U.U\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader42.gif) |
|   43    |    ( !U.U)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader43.gif) |
|   44    |  (`$`\_`$`)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader44.gif) |
|   45    |     (X_X)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader45.gif) |
|   46    |    ( !X_X)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader46.gif) |
|   47    |     (x_x)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader47.gif) |
|   48    |    ( !x_x)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader48.gif) |
|   49    |    (+\_+)     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader49.gif) |
|   50    |   ( !+\_+)    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader50.gif) |
|   51    |    ('\_')     | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader51.gif) |
|   52    | (`~`'\_'`~`)  | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader52.gif) |
|   53    |  (\*'\_'\*)   | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader53.gif) |
|   54    |   ( !'\_')    | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader54.gif) |
|   55    | (O*O) - (-*-) | ![FaceLoader1](assets/gifs//loaders/FaceLoader/FaceLoader55.gif) |

#### - Classic Loader:

Collection of Classic Loaders built using Emoticons.

##### Usage

To use Classic Loader component, you can import `<ClassicLoader />` from `@moj-ui/fun-ui` and use it in your app.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";
```

Basic usage eg:

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader />
    </div>
  );
}

export default Demo;
```

**Output:**
![Classic Loader Basic output gif](assets/gifs/loaders/FaceLoader/FaceLoaderBasic.gif)

##### Customisation:

You can use in built attritbutes to customise loader according to your personal touch.

###### Attributes:

1. **variant:** You can use `variant` attribute to choose from various Variants available according to you want. The `default` value is `1`. Choose the index of the loader you want to choose. Click [here](#classic-loader-variants) to see the available Face Loaders.

eg:

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader variant={1} />
    </div>
  );
}
export default Demo;
```

Output:
![Face Loader gif](assets/gifs/loaders/FaceLoader/FacLoaderUsage1.gif)

2. **time:** You can change the time interval of loader using `time` attribute. The `time` takes time in `ms`. The `default` value is `2000` ms. Remember `1 s = 1000 ms`.

eg :

To set time interval to 1 sec.

```javascript
import { Classicloader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader time={1000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo1000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage1000.gif)

To set time interval to 3 sec.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader time={3000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo3000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage3000.gif)

3. **style:** you can use custom CSS according to you need.

eg:

To increase the size & colour of the loader, you can pass an object in `style` attribute.

```javascript
const newStyle = {
  color: "green", // To change the color to green.
  fontSize: "6em", // To change the size of Loader to 6em.
};
```

Complete Code :

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "6em",
  };

  return (
    <div className="demo">
      <ClassicLoader style={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoStyle](assets/gifs/loaders/FaceLoader/FaceLoaderUsageStyle.gif)

The Default `style` is:

- color : grey
- size : 4rem

4. **caption:** You can add a caption to you loader to make it even more personal.

eg:

To add caption `Waiting...`

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader caption={"Waiting..."} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaption](assets/gifs/loaders/FaceLoader/FaceLoader1.gif)

The default value of `caption` is `none`.

you can use `captionStyle` property to customise caption according to your need.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "2em",
  };

  return (
    <div className="demo">
      <ClassicLoader caption={"Waiting..."} captionStyle={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaptionStyle](assets/gifs/loaders/FaceLoader/FaceLoaderCaptionStyle.gif)

the default style of caption is:

- color : grey
- size : 0.35em

#### - Sand Watch Loader:

Add an emoticon Sand Watch as a loader to add an unique touch to your loading screen. [Click here](src/components/Loader/GlassWatchLoader) to know more.

##### Usage

To use Classic Loader component, you can import `<ClassicLoader />` from `@moj-ui/fun-ui` and use it in your app.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";
```

Basic usage eg:

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader />
    </div>
  );
}

export default Demo;
```

**Output:**
![Classic Loader Basic output gif](assets/gifs/loaders/FaceLoader/FaceLoaderBasic.gif)

##### Customisation:

You can use in built attritbutes to customise loader according to your personal touch.

###### Attributes:

1. **variant:** You can use `variant` attribute to choose from various Variants available according to you want. The `default` value is `1`. Choose the index of the loader you want to choose. Click [here](#classic-loader-variants) to see the available Face Loaders.

eg:

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader variant={1} />
    </div>
  );
}
export default Demo;
```

Output:
![Face Loader gif](assets/gifs/loaders/FaceLoader/FacLoaderUsage1.gif)

2. **time:** You can change the time interval of loader using `time` attribute. The `time` takes time in `ms`. The `default` value is `2000` ms. Remember `1 s = 1000 ms`.

eg :

To set time interval to 1 sec.

```javascript
import { Classicloader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader time={1000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo1000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage1000.gif)

To set time interval to 3 sec.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader time={3000} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemo3000](assets/gifs/loaders/FaceLoader/FaceLoaderUsage3000.gif)

3. **style:** you can use custom CSS according to you need.

eg:

To increase the size & colour of the loader, you can pass an object in `style` attribute.

```javascript
const newStyle = {
  color: "green", // To change the color to green.
  fontSize: "6em", // To change the size of Loader to 6em.
};
```

Complete Code :

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "6em",
  };

  return (
    <div className="demo">
      <ClassicLoader style={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoStyle](assets/gifs/loaders/FaceLoader/FaceLoaderUsageStyle.gif)

The Default `style` is:

- color : grey
- size : 4rem

4. **caption:** You can add a caption to you loader to make it even more personal.

eg:

To add caption `Waiting for Data...`

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicLoader caption={"Waiting for Data..."} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaption](assets/gifs/loaders/FaceLoader/FaceLoader1.gif)

The default value of `caption` is `none`.

you can use `captionStyle` property to customise caption according to your need.

```javascript
import { ClassicLoader } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "2em",
  };

  return (
    <div className="demo">
      <ClassicLoader caption={"Waiting for Data..."} captionStyle={newStyle} />
    </div>
  );
}
export default Demo;
```

Output:
[FaceLoaderDemoCaptionStyle](assets/gifs/loaders/FaceLoader/FaceLoaderCaptionStyle.gif)

the default style of caption is:

- color : grey
- size : 0.35em

5. **gap:** You can adjust the gap between loader and caption according to your need using `gap`. `gap` takes a number to adjust the distance in `pixels`.

eg:

To add gap of `30px` between caption and loader, use:

```javascript
<SandWatchLoader caption={"Waiting for Data..."} gap={30} />
```

Complete example:

```javascript
import { SandWatchLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <SandWatchLoader caption={"Waiting for Data..."} gap={30} />
    </div>
  );
}

export default Demo;
```

Output:

![SandWatchLoadergif]

6. **offSet:** Sometimes loader can be a little asymmetric. Use `offSet` attribute to adjust the loader to be in center. `offSet` takes number to adjust the loader. Default value is `0`.

eg:

To adjust the above loader to align with the caption, use `offset` attribute.

```javascript
<SandWatchLoader caption={"Waiting for Data..."} offSet={20} gap={30} />
```

output :
![SandWatchLoadergif]

Complete code:

```javascript
import { SandWatchLoader } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <SandWatchLoader caption={"Waiting for Data..."} offSet={20} gap={30} />
    </div>
  );
}

export default Demo;
```

##### Variant:

| Variant | Loader  | Output |
| :-----: | :-----: | :----: |
|    1    | \|>=<\| |  gif   |
|    2    |  [>=<]  |  gif   |
|    3    |  ]>=<[  |  gif   |
|    4    |  I>=<I  |  gif   |
|    5    |   >=<   |  gif   |
|    6    | \|}={\| |  gif   |
|    7    |  [}={]  |  gif   |
|    8    |   }={   |  gif   |
|    9    | \|>-<\| |  gif   |
|   10    |  [>-<]  |  gif   |
|   11    |  ]>-<[  |  gif   |
|   12    |  I>-<I  |  gif   |
|   13    |   >-<   |  gif   |
|   14    | \|}-{\| |  gif   |
|   15    |  [}-{]  |  gif   |
|   16    |   }-{   |  gif   |

### 2. Emoticons:

Collections of Classic emoticons as well as many more. You can choose from many classic as well as fun emoticons to make your React App fun and interactive.

#### - Classic Emoticons:

Collection of Classic emoticons.

##### Usage:

To use Classic Emoticons, you can import `<ClassicEmoticon />` from `@moj-ui/fun-ui` and use it in your app.

```javascript
import { ClassicEmoticon } from "@moj-ui/fun-ui";
```

Basic usage eg:

```javascript
import { ClassicEmoticon } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicEmoticon />
    </div>
  );
}

export default Demo;
```
Output:
[gif]

##### Customisation:

You can use in-built attributes to customise the emoticons according to your personal touch.

###### Attributes:

 1. **variant:** You can use `variant` attribute to choose from various emoticons available. The `default` value is `1`. Choose the index of the emoticon you want to choose. Click [here](#variants) to see the available emoticons.

 eg:

 To use the emoticon `:D`, use index `35` in `variant` attribute.

 ```javascript
 <ClassicEmoticon variant={35}>
```
 Output:
 [gif]

```javascript
import { ClassicEmoticon } from "@moj-ui/fun-ui";

function Demo() {
  return (
    <div className="demo">
      <ClassicEmoticon variant={35}/>
    </div>
  );
}

export default Demo;
```

2. **style:** You can use custom CSS according to your need.

eg:

To increase the size & colour of the emoticon, you can pass an object in style attribute.

```javascript
const newStyle = {
  color: "green", // To change the color to green.
  fontSize: "6em", // To change the size of emoticon to 6em.
};
```

output:
[gif]

Complete eg:

```javascript
import { ClassicEmoticon } from "@moj-ui/fun-ui";

function Demo() {
  const newStyle = {
    color: "green",
    fontSize: "6em",
  };

  return (
    <div className="demo">
      <ClassicEmoticon style={newStyle} />
    </div>
  );
}
export default Demo;
```

##### Varianst
| Variant | Loader  | Output |
| :-----: | :-----: | :----: |
|    1    | :-) |  gif   |
|    1    | :^) |  gif   |
|    1    | ^_^ |  gif   |
|    1    | (^ ^) |  gif   |
|    1    | :,-) |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |
|    1    | \|>=<\| |  gif   |


#### - Face Emoticons:

Collection of Face emoticons to add a fun & personal touch to your React App. [Click here](src/components/Emoticons/FaceEmoticon) to know more.
