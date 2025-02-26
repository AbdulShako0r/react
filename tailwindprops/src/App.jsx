import Card from "./components/card";
function App() {
  let myobj={
    username:"Abdul",
    age:21,
  }
  let newarr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-lg p-4 mb-4">Hello World</h1>
      <Card username="abdul shakoor" btntext="visit me"/>
      <Card username="my Channel" />
      
    </>
  );
}

export default App;
