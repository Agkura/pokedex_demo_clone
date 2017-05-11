import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  item: state.pokemon.items,
  params: ownProps.match.params
});
