import {Provider} from 'react-redux';
import {store} from './store';
import {FC, PropsWithChildren} from 'react';

export const ProvaiderStore: FC<PropsWithChildren> = ({children}) => {
 
  return <Provider store={store}>{children}</Provider>;
};
