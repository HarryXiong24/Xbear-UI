import routers from './index';

const component = routers.filter((item) => {
  if (item.path === '/components') {
    return item;
  }
});

console.log(component);

const sidebar: string[][] = [];
component[0].children!.forEach((item) => {
  sidebar.push([`/components/${item.path!}`, item.path!]);
});

export default sidebar;
