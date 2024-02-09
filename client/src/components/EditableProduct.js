import Product from "./Product";
import EditForm from "./EditForm";
import { useState } from "react";

const EditableProduct = ({ product }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  const handleVisibilityEditButtonClick = () => {
    setEditFormVisible(!editFormVisible);
  };

  return (
    <div>
      <Product
        product={product}
        onVisibilityEditButtonClick={handleVisibilityEditButtonClick}
      />
      {editFormVisible ? (
        <EditForm
          product={product}
          onVisibilityEditButtonClick={handleVisibilityEditButtonClick}
        />
      ) : null}
    </div>
  );
};

export default EditableProduct;
