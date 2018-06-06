import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import ComponentOne from 'components/lib/ComponentOne'
import ComponentTwo from 'components/lib/ComponentTwo'

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
