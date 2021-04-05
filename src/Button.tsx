import PropTypes from 'prop-types';
import React from 'react'

interface Props {
  button: string,
  type: string,
  handler: (title: string) => void,
}

export const Button: React.FC<Props> = (props) => {
  const { button, handler } = props;

  const handleButton = () => {
    console.log(button);
    handler(button)
  }

  return (
    <div
      className="operators__operator operator"
      onClick={handleButton}
    >
      {button}
    </div>
  );
}
