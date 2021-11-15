import { Dashboard } from "./components/Dashboard";
import { Root } from "./styles/";

function App() {
    return (
        <Root
            flex={true}
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            <Dashboard />
        </Root>
    );
}

console.info("Made with %c♥%c by Rami", "color: #e25555", "color: unset");

export default App;
