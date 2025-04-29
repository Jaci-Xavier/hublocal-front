import * as H from './styles';
import { Div } from '../Div';
import BusinessIcon from '@mui/icons-material/Business';
import AccountMenu from '../Menu';


export function Header() {
  return (
    <H.HeaderContainer>
        <Div
            width="22vw"
            height="8vh"
            backgroundColor="#ffffff"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap='1rem'
            padding="0 2rem"
        >
            <BusinessIcon style={{ fontSize: '2rem', color: '#000' }} />
            <H.HeaderText>Minhas Empresas</H.HeaderText>
        </Div>
        <Div
            width="13vw"
            height="8vh"
            backgroundColor="#EAEAEA"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
            gap='1rem'
            padding="0 2rem"
        >
            <AccountMenu/>
        </Div>
    </H.HeaderContainer>
  )
};