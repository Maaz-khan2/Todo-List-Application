"use client"

import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="ml-[35%] shadow-xl bg-lime-600 p-8 text-center text-white mt-20 text-6xl max-w-xl rounded-lg font-bold hover:bg-blue-900 transition-all duration-500 ease-in-out">
        <h1>TODO LIST</h1>
      </div>

      <main className="flex-grow flex items-center justify-center mt-40">
        <div className="rounded-xl max-w-xl mx-auto bg-yellow-600 p-12 shadow-20">
          <div className="mb-6">
            <div className="flex">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-4 rounded-lg text-3xl"
                type="text"
                placeholder="Add a new task..."
                required
              />
              <button
                onClick={addTodo}
                className="text-xl ml-5 py-3 px-5 bg-yellow-500 rounded-lg text-white font-bold hover:text-yellow-200 hover:bg-red-900 transition-all duration-500 ease-in-out"
              >
                ADD
              </button>
            </div>
          </div>

          <ul className="space-y-4 mt-10">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-7 rounded-xl   shadow-2xl  shadow-white border-2 border-white-900 ${
                  todo.completed ? 'bg-red-900 line-through' : 'bg-red-900'
                }`}
              >
                <span className='text-white text-4xl font-Georgia font-bold'>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="p-4 bg-yellow-500 text-white mr-2 text-white rounded-lg font-bold hover:bg-yellow-700 transition-all duration-400 ease-in-out"
                  >
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-800 transition-all duration-400 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Todolist;
