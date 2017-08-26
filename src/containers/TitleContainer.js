import {connect} from 'react-redux';
import Title from '../components/Title';

const mapState = (state) => ({
  title: state.home.title,
});

export default connect(mapState, {})(Title);
