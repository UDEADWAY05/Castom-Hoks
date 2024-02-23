import { useToggle } from './useToggle';

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <div>
        <button onClick={() => toggle()}>
            {value}
        </button>
    </div>
  );
}

// Еще примеры использования

// const [value, toggle] = useToggle(['light', 'dark']);

// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда 
// value станет одним из значений
// toggle('dark'); // -> value === 'dark'

export default App;