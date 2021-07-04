import appStyles from './app.module.css';
import {TopBar} from "./Components/TopBar/TopBar";
import {BottomBar} from "./Components/BottomBar/BottomBar";
import {ContentSection} from "./Components/ContentSection/ContentSection";

function App() {
  return (
    <div className={appStyles.App}>
        <TopBar />
        <ContentSection />
        <BottomBar />
    </div>
  );
}

export default App;
