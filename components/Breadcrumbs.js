import Link from 'next/link';
import React from 'react';

export const Breadcrumbs = ({ paths }) => {
  return (
    <div id='ruta'>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            {index < paths.length - 1 ? (
              <li style={{
                display: 'flex',
                alignItems: 'center',
                color: '#7D6CAE',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                lineHeight: '1.42857px',
                textDecoration: 'none',
                wordSpacing: '0px',
                cursor: 'pointer'
              }}>
                <Link href={path.href} passHref style={{color:"#7D6CAE"}}>
                  <span>{path.label}</span>
                </Link>
                <span style={{ padding: '0 8px', color: '#666' }}> &gt; </span>
              </li>
            ) : (
              <li style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6c757d',
              }}>
                <span style={{ textDecoration: 'none', color: 'inherit' }}>{path.label}</span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
