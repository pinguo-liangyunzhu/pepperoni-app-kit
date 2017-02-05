import {connect} from 'react-redux';
import LoginView from './LoginView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    time: state.getIn(['counter','time']),
    loading: state.getIn(['counter', 'loading'])
  })
)(LoginView);
