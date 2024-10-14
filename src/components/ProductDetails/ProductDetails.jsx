import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    const fetchAndSetProductById = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProductById();
  }, [productId]);

  return (
    <div>
      <p>Rating: {product.rating}</p>
      <p>About: {product.description}</p>
      <ul>
        {product.tags?.map((tag) => (
          <li key={nanoid()}>{tag}</li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {product.reviews?.map(({ comment, reviewerName }) => (
          <li key={nanoid()}>
            <h4>{reviewerName}</h4>

            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
