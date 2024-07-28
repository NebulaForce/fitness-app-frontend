import { FC } from 'react';
import classNames from 'classnames';
import { MENU_ITEMS } from '../../../constants/common';
import MenuItem from '../../molecules/MenuItem';
import './styles.css';

interface Props {
  isOpen: boolean,
  selectedItemId: string
}
const SideMenu: FC<Props> = ({
  isOpen,
  selectedItemId,
}) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="side-menu">
        {
          MENU_ITEMS.map((item) => {
            const selectedItem = selectedItemId == item.id;
            return <MenuItem key={item.id} icon={item.icon} label={item.label} route={item.route} sideMenuOpened={isOpen} selected={selectedItem} />
          })
        }
      </div>
    </div>
  )
};

export default SideMenu;