import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import classNames from "classnames";
import "./styles.css";

export interface MenuGroupProps {
    icon: any;
    label: string;
    route: any;
    sideMenuOpened: boolean;
    selected: boolean;
}

const MenuItem: FC<MenuGroupProps> = ({
    icon,
    label,
    route,
    sideMenuOpened,
    selected
}) => {
    return (
        <NavLink tag={Link} to={route} className={classNames("option-container",{ "selected-container": selected })}>
            <i className={`${icon} icon`}></i>
            <p className={classNames("item-label", "label", { "selected": selected, "not-displayed": !sideMenuOpened})}>
                {label}
            </p>
        </NavLink>
    );
};

export default MenuItem;
