import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { getAllCards, Card } from '../../services/data-service';

interface HomeState {
  cards?: Card[]
  error?: string;
}

class Home extends React.Component<any,HomeState> {
  constructor(props: HomeState) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    getAllCards().then(
      cards => this.setState({cards: cards}),
      error => this.setState({error: error})
    );
  }

  render(){
    return (
      <section className="container">
        <h2>Cat card list</h2>
        <hr />
        <div className="card-group">
          {this.state.cards ? this.state.cards.map(this.renderCard) : this.renderError()}
        </div>
        <Link to="/card-form" className="btn btn-lg btn-danger circle add"><FontAwesomeIcon icon={faPlus}/></Link>
      </section>
    );
  }

  renderCard(card: Card) {
      return (
        <div className="flipper mb-3" key={card.id}> 
          <div className="front card text-center shadow-sm">
            <img className="card-img-top" src={card.imageUrl} alt="a Cat" width="250" height="200"/>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
            </div>
          </div>
          <div className="back card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">{card.title}</h6>
              <p className="card-text">{card.description}</p>
            </div>
            <div className="card-footer">
              <Link to={"/card-form/"+card.id} className="btn btn-primary card-link">Edit that cat</Link>
            </div>
          </div>
        </div>
      )
  }

  renderError(){
    return <h3 className="text-center text-danger">{this.state.error}</h3>
  }
}

export default Home;
