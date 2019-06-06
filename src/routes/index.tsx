import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

interface RoutesConfig {
  name: string;
  path: string;
  component?: (props: any) => JSX.Element;
  exact?: boolean;
  to?: string;
};

export default function createRoutes(configs: RoutesConfig[]) {
  const routes = configs.map(config => createRoute(config));
  
  return (
    <Switch>
      {routes}
    </Switch>
  );
}

function createRoute(config) {
  const {name, path, component, exact , to} = config;
  if(path && to) {
    return <Redirect key={name} from={path} to={to} exact={exact||false}/>
  }
  return <Route key={name} path={path} component={component} exact={exact || false}/>
}