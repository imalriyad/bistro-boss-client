import UseAxios from "./UseAxios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const axios = UseAxios();
  const [menu, setMenu] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    axios
      .get("/get-total-food")
      .then((res) => setTotalItem(res.data.totalItem));
  }, [axios]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemInPage = 6;
  const numberOfPages = Math.ceil(totalItem / itemInPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios.get(`/get-all-foods`).then((res) => {
      setMenu(res.data);
    });
  }, [axios,currentPage,itemInPage]);

  return [menu, setCurrentPage, currentPage, pages];
};

export default useMenu;
