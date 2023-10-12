import { APP_CONFIG } from "./app_config/AppConfig";
import DynamicRender from "./dynamic/DynamicRender";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        {APP_CONFIG.map((config) => DynamicRender(config))}
      </div>
    </div>
  );
}

export default App;
