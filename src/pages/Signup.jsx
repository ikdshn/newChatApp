import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import firebase from "../config/firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => console.log("登録完了"))
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Signup
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">{"Already have an account? Login"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
// import React, { useState } from "react";
// import firebase from "firebase";
//
// const Login = ({ history }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         console.log("ログイン成功");
//         history.push("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//
//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };
//
// export default Login;
// import React, { useState } from "react";
// import firebase from "firebase";
//
// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => console.log("登録完了"))
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//
//   return (
//     <>
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };
//
// export default Signup;
