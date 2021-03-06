import React from 'react';
import store from '../Store';

export default ({ importComponent, mountCallback, el_loading }) =>
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      if (typeof mountCallback === 'function') {
        store.dispatch(mountCallback());
      }

      // reset window scroll state
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.querySelector('html').scrollTop = 0;

      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      const LoadingIndicator = el_loading;

      return C ? (
        <C {...this.props} />
      ) : el_loading ? (
        <LoadingIndicator />
      ) : null;
    }
  };
