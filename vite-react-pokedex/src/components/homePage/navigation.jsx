import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useContext, useState } from "react";
import { PokedexContext } from "../../context/pokemonContext";

export function Navigation() {
  const [pageNumber, setPageNumber] = useState(1);

  const { nextPage, previousPage, totalPages, offset, setOffset } =
    useContext(PokedexContext);

  function handleNextPage() {
    if (nextPage) {
      if (String(pageNumber).trim() === "") {
        setPageNumber(offset / 24 + 1);
        return;
      }

      setOffset(offset + 24);
      setPageNumber(pageNumber + 1);
    }
  }

  function handlePreviousPage() {
    if (previousPage) {
      if (String(pageNumber).trim() === "") {
        setPageNumber(offset / 24 + 1);
        return;
      }

      setOffset(offset - 24);
      setPageNumber(pageNumber - 1);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const regex = /^(?:[1-9]|[1-4][0-9]|5[0-5])$/;

    if (pageNumber > 55) {
      setPageNumber(55);
      setOffset(55 * 24 - 24);
      return;
    }

    if (pageNumber <= 0) {
      setPageNumber(1);
      setOffset(1 * 24 - 24);
      return;
    }

    if (regex.test(pageNumber)) {
      setPageNumber(Number(pageNumber));
      setOffset(Number(pageNumber) * 24 - 24);
    }
  }

  return (
    <div className="flex items-center justify-center py-10">
      <button
        onClick={handlePreviousPage}
        disabled={!previousPage}
        className="disabled:text-zinc-600"
      >
        <ArrowLeftIcon />
      </button>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={pageNumber}
          className="w-8 placeholder:text-center p-1 rounded-md text-center"
          onChange={(e) => setPageNumber(e.target.value)}
          value={pageNumber}
        />
        <span>{` / ${Math.ceil(totalPages)}`}</span>
      </form>
      <button
        onClick={handleNextPage}
        disabled={!nextPage}
        className="disabled:text-zinc-600"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
