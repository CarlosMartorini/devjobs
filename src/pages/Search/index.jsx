// import Header from '../../components/Header';
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  ContainerPage,
  ContainerSearch,
  ContainerCards,
  SearchBar,
} from "./styles";
import Header from "../../components/Header";
import CardDev from "../../components/CardDev";

const Search = () => {
  return (
    <>
      <Header />
      <ContainerPage>
        <ContainerSearch>
          <SearchBar>
            <Input setHeight="10%" setWidth="20%" placeholder="Techs" />
            <Input
              setHeight="20%"
              setWidth="20%"
              placeholder="Specialization"
            />
            <Input setHeight="20%" setWidth="100%" placeholder="Seniority" />
            <Input setHeight="20%" setWidth="20%" placeholder="Disponibility" />
            <Button setColor="var(--blue)" setSize="large" setClick={""}>
              Search
            </Button>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          <CardDev/>
          <CardDev/>
          <CardDev/>
          <CardDev/>
        </ContainerCards>
      </ContainerPage>
    </>
  );
};

export default Search;
