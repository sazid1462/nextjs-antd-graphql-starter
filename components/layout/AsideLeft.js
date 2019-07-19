import React, { Fragment } from 'react';
import { Icon, Menu } from 'antd';
import Brand from './brand/Brand';
import Link from 'next/link';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig();
const {ROOT_PATH} = publicRuntimeConfig;

const { SubMenu } = Menu;

const AsideLeft = ({ collapsed, navs }) => {

    const headerLogoClassName = collapsed ? 'brand collapsed' : 'brand';

    /* Menu Binding Start */
    const getMenuItems = (item) => {
        return item.subMenu ? bindSubMenuItem(item) : bindSingleMenuItem(item);
    };

    const bindSingleMenuItem = (item) => {
        return (
            <Menu.Item key={item.key}>
                {item.icon}
                <span>{item.title}</span>
                {item.path && <Link href={item.path} as={item.pathAs}><a /></Link>}
            </Menu.Item>
        )
    };

    const bindSubMenuItem = (item) => {
        return (
            <SubMenu
                key={item.key}
                title={
                    <span>
                        {item.icon}
                        <span>{item.title}</span>
                    </span>
                }
            >
                {item.subMenu.map(item => getMenuItems(item))}
            </SubMenu>
        )
    };
    /* Menu Binding End */

    return (
        <Fragment>
            <Link href={ROOT_PATH}>
                <a><Brand brandText={'Logo'} icon={<Icon style={{ color: '#ff0000' }} type="dingding" />}
                    className={headerLogoClassName} /></a>
            </Link>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {navs.map(item => getMenuItems(item))}
            </Menu>
        </Fragment>
    );
};

AsideLeft.defaultProps = {
    navs: []
};

export default AsideLeft;
