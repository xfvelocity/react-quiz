class App extends React.Component {
  render(props) {
    return (
      <div className='question'>
        <Header />
        <Button />
        {this.props.end}
      </div>
    );
  }
}

class Header extends React.Component {
  render(props) {
    return (
      <div className='question-header'>
        <h3>{this.props.question}</h3>
      </div>
    );
  }
}

const questions = [
  {
    key: 1,
    question: "What is Spongebob's bestfriend?",
    answers: ['Squidward', 'Mr. Krabs', 'Patrick', 'Sandy'],
    correct: 'Patrick'
  },
  {
    key: 2,
    question: 'Where does Spongebob live?',
    answers: ['Boom Beach', 'Blue Lagoon', 'Bikini Bottom', 'Spongeville'],
    correct: 'Bikini Bottom'
  },
  {
    key: 3,
    question: "What is Spongebob's lastname?",
    answers: ['Cheeks', 'Star', 'Squarepants', 'Krabs'],
    correct: 'Squarepants'
  },
  {
    key: 4,
    question: 'Where does Spongebob work?',
    answers: ['Chum Bucket', 'Krusty Krab', 'Kwik-E-Mart', 'Kuddly Krab'],
    correct: 'Krusty Krab'
  }
];

class Button extends React.Component {
  state = {
    pressed: null,
    i: 0,
    score: 0,
    style: {},
    result: '',
    resultstyle: ''
  };

  buttonPress = e => {
    this.setState({ pressed: e.target });
  };

  submitted = e => {
    if (this.state.pressed !== null) {
      const cap = questions.length - 1;
      if (this.state.i < cap) {
        this.setState(prevState => ({ i: prevState.i + 1 }));
      }
      this.setState({ pressed: null });
      console.log(this.state.i);

      if (this.state.pressed.value === questions[this.state.i].correct) {
        this.setState({
          style: {
            display: 'block',
            animation: '2s ease-in-out plus'
          },
          result: '✔',
          resultstyle: 'tick'
        });
        setTimeout(() => {
          this.setState(prevState => ({
            score: prevState.score + 1,
            style: { display: 'none' },
            result: '',
            resultstyle: 'tick'
          }));
        }, 2000);
      } else {
        this.setState({ result: 'X', resultstyle: 'cross' });
        setTimeout(() => {
          this.setState({ result: '', resultstyle: '' });
        }, 2000);
      }
    }
    if (this.state.i === 3) {
    }
  };

  render() {
    const i = this.state.i;
    const answer = questions[i].answers;
    return (
      <>
        <div className='score'>
          <p>Score: {this.state.score}</p>
        </div>
        <Header question={questions[i].question} />
        <button
          type='radio'
          className='question-button'
          value={answer[0]}
          onClick={this.buttonPress}
        >
          {answer[0]}
        </button>
        <button
          type='radio'
          className='question-button'
          value={answer[1]}
          onClick={this.buttonPress}
        >
          {answer[1]}
        </button>
        <button
          type='radio'
          className='question-button'
          value={answer[2]}
          onClick={this.buttonPress}
        >
          {answer[2]}
        </button>
        <button
          type='radio'
          className='question-button'
          value={answer[3]}
          onClick={this.buttonPress}
        >
          {answer[3]}
        </button>
        <p style={this.state.style} className='one'>
          +1
        </p>
        <div className='submit' onClick={this.submitted}>
          Submit{' '}
          <span className={this.state.resultstyle}>{this.state.result}</span>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
