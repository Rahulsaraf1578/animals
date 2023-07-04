function App() {


  const handleClick = () =>{
    console.log("Add animal was clicked")
  }

  return (
    <div>
      <button onClick={handleClick} >Add animal</button>
    </div>
  );
}

export default App;
