# Fun UI

`Fun Ui` is a React Component Library mainly focused on adding a fun touch to your React application by using interactive component made using emoticons.

## Installation
To install the package, use npm:
```bash
npm install @moj-ui/fun-ui
```

## Usage

A basic example of `<FaceLoader />` from `@moj-ui/fun-ui`.

```javascript
import { FaceLoader } from '@moj-ui/fun-ui';

function App() {
  return (
    <div className="App">
      <FaceLoader variant={1} caption={"Looking for Data..."} captionStyle={{fontSize:"0.35em"}} time={1000}/>
    </div>
  );
}

export default App;
```

### Output :
![Face Loader example](assets/gifs/loaders/FaceLoader/FaceLoader1.gif)

## Components

1. **Loader:** A collection of fun Loaders built using emoticons which adds an enjoyable touch to your React application.
   - **Face Loader:** Collections of exciting Loaders consisting of face emoticons. [CLick here](src/components/Loader/FaceLoader/README.md) to explore more.
   - **Classic Loader:** Collection of Classic Loaders built using Emoticons. [Click here](src/components/Loader/CLassicLoader/README.md) to explore more.
   - **Sand Watch Loader:** Add an emoticon Sand Watch as a loader to add an unique touch to your loading screen. [Click here](src/components/Loader/GlassWatchLoader/README.md) to know more.
2. **Emoticons:** Collections of Old-School & Classic emoticons as well as many mores. [Click here](
