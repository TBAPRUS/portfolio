import * as React from 'react';
import { connect } from 'react-redux';

import { AppType } from '../store';

import { WindowType } from '../store/window/types';

import { fetchGetProducts } from '../store/products/actions';

import Menu from './menu';
import Products from './products';

import { Load } from './layout/Load';
import { Window } from './layout/Window';

interface AppProps {
  load: boolean;
  window: WindowType;
  fetchGetProducts: typeof fetchGetProducts;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchGetProducts();
  }
  render() {
    if (this.props.load) {
      return <Load />;
    }
    return (
      <div id="app">
        {this.props.window.title && <Window />}
        <h1>Table UI</h1>
        <hr />
        <Menu />
        <Products />
      </div>
    );
  }
}

const mapStateToProps = (state: AppType) => {
  const { load, window } = state;
  return { load, window };
};

export default connect(mapStateToProps, { fetchGetProducts })(App);
