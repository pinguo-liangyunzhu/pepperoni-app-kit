import {connect} from 'react-redux';
import LoginView from './LoginView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    time: state.getIn(['counter','time']),
    loading: state.getIn(['counter', 'loading']),
    email: state.getIn(['counter','email']),
    password: state.getIn(['counter','password']),
    code: state.getIn(['counter','code']),
    responseData:state.getIn(['counter','responseData']),
  })
)(LoginView);
