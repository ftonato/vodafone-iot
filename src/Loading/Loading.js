import React from 'react';
import loadingSVG from './loading.svg';

const style = {
  width: '320px',
  margin: '0 auto'
}

export default () => <div style={style}><img alt="Loading" src={loadingSVG} /></div>;
