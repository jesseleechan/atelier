import React from 'react';
import { CallToAction } from '../components/CallToAction';
import { PRODUCT_DETAILS } from '../data/productDetails';
import { COLLECTION_PRODUCTS } from '../data/products';
import type { CollectionProduct } from '../data/products';

interface ProductDetailPageProps {
  product: CollectionProduct;
  onNavigate: (href: string) => void;
  onOpenConsultation: () => void;
}

const handleInternalLink = (
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

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigate,
  onOpenConsultation,
}) => {
  const detail = PRODUCT_DETAILS[product.slug];
  const productIndex = COLLECTION_PRODUCTS.findIndex((item) => item.id === product.id);
  const relatedProducts = Array.from(
    { length: 4 },
    (_, index) => COLLECTION_PRODUCTS[(productIndex + index + 1) % COLLECTION_PRODUCTS.length],
  );

  return (
    <main id="main-content" className="product-detail-page">
      <section className="product-detail-back" aria-label="Collection navigation">
        <a
          href="/collection"
          onClick={(event) => handleInternalLink(event, '/collection', onNavigate)}
        >
          <span aria-hidden="true">←</span>
          The Collection
        </a>
        <p>{product.categoryLabel} / {detail.edition}</p>
      </section>

      <header className="product-detail-title">
        <p className="about-eyebrow">
          <span>Atelier edition</span>
          <span aria-hidden="true">|</span>
          <span>{String(productIndex + 1).padStart(2, '0')}</span>
        </p>

        <div className="product-detail-title__row">
          <h1>{product.title}</h1>
          <div className="product-detail-title__summary">
            <p>{product.material}</p>
            <p>{product.price}</p>
            <button type="button" onClick={onOpenConsultation}>
              Inquire about this piece
            </button>
          </div>
        </div>
      </header>

      <figure className="product-detail-hero">
        <div className="product-detail-hero__stage">
          <span aria-hidden="true">{String(productIndex + 1).padStart(2, '0')}</span>
          <img src={product.image} alt={product.imageAlt} decoding="async" />
        </div>
        <figcaption>
          <span>{product.title}</span>
          <span>{detail.edition} / Made to order</span>
        </figcaption>
      </figure>

      <section className="product-detail-specs" aria-label="Product specifications">
        <dl>
          <div>
            <dt>Dimensions</dt>
            <dd>{product.dimensions}</dd>
          </div>
          <div>
            <dt>Primary material</dt>
            <dd>{product.material}</dd>
          </div>
          <div>
            <dt>Origin</dt>
            <dd>{detail.origin}</dd>
          </div>
          <div>
            <dt>Production</dt>
            <dd>{product.availability}</dd>
          </div>
          <div>
            <dt>Edition</dt>
            <dd>{detail.edition}</dd>
          </div>
        </dl>
      </section>

      <section className="product-detail-craft" aria-labelledby="product-craft-title">
        <div className="product-detail-craft__heading">
          <p className="about-eyebrow">
            <span>01</span>
            <span aria-hidden="true">|</span>
            <span>Craft and intention</span>
          </p>
          <h2 id="product-craft-title">{detail.craftTitle}</h2>
          <blockquote>“{detail.quote}”</blockquote>
        </div>

        <div className="product-detail-craft__copy">
          {detail.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <dl>
            {detail.craftNotes.map((note) => (
              <div key={note.label}>
                <dt>{note.label}</dt>
                <dd>{note.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="product-detail-story" aria-label={`${product.title} design story`}>
        {detail.chapters.map((chapter, index) => (
          <article
            key={chapter.eyebrow}
            className={`product-story-unit product-story-unit--${index === 1 ? 'wide' : 'split'}${index === 2 ? ' product-story-unit--reverse' : ''}`}
          >
            <figure className="product-story-unit__media">
              <img
                src={chapter.image}
                alt={chapter.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{chapter.caption}</figcaption>
            </figure>

            <div className="product-story-unit__copy">
              <p>{chapter.eyebrow}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="product-detail-related" aria-labelledby="related-products-title">
        <div className="product-detail-related__head">
          <p className="about-eyebrow">Continue exploring</p>
          <h2 id="related-products-title">Explore the Collection</h2>
          <a
            href="/collection"
            onClick={(event) => handleInternalLink(event, '/collection', onNavigate)}
          >
            View all pieces
          </a>
        </div>

        <div className="product-detail-related__grid">
          {relatedProducts.map((relatedProduct) => (
            <article key={relatedProduct.id}>
              <a
                href={`/collection/${relatedProduct.slug}`}
                aria-label={`View ${relatedProduct.title}`}
                onClick={(event) => handleInternalLink(
                  event,
                  `/collection/${relatedProduct.slug}`,
                  onNavigate,
                )}
              >
                <figure>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <p>{relatedProduct.categoryLabel} / {relatedProduct.price}</p>
                <h3>{relatedProduct.title}</h3>
                <span>View piece →</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <CallToAction
        onOpenConsultation={onOpenConsultation}
        title="Commissioned around your home"
        description="Scale, finish, and material can be adjusted in conversation with the room. Share the piece you are considering and where it will live."
        buttonLabel="Begin a commission"
      />
    </main>
  );
};
