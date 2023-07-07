import './App.css';
import './style.css';
import TestComponent from './components/TestComponent';
import Header from './views/layout/Header';
import Main from './views/layout/Main';
import Footer from './views/layout/Footer';

function App() {
  return (
    <>
      {/* <TestComponent /> */}
      {/* <TestComponent /> */}
      {/* <TestComponent /> */}
      {/* <TestComponent /> */}
      <TestComponent arg1 = '문자열' arg2 = {0} />
      <TestComponent arg1 = '문자열' arg2 = {1} />

      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;