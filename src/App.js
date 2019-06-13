import React, {Component, Fragment} from 'react';
import Header from "./components/Header/Header";
import ListaNoticias from "./components/ListaNoticias/ListaNoticias";
import FormularioBusqueda from "./components/FormularioBusqueda/FormularioBusqueda";

class App  extends Component {

  state = {
    noticias: []
  };

  componentDidMount() {
    this.getNoticias();
  }

  getNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=e83a6f083d0a47c8a89e72d6a14e3938`;

    const response = await fetch(url);
    const noticias = await response.json();

    console.log(noticias.articles);

    this.setState({
      noticias: noticias["articles"]
    });
  }

  render() {
    return(
      <Fragment>
        <Header
          titulo='Noticias ReactJS API'
        />
        <div className="container white contenedor-noticias">
            <FormularioBusqueda
              getNoticias={this.getNoticias}
            />
            <ListaNoticias
              noticias={this.state.noticias}
            />
        </div>
      </Fragment>
    );
  }
}

export default App;
