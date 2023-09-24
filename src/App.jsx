import React,{ useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address:'',
    email: '',
    birthDay: '',

  });

  const [error, setError] = useState({});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newError = {};

    if(!formData.fullName.trim()){
      newError.fullName = 'Họ tên không được để trống';
    }

    if(!formData.phoneNumber.trim()){
      newError.phoneNumber = 'Số điện thoại không được để trống';
    }

    if(!formData.address.trim()){
      newError.address = 'Địa chỉ không được để trống';
    }

    if(!formData.email.trim()){
      newError.email = 'Email không được để trống';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      newError.email = 'Email không hợp lệ';
    }

    if(!formData.birthDay.trim()){
      newError.birthDay = 'Ngày sinh không được để trống';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      //Hiển thị thông tin người dùng trong alert
      alert(JSON.stringify(formData, null,2));
    }
  };

  return (
    <div className='App'>
      <h1>Thông tin cá nhân</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
                type='text'
                id='fullName'
                name='fullName'
                placeholder='Họ Tên'
                value={formData.fullName}
                onChange={handleChange}
          />
          {error.fullName && <p className='error'>{error.fullName}</p>}
        </div>

        <br/>

        <div>
          <input 
                type='text'
                id='phoneNumber'
                name='phoneNumber'
                placeholder='Số điện thoại'
                value={formData.phoneNumber}
                onChange={handleChange}
          >
          </input>
          {error.phoneNumber && <p className='error'>{error.phoneNumber}</p>}
        </div>

        <br/>

        <div>
          <input 
                type='text'
                id='address'
                name='address'
                placeholder='Địa chỉ'
                value={formData.address}
                onChange={handleChange}
          >
          </input>
          {error.address && <p className='error'>{error.address}</p>}
        </div>

        <br/>

        <div>
          <input 
                type='text'
                id='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
          >
          </input>
          {error.email && <p className='error'>{error.email}</p>}
        </div>

        <br/>

        <div>
          <input 
                type='date'
                id='birthDay'
                name='birthDay'
                value={formData.birthDay}
                onChange={handleChange}
          >
          </input>
          {error.birthDay && <p className='error'>{error.birthDay}</p>}
        </div>

      <br/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
