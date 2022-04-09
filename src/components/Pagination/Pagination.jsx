import Button from "components/Button";
import PropTypes from "prop-types";
import s from "./Pagination.module.css";

function Pagination({ page, setPage, totalPages }) {
  const setNewPage = (newPage) => {
    let pageToSet = newPage > 1 ? newPage : 1;
    pageToSet = newPage < totalPages ? newPage : totalPages;
    setPage(pageToSet);
  };

  return (
    <div className={s.list}>
      {page > 1 && (
        <Button
          text="<"
          onClick={() => setNewPage(page - 1)}
          className="small"
        />
      )}
      {page > 1 && (
        <Button text="1" onClick={() => setPage(1)} className="small" />
      )}
      {page - 2 > 2 && <span>...</span>}
      {page - 2 > 1 && (
        <Button
          text={page - 2}
          onClick={() => setNewPage(page - 2)}
          className="small"
        />
      )}
      {page - 1 > 1 && (
        <Button
          text={page - 1}
          onClick={() => setNewPage(page - 1)}
          className="small"
        />
      )}
      <Button text={page} onClick={() => {}} className="current" />
      {page + 1 < totalPages && (
        <Button
          text={page + 1}
          onClick={() => setNewPage(page + 1)}
          className="small"
        />
      )}
      {page + 2 < totalPages && (
        <Button
          text={page + 2}
          onClick={() => setNewPage(page + 2)}
          className="small"
        />
      )}
      {page + 2 < totalPages - 1 && <span>...</span>}
      {page < totalPages && (
        <Button
          text={totalPages}
          onClick={() => setNewPage(totalPages)}
          className="small"
        />
      )}
      {page < totalPages && (
        <Button
          text=">"
          onClick={() => setNewPage(page + 1)}
          className="small"
        />
      )}
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
