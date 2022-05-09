import GlobalState from './global/GlobalState';
import Router from './routes/Router';
import { GlobalStyle } from './styles';
import Header from './components/Header';

const App = () => {
    return (
    <>
        <GlobalState>
            <GlobalStyle />
            <Header/>
            <Router />
        </GlobalState>

    </>
    )
}

export default App;
