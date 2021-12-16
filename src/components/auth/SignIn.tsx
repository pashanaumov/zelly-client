// import React, { PureComponent } from 'react';
// import { compose } from 'redux';
// import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
// import LoginInput from './LoginInput';
// import { LoginService } from '../../Services/Auth/LoginService';
// import { signIn } from '../../redux/actions/authActions';
// import '../../css/Login/Login.css';
// import {RootState} from "../../redux/store";
//
// const SignIn = () => {
//   function onSubmit(formProps) {
//     this.props.signIn(formProps, () => {
//       this.props.history.push('/');
//     });
//   }
//
//   function onRenderUid(props) {
//     return <LoginInput {...props} placeholder={'Уникальный Идентификатор'} />;
//   }
//
//   function onRenderPassword(props) {
//     return <LoginInput {...props} placeholder={'Пароль'} type="password" />;
//   }
//
//   const { handleSubmit } = this.props;
//   return (
//     <div className="sign-in-container">
//       <form onSubmit={handleSubmit(this.onSubmit)} className="sign-in-form">
//         <div className="sign-in-text">
//           <h5>Войдите в свой аккаунт</h5>
//         </div>
//         <div>
//           <fieldset>
//             <Field key={'uid'} name="uid" type="text" autoComplete="none" component={this.onRenderUid} />
//           </fieldset>
//           <fieldset>
//             <Field name="password" type="password" autoComplete="current-password" component={this.onRenderPassword} />
//           </fieldset>
//         </div>
//         <div>{this.props.errorMessage}</div>
//         <button className="login-form-submit-button">
//           <p>Продолжить</p>
//         </button>
//       </form>
//     </div>
//   );
// };
//
// const mapStateToProps = (state: RootState) => ({
//   errorMessage: state.auth.errorMessage,
//   user: state.currentUser,
//   auth: state.auth,
// });
//
// export default compose(connect(mapStateToProps, { signIn }), reduxForm({ form: 'signIn' }))(SignIn);

export default () => {};
