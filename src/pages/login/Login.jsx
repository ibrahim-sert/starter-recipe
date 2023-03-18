import LoginStyle, {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import mealSvg from "../../assets/meal.svg";
import { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Abraham>"} RECIPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
            type="text"
            placeholder="username"
            required
          />
          <StyledInput
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            type="password"
            placeholder="password"
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
