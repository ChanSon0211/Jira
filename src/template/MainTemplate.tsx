import React, { useEffect } from 'react'
import { Layout, Menu, MenuProps, theme } from 'antd';
import { Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { fetchAllProjectList } from 'reducers/projectSlice';


const { Header, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('project', 'sub1', <UserOutlined />, [
    getItem(<p>all Project</p>, '9'),
  ]),
  getItem(<p className='text-rose-400'>user</p>, '2', <DesktopOutlined className='text-rose-400' />),
  getItem('a', 'sub3', '.', [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];




const MainTemplate = () => {

  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.user.userProfile)

  useEffect(() => {

    dispatch(fetchAllProjectList(''))

  }, [])



  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>


        <Header style={{ padding: 0, background: colorBgContainer }} >
          <div className='flex justify-end items-center'>
            <div className='flex gap-2 items-center'>
              <img className='w-[40px] rounded-full' src={`${profile?.avatar}`} alt="..." />
              <h2 className='text-lg font-semibold'>{profile?.name}</h2>
            </div>
          </div>
        </Header>



        <section>
          <Outlet />
        </section>



        <Footer className='mt-10' style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default MainTemplate