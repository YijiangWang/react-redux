import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHookPage";
import YJReactReduxPage from "./pages/YJReactReduxPage";
import HooksPage from "./pages/HooksPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Provider as YJProvider } from "./yj-react-redux";
import { store as yj_store } from "./store/yj-store";
import YJReactReduxHookPage from "./pages/YJReactReduxHookPage";

// 正常情况下，Provider 包裹根目录下的所有内容；这里为了作比较，进行了分别包裹
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxPage />
        <ReactReduxHookPage />
      </Provider>

      <YJProvider store={yj_store}>
        <YJReactReduxPage title='yjw'/>
        <YJReactReduxHookPage />
      </YJProvider>

      <HooksPage />
    </div>
  );
}

export default App;
