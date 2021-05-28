import React from 'react';
import './loader-styles.css';
import { Spinner } from 'react-bootstrap';
import { ILoaderProps } from '../../interfaces/loader';

const Loader: React.FC<ILoaderProps> = (props) => {
  const { containerHeight } = props;

  return (
    <div className="spinner-container" style={{ height: `${containerHeight}px` }}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
