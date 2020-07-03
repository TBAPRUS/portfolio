import * as React from 'react';
import { connect } from 'react-redux';

import { AppType } from '../../store';

import { ProductsType } from '../../store/products/types';

import {
  selectProducts,
  changeRemove,
  deleteProducts,
} from '../../store/products/actions';

interface ProductsProps {
  sort: number;
  perpage: number;
  page: number;
  columns: string[];
  products: ProductsType;
  selectProducts: typeof selectProducts;
  changeRemove: typeof changeRemove;
  deleteProducts: typeof deleteProducts;
}

const Products: React.SFC<ProductsProps> = ({
  sort,
  perpage,
  page,
  columns,
  products,
  selectProducts,
  changeRemove,
  deleteProducts,
}) => {
  const relevant: (
    | 'product'
    | 'calories'
    | 'fat'
    | 'carbs'
    | 'protein'
    | 'iron'
  )[] = ['product', 'calories', 'fat', 'carbs', 'protein', 'iron'];
  const clone = [...products];
  let productsNew = sort
    ? clone.sort((a, b) =>
        a[relevant[sort - 1]] > b[relevant[sort - 1]] ? 1 : -1
      )
    : clone;
  let UIproducts;
  if (columns.length !== 0) {
    productsNew = productsNew.slice(page * perpage, (page + 1) * perpage);

    UIproducts = productsNew.map((product, index) => (
      <div key={index} className="product">
        <input
          readOnly
          id={product.product}
          type="checkbox"
          checked={product.selected}
        />
        <label
          onClick={() => selectProducts([product.id])}
          htmlFor={product.product}
        ></label>
        {relevant.map(
          (e, index) =>
            columns.indexOf((index + 1).toString()) !== -1 && (
              <p key={index}>{product[e]}</p>
            )
        )}
        <div className="delete">
          <a onClick={() => changeRemove(product.id)} href="#">
            delete
          </a>
        </div>
        {product.remove && (
          <div className="remove">
            <p>
              Are you sure you want to <span>delete item</span>?
            </p>
            <div className="btn">
              <a href="#" onClick={() => changeRemove(product.id)}>
                Cancel
              </a>
              <a href="#" onClick={() => deleteProducts([product.id])}>
                Confirm
              </a>
            </div>
          </div>
        )}
      </div>
    ));

    const allchecked =
      productsNew.length ===
      productsNew.filter((product) => product.selected).length;
    UIproducts.unshift(
      <div key="main" className="product">
        <input readOnly id="main" type="checkbox" checked={allchecked} />
        <label
          onClick={() =>
            allchecked
              ? selectProducts(products.map(({ id }) => id))
              : selectProducts(
                  products
                    .filter(({ selected }) => !selected)
                    .map(({ id }) => id)
                )
          }
          htmlFor="main"
        ></label>
        {[
          'Product (100g serving)',
          'Calories',
          'Fat (g)',
          'Carbs (g)',
          'Protein (g)',
          'Iron (%)',
        ].map(
          (el, index) =>
            columns.indexOf((index + 1).toString()) !== -1 && (
              <p
                key={index}
                className={sort === index + 1 ? 'active' : 'inactive'}
              >
                {el}
              </p>
            )
        )}
      </div>
    );
  }
  return (
    <div className="products">{columns.length !== 0 ? UIproducts : ''}</div>
  );
};

const mapStateToProps = (state: AppType) => {
  const { sort, perpage, page, columns } = state.menu;
  const { products } = state;
  return { sort, perpage, page, columns, products };
};

export default connect(mapStateToProps, {
  selectProducts,
  changeRemove,
  deleteProducts,
})(Products);
