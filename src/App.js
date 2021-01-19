import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./context/appContext";
import { Detailpage, Favoritepage, Homepage } from "./pages";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const result = response.data;
    setData(result);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);
  return (
    <AppContext.Provider value={[isLoading, data, setData]}>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/favorite" exact component={Favoritepage} />
          <Route path="/detail/:id" exact component={Detailpage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
