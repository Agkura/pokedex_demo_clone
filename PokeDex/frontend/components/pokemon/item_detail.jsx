import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, price, happiness, image_url } = this.props.item;
    return (
      <div>
        <ul className="item-details">
          <li><p>{name}</p></li>
          <li><p>{price}</p></li>
          <li><p>{happiness}</p></li>
          <li><img src={image_url}></img></li>
        </ul>
      </div>
    );
  }


}

export default ItemDetail;
