import PropTypes from 'prop-types';
import React from 'react'

interface Props {
  button: string,
  type: string,
  onButtonClick: (type: string, button: string) => void,
}

export const Button: React.FC<Props> = (props) => {
  const { button, type, onButtonClick } = props;
  return (
    <div
      className="operators__operator operator"
      onClick={() => {
        onButtonClick(type, button);
      }}
    >
      {button}
    </div>
  );
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}
