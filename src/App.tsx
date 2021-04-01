import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './App.css';

enum ButtonType {
  Number = 'number',
  Reset = 'reset',
  Remove = 'remove',
  Multiply = 'multiply',
  Divide = 'divide',
  Subtract = 'subtract',
  Add = 'add',
  Equal = 'equal',
  Modulo = 'modulo',
}

interface Button {
  title: string,
  value?: number,
  type: ButtonType,
}

const buttons = [
  {
    title: '1',
    value: 1,
    type: ButtonType.Number,
  },
  {
    title: '2',
    value: 2,
    type: ButtonType.Number,
  },
  {
    title: '3',
    value: 3,
    type: ButtonType.Number,
  },
  {
    title: '*',
    type: ButtonType.Multiply,
  },
  {
    title: '4',
    value: 4,
    type: ButtonType.Number,
  },
  {
    title: '5',
    value: 5,
    type: ButtonType.Number,
  },
  {
    title: '6',
    value: 6,
    type: ButtonType.Number,
  },
  {
    title: '/',
    type: ButtonType.Divide,
  },
  {
    title: '7',
    value: 7,
    type: ButtonType.Number,
  },
  {
    title: '8',
    value: 8,
    type: ButtonType.Number,
  },
  {
    title: '9',
    value: 9,
    type: ButtonType.Number,
  },
  {
    title: '0',
    value: 0,
    type: ButtonType.Number,
  },
  {
    title: '%',
    type: ButtonType.Modulo,
  },
  {
    title: 'Clear',
    type: ButtonType.Reset,
  },

  {
    title: 'AC',
    type: ButtonType.Remove,
  },
  {
    title: '-',
    type: ButtonType.Subtract,
  },
  {
    title: '+',
    type: ButtonType.Add,
  },
  {
    title: '=',
    type: ButtonType.Equal,
  },

];

const App: React.FC = () => {
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState<number>(0)
  const [operator, setOperator] = useState('');

  console.log(result, operator, memory);
  
  const handleButtonPress = (type: string, value: string) => {
    let num = parseFloat(result)

    if (isNaN(num)) {
      num = 1
    }

    console.log(num);
    

    if (type === 'number') {
      setResult(state => state + value)
    }

    if (type === 'remove') {
      setResult('')
      return;
    }

    if (type === 'reset') {
      setResult(result.slice(0, -1))
      return;
    }

    if (type === 'modulo') {
      setResult((num / 100).toString())
      return;
    }

    if (type === 'add') {
      if (operator && !result) {
        if (operator === '+') {
          setMemory(memory + num)
        } else if (operator === '-') {
          setMemory(memory - num)
        } else if (operator === '/') {
          setMemory(memory / num)
        } else if (operator === '*') {
          setMemory(num * memory)
        }
      } else {
        setMemory(num);
      }


      setOperator('+')
      setResult('')
      return;
    }

    if (type === 'subtract') {
      if (operator) {
        if (operator === '+') {
          setMemory(memory + num)
        } else if (operator === '-') {
          console.log('haha');
          
          setMemory(memory - num)
        } else if (operator === '/') {
          setMemory(memory / num)
        } else if (operator === '*') {
          setMemory(num * memory)
        }
      } else {
        setMemory(num);
      }

      setOperator('-')
      setResult('')
      return;
    }

    if (type === 'multiply') {
      
      if (operator && !result) {
        if (operator === '+') {
          setMemory(memory + num)
        } else if (operator === '-') {
          // console.log('haha');
          
          setMemory(memory - num)
        } else if (operator === '/') {
          setMemory(memory / num)
        } else if (operator === '*') {
          setMemory(num * memory)
        }
      } else {
        setMemory(num);
      }


      setOperator('*')
      setResult('')
      return;
    }

    if (type === 'divide') {
      if (operator && !result) {
        if (operator === '+') {
          setMemory(memory + num)
        } else if (operator === '-') {
          setMemory(memory - num)
        } else if (operator === '/') {
          setMemory(memory / num)
        } else if (operator === '*') {
          setMemory(num * memory)
        }
      } else {
        setMemory(num);
      }

      setOperator('/')
      setResult('')
      return;
    }

    if (type === 'equal') {
      if (!operator) return;

      if (operator === '+') {
        setResult(`${memory + num}`.toString())
      } else if (operator === '-') {
        console.log('haha');
        console.log(num);
        console.log(memory);
        
        
        setResult(`${memory - num}`.toString())
      } else if (operator === '/') {
        setResult(`${memory / num}`.toString())
      } else if (operator === '*') {
        setResult(`${num * memory}`.toString())
      }

      setOperator('')
    }
  }

  return (
  <div className="wrapper">
  <div className="result">{result}</div>

    <div className="calculator">
      {buttons.map(button => (
        <Button 
          onButtonClick={handleButtonPress}
          key={button.title}
          button={button.title}
          type={button.type}
        />
      ))}
    </div>

  </div>
  );
}

export default App;


