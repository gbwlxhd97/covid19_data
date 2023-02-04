
import { layoutList } from '@src/model/layout';
import styled from 'styled-components';
import DBDLABSvg from '@src/assets/imgs/DBDLABLOGO.svg';
import dashboard from '@src/assets/imgs/dashboard.svg';
import research from '@src/assets/imgs/research.svg';
import members from '@src/assets/imgs/members.svg';
import insight from '@src/assets/imgs/insight.svg';
import calendar from '@src/assets/imgs/calendar.svg';
import { useRouter } from 'next/router';


type Props = {
  children: React.ReactNode;
};



const Layout = ({children} :Props) => {
  const router = useRouter()
  const { asPath } = router;
  return (
    <Container>
      <SideTab>
        <Logo width={145} height={30} />
        <Nav>
          <Ol>
            {layoutList.map((menu, i) => (
              <Li
                key={menu.name}
                onClick={() => {
                  router.push(menu.url ? menu.url : '/');
                }}
              >
                {menu.name === 'Dashboard' && <Dash />}
                {menu.name === 'Research' && <Research />}
                {menu.name === 'Members' && <Members />}
                {menu.name === 'Insight' && <Insight />}
                {menu.name === 'Calendar' && <Calendar />}
                <Category isActive={asPath === menu.url}>{menu.name}</Category>
              </Li>
            ))}
          </Ol>
        </Nav>
      </SideTab>
      <Content>{children}</Content>
    </Container>
  );
};

const Logo = styled(DBDLABSvg)`
`;

const Dash = styled(dashboard)``;
const Research = styled(research)``;
const Members = styled(members)``;
const Insight = styled(insight)``;
const Calendar = styled(calendar)``;

const Container = styled.div`
  display: flex;
  padding: 0 50px;
  height: 100vh;
  padding: 72px 50px 0 33px;
`;

const SideTab = styled.div`
  flex: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px 0 0 40px;
  `;

const Content = styled.div`
  flex:3;
  `;

const Nav = styled.nav`
  margin-top: 50px;
  `;

const Ol = styled.ol``;

const Li = styled.li`
  cursor: pointer;
  margin-top: 40px;
`;

const Category = styled.span<{ isActive: boolean }>`
  margin-left: 10px;
  color: ${({ isActive }) => (isActive ? '#2878f0' : '#282828')};
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  font-size: 16px;
`;

export default Layout;
