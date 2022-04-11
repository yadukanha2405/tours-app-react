import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles.css";
import Tours from "./Tours";

export default function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
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
