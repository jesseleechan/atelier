import React, { useMemo, useState } from 'react';
import type { FurnitureCategory } from '../data/content';
import { COLLECTION_PRODUCTS } from '../data/products';
import type { ProductCategory } from '../data/products';

interface ShopPageProps {
  onOpenConsultation: () => void;
  onNavigate: (href: string) => void;
  selectedCategory?: FurnitureCategory | null;
}

const handleProductLink = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate: (href: string) => void,
) => {
  if (
    event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
  ) return;

  event.preventDefault();
  onNavigate(href);
};

export const ShopPage: React.FC<ShopPageProps> = ({
  onOpenConsultation,
  onNavigate,
  selectedCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>(
    (selectedCategory?.id as ProductCategory | undefined) ?? 'all',
  );

  const categories: Array<{ id: 'all' | ProductCategory; label: string }> = [
    { id: 'all', label: 'All pieces' },
    { id: 'beds', label: 'Beds' },
    { id: 'tables', label: 'Tables' },
    { id: 'seating', label: 'Seating' },
    { id: 'storage', label: 'Storage' },
  ];

  const filteredItems = useMemo(
    () => activeCategory === 'all'
      ? COLLECTION_PRODUCTS
      : COLLECTION_PRODUCTS.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <main id="main-content" className="collection-page">
      <header className="collection-head" aria-labelledby="collection-page-title">
        <p className="about-eyebrow">
          <span>05</span>
          <span aria-hidden="true">|</span>
          <span>Handcrafted furniture</span>
        </p>

        <div className="collection-head__primary">
          <h1 id="collection-page-title">The Collection</h1>
          <div className="collection-head__intro">
            <p>
              Furniture conceived with the discipline of interior architecture and made in small runs by specialist workshops.
            </p>
            <p>New York design / Made to order</p>
          </div>
        </div>

        <p className="collection-head__statement">
          Objects with <em>architectural intent.</em>
        </p>
      </header>

      <section className="collection-filter-bar" aria-label="Filter the collection">
        <div className="collection-filter-bar__inner">
          <div className="collection-filter-bar__filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={activeCategory === cat.id ? 'is-active' : ''}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p aria-live="polite">{String(filteredItems.length).padStart(2, '0')} pieces</p>
        </div>
      </section>

      <section className="collection-grid-section" aria-label={`${activeCategory} collection pieces`}>
        <div className="collection-grid">
          {filteredItems.map((item, index) => (
            <article key={item.id} className="collection-product">
              <a
                className="collection-product__media-link"
                href={`/collection/${item.slug}`}
                aria-label={`View ${item.title}`}
                onClick={(event) => handleProductLink(
                  event,
                  `/collection/${item.slug}`,
                  onNavigate,
                )}
              >
                <figure className="collection-product__media">
                  <div>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                  <figcaption>{String(COLLECTION_PRODUCTS.findIndex((product) => product.id === item.id) + 1).padStart(2, '0')}</figcaption>
                </figure>
              </a>

              <div className="collection-product__content">
                <p className="collection-product__category">{item.categoryLabel} / Atelier edition</p>
                <div className="collection-product__title-row">
                  <h2>
                    <a
                      href={`/collection/${item.slug}`}
                      onClick={(event) => handleProductLink(
                        event,
                        `/collection/${item.slug}`,
                        onNavigate,
                      )}
                    >
                      {item.title}
                    </a>
                  </h2>
                  <p>{item.price}</p>
                </div>
                <p className="collection-product__material">{item.material}</p>
                <div className="collection-product__details">
                  <span>{item.dimensions}</span>
                  <span>{item.availability}</span>
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    aria-label={`Inquire about the ${item.title}`}
                  >
                    Inquire <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collection-commission" aria-labelledby="commission-title">
        <div className="collection-commission__image">
          <img
            src="/images/service-design.webp"
            alt="A custom glass and timber room showing Atelier 87 material craftsmanship"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="collection-commission__content">
          <p className="about-eyebrow">
            <span>Commission</span>
            <span aria-hidden="true">|</span>
            <span>Made for your home</span>
          </p>
          <h2 id="commission-title">Made for the room, <em>not the catalogue.</em></h2>
          <p>
            Every design can be adjusted in scale, timber, stone, metal, and upholstery. We develop each commission in conversation with the room, then coordinate fabrication with the workshop from drawing through installation.
          </p>

          <dl>
            <div>
              <dt>Designed</dt>
              <dd>New York</dd>
            </div>
            <div>
              <dt>Production</dt>
              <dd>10–22 weeks</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>White glove</dd>
            </div>
          </dl>

          <button type="button" onClick={onOpenConsultation}>
            Request a custom piece
          </button>
        </div>
      </section>
    </main>
  );
};
