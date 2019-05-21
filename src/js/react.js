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

class Button extends React.Component {
  questions = [
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

  state = {
    pressed: null,
    i: 0,
    score: 0
  };

  buttonPress = e => {
    this.setState({ pressed: e.target });
  };

  submitted = e => {
    const one = document.querySelector('.one');
    if (this.state.pressed !== null) {
      const cap = this.questions.length - 1;
      if (this.state.i < cap) {
        this.setState(prevState => ({ i: prevState.i + 1 }));
      }
      this.setState({ pressed: null });

      if (this.state.pressed.value === this.questions[this.state.i].correct) {
        one.style.display = 'block';
        one.style.animation = '2s ease-in-out plus';
        setTimeout(() => {
          this.setState(prevState => ({
            score: prevState.score + 1
          }));
          one.style.display = 'none';
        }, 2000);
      }
    }
  };

  render() {
    const i = this.state.i;
    const answer = this.questions[i].answers;
    return (
      <>
        <div className='score'>
          <p>Score: {this.state.score}</p>
        </div>
        <Header question={this.questions[i].question} />
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
        <p className='one'>+1</p>
        <div className='submit' onClick={this.submitted}>
          Submit
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
