import * as React from 'react';
import { connect } from 'react-redux';

import { AppType } from '../../store';

import { ProductsType } from '../../store/products/types';

import {
  changeSort,
  changePerpage,
  changePage,
  changeColumns,
  changeList,
} from '../../store/menu/actions';

import { deleteProducts } from '../../store/products/actions';
import { changeWindow } from '../../store/window/actions';

interface MenuProps {
  sort: number;
  perpage: number;
  page: number;
  columns: string[];
  list: boolean;
  products: ProductsType;
  changeSort: typeof changeSort;
  changePerpage: typeof changePerpage;
  changePage: typeof changePage;
  changeColumns: typeof changeColumns;
  changeList: typeof changeList;
  deleteProducts: typeof deleteProducts;
  changeWindow: typeof changeWindow;
}

const Menu: React.SFC<MenuProps> = ({
  sort,
  perpage,
  page,
  columns,
  list,
  products,
  changeSort,
  changePerpage,
  changePage,
  changeColumns,
  changeList,
  deleteProducts,
  changeWindow,
}) => {
  const handleChangeSort = (id: number) => {
    changeSort(id === sort ? 0 : id);
  };

  const handleChangeColumns = (id: string) => {
    changeColumns(
      columns.indexOf(id) === -1
        ? [...columns, id]
        : columns.filter((column) => column !== id)
    );
  };

  const UI = [
    'Product (100g serving)',
    'Calories',
    'Fat (g)',
    'Carbs (g)',
    'Protein (g)',
    'Iron (%)',
  ];

  const UIsort = UI.map((el, index) => (
    <button
      key={index}
      onClick={() => handleChangeSort(index)}
      className={sort === ++index ? 'active' : 'inactive'}
    >
      {el}
    </button>
  ));

  const UIperpage = [10, 15, 20].map(
    (el, index) =>
      el !== perpage && (
        <li
          key={index}
          onClick={() => {
            changePage(Math.floor(page * (perpage / el)));
            changePerpage(el);
          }}
        >
          {el} per page
        </li>
      )
  );

  const UIcolumns = UI.map((el, index) => {
    return (
      <div key={el} className="column">
        <input
          readOnly
          type="checkbox"
          checked={columns.indexOf((index + 1).toString()) !== -1}
          id={el}
        />
        <label
          onClick={() => handleChangeColumns((index + 1).toString())}
          htmlFor={el}
        >
          {el}
        </label>
      </div>
    );
  });

  UIcolumns.unshift(
    <div key="0" className="column">
      <input readOnly id="0" type="checkbox" checked={columns.length === 6} />
      <label
        onClick={() =>
          changeColumns(
            columns.length === 6 ? [] : ['1', '2', '3', '4', '5', '6']
          )
        }
        htmlFor={'0'}
      >
        Select All
      </label>
    </div>
  );

  const selectlen = products.filter((product) => product.selected).length;

  return (
    <div className="menu">
      <div className="sort">
        <p>Sort by:</p>
        {UIsort}
      </div>
      <div className="delete">
        <button
          disabled={selectlen < 1}
          onClick={() =>
            changeWindow({
              title: 'Delete',
              text: 'Are you sure?',
              actions: [
                {
                  answer: 'Delete',
                  method: () =>
                    deleteProducts(
                      products
                        .filter(({ selected }) => selected)
                        .map(({ id }) => id)
                    ),
                },
              ],
            })
          }
          className={selectlen ? 'active' : 'inactive'}
        >
          Delete {selectlen ? `(${selectlen})` : ''}
        </button>
      </div>
      <div className="perpage">
        <a href="#">
          {perpage} per page{' '}
          <img
            src="tabelui/dist/img/arrowdark.png"
            alt="arrow"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </a>
        <ul>{UIperpage}</ul>
      </div>
      <div className="page">
        <button
          onClick={() => changePage(--page)}
          className={page < 1 ? 'inactive' : 'active'}
          disabled={page < 1}
        >
          <img
            style={{ transform: page < 1 ? 'rotate(90deg)' : 'rotate(0deg)' }}
            src={`tabelui/dist/img/arrow${page < 1 ? 'bright' : 'dark'}.png`}
            alt="arrow"
          />
        </button>
        <p>
          <span>
            {page * perpage + 1}-{(page + 1) * perpage}
          </span>{' '}
          of <span>{products.length}</span>
        </p>
        <button
          onClick={() => changePage(++page)}
          className={
            (page + 1) * perpage >= products.length ? 'inactive' : 'active'
          }
          disabled={(page + 1) * perpage >= products.length}
        >
          <img
            style={{
              transform:
                (page + 1) * perpage >= products.length
                  ? 'rotate(-90deg)'
                  : 'rotate(180deg)',
            }}
            src={`tabelui/dist/img/arrow${
              (page + 1) * perpage >= products.length ? 'bright' : 'dark'
            }.png`}
            alt="arrow"
          />
        </button>
      </div>
      <div className={`columns${list ? ' active' : ' inactive'}`}>
        <a onClick={() => changeList(!list)} href="#">
          {columns.length} column{columns.length > 1 ? 's' : ''} selected
          <img
            src="tabelui/dist/img/arrowdark.png"
            alt="arrow"
            style={{ transform: 'rotate(-90deg)' }}
          />
        </a>
        <div className="list">{UIcolumns}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppType) => {
  const { sort, perpage, page, columns, list } = state.menu;
  const { products } = state;
  return { sort, perpage, page, columns, list, products };
};

export default connect(mapStateToProps, {
  changeSort,
  changePerpage,
  changePage,
  changeColumns,
  changeList,
  deleteProducts,
  changeWindow,
})(Menu);
