import React from 'react';
import { Card, createCard, deleteCard, getCard, updateCard } from '../../services/data-service';
import './CardForm.css';

interface CardFormProp {
  cardId?: number;
}

interface CardFormState {
  card?: Card;
  error?: string;
}

class CardForm extends React.Component<CardFormProp, CardFormState> {
  
  constructor(props: CardFormProp){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if(this.props.cardId){
      getCard(this.props.cardId).then(
        card => this.setState({card : card}),
        error => this.setState({error: error})
      );
    }else{
      this.setState({card:{
        imageUrl: '',
        title: '',
        description: ''
      }});
    }
  }

  handleChange(event: any) {
    const target = event.target;
    var card = {...this.state.card!}
    card[target.name] = target.value;
    this.setState({card})
  }

  handleSubmit(event: any) {
    const cardPromise = this.props.cardId ? updateCard(this.state.card) : createCard(this.state.card);
    cardPromise.then(() => window.location.href = '/');
    event.preventDefault();
  }

  render() {
    return (
      <section className="container">
        <h2>Cat card form</h2>
        <hr />
        {this.state.card ? this.renderForm() : this.renderError()}
      </section>
    );
  }
  renderError(): React.ReactNode {
    return <h3 id="formError" className="text-center text-danger">{this.state.error}</h3>
  }

  renderForm(){
    const card: Card = this.state.card!;

    return (
      <form id="cardForm" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Card title</label>
            <input 
              type="text" required 
              className="form-control col-sm-10" 
              name="title"
              placeholder="Card title"
              defaultValue={card.title}
              onChange={this.handleChange}
              />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required. Please provide a value.
            </div>
          </div>
          <div className="backorm-group row">
            <label className="col-sm-2 col-form-label">Card image URL</label>
            <input 
              type="url" required
              placeholder="Card image URL" 
              className="form-control col-sm-10" 
              name="imageUrl"
              defaultValue={card.imageUrl} 
              onChange={this.handleChange}
            />
            <div className="invalid-feedback offset-md-2 col-sm-10">
              That field is required and attempt an URL as value. Please provide a value that respect URL format.
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Card description</label>
            <textarea 
              className="form-control col-sm-10" 
              name="description"
              defaultValue={card.description} 
              onChange={this.handleChange}
            />
          </div>
          {this.props.cardId && 
            <button className="btn btn-danger" onClick={() => this.deleteCard(this.props.cardId!)}>Delete</button>
          }
          <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
  deleteCard(cardId: number) {
    deleteCard(cardId).then(() => window.location.href = '/');
  }
}

export default CardForm;
