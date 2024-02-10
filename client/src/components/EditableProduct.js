import Product from "./Product";
import EditForm from "./EditForm";
import { useState } from "react";

const EditableProduct = ({ product, onDelete, onEdit }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleEditFormToggle = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };

  return (
    <div>
      <Product
        product={product}
        onEditFormToggle={handleEditFormToggle}
        onDelete={onDelete}
      />
      {isEditFormVisible ? (
        <EditForm
          product={product}
          onEditFormToggle={handleEditFormToggle}
          onEdit={onEdit}
        />
      ) : null}
    </div>
  );
};

export default EditableProduct;
