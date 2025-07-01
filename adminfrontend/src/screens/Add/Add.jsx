import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Dresses',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/cloth/add`, formData);
      toast.success(response.data.message || '✅ Cloth added successfully!');
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Dresses',
      });
      setImage(false);
    } catch (error) {
      toast.error(error.response?.data?.message || '❌ Request failed');
    }
  };

  return (
    <div className='screen'>
      <div className='container'>
        <form onSubmit={onSubmitHandler} className='flex-col'>
          <div className='add-img-upload flex-col'>
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt='Upload Preview'
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              id='image'
              hidden
              required
            />
          </div>

          <div className='add-products-name flex-col'>
            <p>Product Name</p>
            <input
              value={data.name}
              onChange={onChangeHandler}
              type='text'
              name='name'
              placeholder='Type here'
              required
            />
          </div>

          <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea
              value={data.description}
              onChange={onChangeHandler}
              name='description'
              rows='6'
              placeholder='Write content here'
              required
            ></textarea>
          </div>

          <div className='add-category-price'>
            <div className='add-category flex-col'>
              <p>Category</p>
              <select
                value={data.category}
                onChange={onChangeHandler}
                name='category'
              >
                <option value='Dresses'>Dresses</option>
                <option value='Tops'>Tops</option>
                <option value='Tshirts'>Tshirts</option>
                <option value='Jeans'>Jeans</option>
                <option value='Trousers'>Trousers</option>
                <option value='Shorts'>Shorts</option>
                <option value='Jumpsuits'>Jumpsuits</option>
                <option value='Co-ords'>Co-ords</option>
              </select>
            </div>

            <div className='add-price flex-col'>
              <p>Price</p>
              <input
                value={data.price}
                onChange={onChangeHandler}
                type='number'
                name='price'
                placeholder='₹150'
                required
              />
            </div>
          </div>

          <button type='submit' className='add-btn'>
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
