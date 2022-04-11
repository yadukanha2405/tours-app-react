import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles.css";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div className="App">{loading ? <Loading /> : <Tours tours={tours} />}</div>
  );
}
