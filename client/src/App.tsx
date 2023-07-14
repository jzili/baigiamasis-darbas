import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMain, StyledSection } from './styles/UtilityStyles';
import SearchFilter from './components/Organisms/SearchFilter';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <StyledSection>
          <SearchFilter />
        </StyledSection>
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;
