import React from 'react'

const Course = ({ course }) => {
  return (
    <>
      <Title text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Title = ({ text }) => {
  return <h2>{text}</h2>
}

const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} part={part} />)
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Total = ({ parts }) => {
  return (
    <b>Total of {parts.reduce((acc, cur) =>
      acc + cur.exercises, 0)} exercises</b>
  )
}

export default Course