import PropTypes from 'prop-types';
import React from 'react'

interface Props {
  button: string,
  type: string,
  handler: (title: string) => void,
}


export const Button: React.FC<Props> = (props) => {
  const { button, type, handler } = props;
  return (
    <div
      className="operators__operator operator"
      onClick={() => {
        console.log(button);
        handler(button)
      }}
    >
      {button}
    </div>
  );
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
}
