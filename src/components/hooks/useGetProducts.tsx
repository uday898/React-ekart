import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getCategoryProducts } from "../../store/productsListSlice";

const useGetProducts = ({ isCategory, categoryId }) => {
  const { categoryproducts, allProducts, isLoading } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCategory) {
      dispatch(getCategoryProducts(categoryId));
    } else {
      dispatch(getAllProducts());
    }
  }, [isCategory, categoryId, dispatch]);

  const products = useMemo(() => {
    return isCategory ? categoryproducts : allProducts;
  }, [isCategory, categoryproducts, allProducts]);

  return { products, isLoading };
};

export default useGetProducts;
