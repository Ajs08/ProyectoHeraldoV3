import './App.css';
import MainLayout from "./layouts/MainLayout";
import CardOne from "./components/CardOne";
import TabList from "./components/TabList";
import Accordion from "./components/Accordion";

function App() {
  return (
    <MainLayout className="App">
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Subscribete Ya</strong> al Heraldo desde $800 Aqui!
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="container-fluid text-center col">
        <CardOne/>
        <div className="jumbotron">
          <p className="lead">Si deseas mas informacion acerca de Barranquilla, haz click aqui</p>
          <hr className="my-4" />
            <a className="btn btn-danger btn-lg" href="#" role="button">Ver mas noticias</a>
        </div>
        <div className="container-fluid text-center col">
          <CardOne/>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Latest</h3>
          </div>
        </div>
        <div className="container-fluid text-center col">
          <CardOne />
        </div>
        <div className="container-fluid text-center col">
          <CardOne />
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Datos curiosos</h3>
          </div>
        </div>
        <TabList />
        <Accordion />
      </div>
    </MainLayout>
  );
}

export default App;
