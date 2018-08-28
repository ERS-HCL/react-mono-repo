import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import ComponentOne from '@tsukhu/components/lib/ComponentOne';
import ComponentTwo from '@tsukhu/components/lib/ComponentTwo';

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={[
      {
        imports: { ComponentOne, ComponentTwo },
        path: '/',
        title: 'Introduction',
        content: pageLoader('intro.md')
      }
    ]}
  />,
  document.getElementById('root')
);
