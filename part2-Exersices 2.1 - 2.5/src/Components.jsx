  const Header = ({name}) => <h1>{name}</h1>

  const Part = ({name, exercises}) => <p>{name} {exercises}</p>
   
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )}
      </div>
    )
  }
  
  const Total = ({course}) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <div>
        <p><i>Total of exercises:</i> {totalExercises}</p> 
      </div>
    )
  } 
  
  const Course = ({course}) => {
    return (
      <div>
        <Header key={course.id} name={course.name}/>
        <Content parts={course.parts}/>
        <Total course={course}/>
      </div>
    )
  }
  
  const Courses = ({courses}) => {
    return (
      <div>
        {courses.map(course => <Course key={course.id} course={course}/>
        )}
      </div>
    )
  }
  

  export default Courses