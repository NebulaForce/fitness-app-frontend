import { FC, useState } from 'react';
import Header from '../../molecules/Header';
import './styles.css';
import classNames from "classnames";
import SideMenu from '../../organism/SideMenu';

export interface DashboardProps {
  selectedItemId: string;
  children: any;
}

const DashboardTemplate: FC<DashboardProps> = ({selectedItemId, children}) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Header />
      <div className="dashboard-main-container">
        <SideMenu isOpen={sidebarOpen} selectedItemId={selectedItemId}/>
        <div className={classNames("dashboard-content", { "wider-dashboard": !sidebarOpen })}>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;