import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
