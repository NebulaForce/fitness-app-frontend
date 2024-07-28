import { HOME } from './routes';
import { HOME_LABEL } from './translations';

export const NAV_HOME_ID = "home";

export const MENU_ITEMS = [
      {
        id: NAV_HOME_ID,
        icon: "bi bi-house-door",
        label: HOME_LABEL,
        route: HOME,
      }
];
