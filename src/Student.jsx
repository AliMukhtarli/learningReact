function Student({
  name = "Guest",
  age = 0,
  isStudent = false
}) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;