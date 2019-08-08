import React, { useState } from 'react';

import './ShoesVariantsForm.css';

const ShoesVariantsForm = props => {
  const [formData, setFormData] = useState({
    size: '',
    price: '',
    quantity: ''
  });

  const [toggleVariantForm, setToggleVariantForm] = useState(false);

  const { size, price, quantity } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    props.addShoesVariants({ formData }, props.shoes_id);
    setFormData('');
    setToggleVariantForm(false);
  };

  function toggle() {
    toggleVariantForm
      ? setToggleVariantForm(false)
      : setToggleVariantForm(true);
  }
  return (
    <div className='wrapper-shoesvariants-form'>
      <button
        className='btn btn-success btn-sm new-size-button'
        onClick={toggle}
      >
        {toggleVariantForm ? <>Hide Form</> : <>Add New Size</>}
      </button>
      {toggleVariantForm ? (
        <div className='variants-form'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-row'>
              <div className='form-group col-4'>
                <label htmlFor='size'>Size</label>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  name='size'
                  value={size}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='price'>Price</label>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  name='price'
                  value={price}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='quantity'>Quantity</label>
                <input
                  className='form-control form-control-sm'
                  type='text'
                  name='quantity'
                  value={quantity}
                  onChange={e => onChange(e)}
                />
              </div>

              <button type='submit' className='btn btn-dark btn-sm '>
                Add Size
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ShoesVariantsForm;
