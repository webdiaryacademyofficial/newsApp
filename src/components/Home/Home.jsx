import Container from "../Container/Container";
import Card from "../Card/Card";
import useFetchData from "../../hooks/useFetchData";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";

  const url = `${POPULAR_URL}${API_KEY}`

const Home = () => {
  
    const {newsData, loading, error} = useFetchData(url)

  if (loading) {
    return (
      <Container>
        <h1>Data Loading...</h1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>{error}</h1>
      </Container>
    );
  }

  return (
    <Container>
      {newsData?.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </Container>
  );
};

export default Home;
