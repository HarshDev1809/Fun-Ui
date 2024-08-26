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
