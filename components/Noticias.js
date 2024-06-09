import React from 'react';
import Link from 'next/link';

function Noticias({ posts, idioma }) {
  // Ordenar los posts por fecha de forma descendente
  const postsOrdenados = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  // Tomar solo los primeros 4 posts
  const cuatroMasRecientes = postsOrdenados.slice(0, 4);

  return (
    <div className="row">
      {cuatroMasRecientes.map(post => (
        <div key={post.slug} className="col-lg-3 col-md-3 col-sm-3 col-xs-6 custom-col">
          <figure>
          <Link href={`/${idioma}/${post.slug}`}>
              <img src={`./${post.url_image}`} alt={post.title} className="img-fluid custom-img" style={{ width: '280px', height: '152px' }} />
            </Link>
            <figcaption className="image-caption text-left" style={{ color: '#575756' }}>
              <Link href={`/${idioma}/${post.slug}`}>
                <div style={{ textDecoration: 'none', color: 'inherit' }}>
                  <p className="allmode-title">{post.title}</p>
                </div>
              </Link>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
