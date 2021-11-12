function App(){
  const [count, setCount] = React.useState(0);
  console.log('after count declaration');

  // setTimeout calls a function despues del periodo de tiempo especificado, como setCount vuelve a llamar a setTimeout, esta opcion funciona para counter
  // setTimeout(() => {
  //   console.log('calling');
  //   let newCount = count + 1;
  //   setCount(newCount);
  //   console.log(newCount)
  // }, 1000)

  React.useEffect(() => {
    let interval = null;
    console.log('In useState');
    interval = setInterval(() => { 
      setCount(count + 1);
      console.log(count);
      console.log('running setInterval');
    }, 1000);
    console.log('interval',interval);
    return () => clearInterval(interval);
  });

  let resetCounter = () => {
    setCount(0);
  }
  return(
    <div>
      <h3>Count is now {count} </h3>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
