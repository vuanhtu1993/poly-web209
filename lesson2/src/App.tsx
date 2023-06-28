import Film from "./components/film"

function App() {
  return <div>
    <header>
      <img className="w-[80px]" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Netflix_logo.png" alt="" />
    </header>
    <div className="pt-4 grid grid-cols-3 gap-2">
      {/* Render dynamic - props*/}
      <Film title="" year={ } thumbnail="" />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
    </div>
  </div>
}

export default App
