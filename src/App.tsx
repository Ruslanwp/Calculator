import React, { useState } from 'react';
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
  Dot = 'dot',
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
    title: '+',
    type: ButtonType.Add,
  },
  
  {
    title: '%',
    type: ButtonType.Modulo,
  },
  {
    title: '0',
    value: 0,
    type: ButtonType.Number,
  },
  {
    title: '=',
    type: ButtonType.Equal,
  },
  {
    title: '-',
    type: ButtonType.Subtract,
  },
  {
    title: 'AC',
    type: ButtonType.Remove,
  },
  
  {
    title: 'Clear',
    type: ButtonType.Reset,
  },
  {
    title: '.',
    type: ButtonType.Dot,
  },
];

const App: React.FC = () => {
  const [result, setResult] = useState('');
  const [memory, setMemory] = useState(0)
  const [operator, setOperator] = useState('');

  const handlerByButtonType: Record<ButtonType, (str: string) => void> = {
    [ButtonType.Number]: (str) => {
      setResult(state => state + str)
    },

    [ButtonType.Remove]: () =>  setResult(result.slice(0, -1)),
    [ButtonType.Reset]: () => setResult(''),
    [ButtonType.Modulo]: () => setResult((Number(result) / 100).toString()),
    [ButtonType.Dot]: (str) => {
      if (!result.includes(str)) {
        setResult(state => state + str)
      }
    },
    [ButtonType.Multiply]: () => {
      setOperator('*');
      setMemory(+result);
      setResult('');
    },

    [ButtonType.Divide]: () => {
      setOperator('/');
      setMemory(+result);
      setResult('');
    },

    [ButtonType.Subtract]: () => {
      setOperator('-');
      setMemory(+result);
      setResult('');
    },

    [ButtonType.Add]: () => {
      setOperator('+');
      setMemory(+result);
      setResult('');
    },

    [ButtonType.Equal]: () => {
      switch (operator) {
        case '+':
          setResult((memory + Number(result)).toString());
          setMemory(+result);
            break;

        case '-':
          setResult((memory - Number(result)).toString());
          setMemory(+result);
            break;

        case '*':
          setResult((memory * Number(result)).toString());
          setMemory(+result);
            break;

        case '/':
          setResult((memory / Number(result)).toString());
          setMemory(+result);
            break;

          default: setResult(result);
      }
    },
  };

  return (
    <div className="wrapper">
    <div className="result">{result}</div>
      <div className="calculator">
        {buttons.map(button => (
          <Button 
            handler={handlerByButtonType[button.type]}
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
