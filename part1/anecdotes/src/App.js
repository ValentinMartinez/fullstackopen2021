import React, { useState } from 'react'

const randomInt = (min,max) => Math.floor(Math.random()*(max-min))+min

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Anecdote = ({ text, votes }) => {
  return (
    <>
      {text}<br/>
      has {votes} votes<br/>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(randomInt(0,anecdotes.length-1))
  const [totalVotes, setTotalVotes] = useState(new Array(anecdotes.length).fill(0))
  const [maxVoted, setMaxVoted] = useState(0)

  const handleNext = () => setSelected(randomInt(0,anecdotes.length-1))
  const handleVote = () => {
    const copy = [...totalVotes]
    copy[selected]++
    setTotalVotes(copy)
    if (copy[selected] > copy[maxVoted]) setMaxVoted(selected)
  }

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votes={totalVotes[selected]} />
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleNext} text='next anecdote' />

      <Title text='Anecdote with most votes' />
      <Anecdote text={anecdotes[maxVoted]} votes={totalVotes[maxVoted]} />
    </div>
  )
}

export default App