import HeaderStyle, {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = () => {


const handleSubmit=(e)=>{
  e.preventDefault()

}





  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
      <FoodInput type="text" placeholder="search" />
      <Button>SEARCH</Button>
      <Select>
        <option></option>

      </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
