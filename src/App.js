function Greeting() {
  return <h2 className="text-2xl text-yellow-300">Welcome to my portfolio!</h2>;
}

function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Hello, React!</h1>
        <Greeting />
        <p className="text-xl text-white">This is my first React component</p>
      </div>
    </div>
  );
}

export default App;