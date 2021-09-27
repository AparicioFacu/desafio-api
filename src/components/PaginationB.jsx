import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationB = ({ page, setPage }) => {
    const pageNext = () => {
        setPage(page + 1);
    };
    const pagePrevious = () => setPage(page - 1);
    const lastPage = () => setPage(34);
    const firstPage = () => setPage(1);
    const isPreviousPage = page === 1;
    const isNextPage = page === 34;

    // const pagBoton = (event) => {
    //     setPage(event.target.innerText);
    // };

    return (
        <div className="d-flex justify-content-center pagination">
            <Pagination>
                <Pagination.First
                    onClick={firstPage}
                    disabled={isPreviousPage}
                />
                <Pagination.Prev
                    onClick={pagePrevious}
                    disabled={isPreviousPage}
                />
                <Pagination.Ellipsis disabled />
                {page === 1 || page === 2 || (
                    <Pagination.Item>{page - 2}</Pagination.Item>
                )}
                {page === 1 || <Pagination.Item>{page - 1}</Pagination.Item>}
                <Pagination.Item active>{page}</Pagination.Item>
                {page === 34 || <Pagination.Item>{page + 1}</Pagination.Item>}
                {page === 34 || page === 33 || (
                    <Pagination.Item>{page + 2}</Pagination.Item>
                )}
                <Pagination.Ellipsis disabled />
                <Pagination.Next onClick={pageNext} disabled={isNextPage} />
                <Pagination.Last onClick={lastPage} disabled={isNextPage} />
            </Pagination>
        </div>
    );
};

export default PaginationB;
