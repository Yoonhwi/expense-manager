import Calculator from "./containers/calculator/calculator";
import ToastList from "./containers/toast/toast-list";
import DefaultLayout from "./layout/default-layout";
import { ToastProvider } from "./provider/toast-provider";



function App() {
  return (
    <ToastProvider>
      <ToastList />
      <DefaultLayout>
        <Calculator />
      </DefaultLayout>
    </ToastProvider>
  );
}

export default App;
