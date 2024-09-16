function App() {
  return (
    <div className="bg-blue-500 flex items-center justify-center h-screen">
      <h1>Hello From React</h1>
      <h2 className="text-red-500">
        {import.meta.env.VITE_API_KEY}
      </h2>
    </div>
  );
}
export default App;
