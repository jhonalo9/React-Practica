
import { createAlova } from 'alova';
import ReactHook from 'alova/react';
import adapterFetch from 'alova/fetch';

export const alovaInstance = createAlova({
  baseURL: 'http://localhost:3001',
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  
});
