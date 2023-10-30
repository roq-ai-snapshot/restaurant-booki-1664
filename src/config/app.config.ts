interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Book a table', 'Edit personal info'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage menus for the restaurant',
    'Manage reservations',
    'Manage employees',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/5239ada7-724e-4f5b-a477-7fda21de9b52',
};
