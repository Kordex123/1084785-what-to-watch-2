import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: undefined
      };

      this.onActiveItemChangeHandler = (activeItem) => {
        this.setState({activeItem});
      };
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveItemChange={this.onActiveItemChangeHandler}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
