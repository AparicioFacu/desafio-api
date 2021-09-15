import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationB = ({ page, setPage }) => {
    let items = [];
    let active = page;
    let sigPag = 8;
    let number = 1;

    for (number; number < sigPag; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }
    const pageNext = () => {
        setPage(page + 1);
    };
    const pagePrevious = () => setPage(page - 1);
    const isPreviousPage = page === 1;
    const isNextPage = page === 34;

    return (
        <div>
            <Pagination>
                <Pagination.Prev onClick={pagePrevious} />,{items}
                <Pagination.Next onClick={pageNext} />;
            </Pagination>
        </div>
    );
};

export default PaginationB;
