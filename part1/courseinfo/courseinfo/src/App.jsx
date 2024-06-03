const Header = (props) => {
  console.log(props)
  return(
    <>
    <h1> {props.course} </h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p> {props.part['name']} {props.part['exercises']} </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} /> 
    </div>
  )
}


const Total = (props) => {
  let sum = 0
  let arr = props.parts 
  console.log(arr)
  arr.forEach(value => sum += value['exercises'])
  console.log(sum)
  return(
    <>
    <p> Number of exercises {sum} </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>    
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App