import React from 'react'
import { useForm } from 'react-hook-form'


const stateCityData = {
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Thane'],
  Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota']
}

const Contac = () => {
  const {register, handleSubmit ,watch,resetField, formState:{errors },reset} = useForm();
  const selectedState = watch('state');

const onSubmit = (data) =>{
  console.log("your form is valide",data)
  alert("your form is submit succesfully");
}

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input type='text' placeholder='Enter Your UserName' {...register('username',{required:'username is required'})}/>
        {errors.username && <p style={{color:'red'}}>{errors.username.message}</p>}
        <br/><br/>

        <input type='password' placeholder='Enter Your Password' {...register('password', { 
    required: 'password is required',
    minLength: { value: 6, message: 'password must be at least 6 characters' }, 
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      message: 'password must contain at least 1 uppercase letter and 1 special character (!@#$%^&*)'}
          })}/>
          {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
         <br/><br/>
        <input type='email' placeholder='Enter Your Email' {...register('email',{required:'email is required',
          pattern:{value:/^\S+@\S+$/i,message:'invalid Email format'}})}/>
          {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
        <br/><br/>

       <label htmlFor="state">Select State:</label><br/>
        <select 
          id="state" 
          {...register('state', { 
            required: 'state is required',
            onChange: () => resetField('city') // જ્યારે સ્ટેટ બદલાય ત્યારે જૂનું સિટી આપોઆપ ખાલી થઈ જાય
          })}
        >
          <option value="">-- Select State --</option>
          <option value="all">All States</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
        {errors.state && <p style={{ color: 'red' }}>{errors.state.message}</p>}
        <br/><br/>

        <label htmlFor="city">Select City:</label><br/>
        <select id="city" {...register('city', { required: 'city is required' })}>
          <option value="">-- Select City --</option>
          
          {/* જો યુઝર 'All States' સિલેક્ટ કરે, તો બધા જ સિટી બતાવો */}
          {selectedState === 'all' && 
            Object.values(stateCityData).flat().map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))
          }

          {/* જો કોઈ સ્પેસિફિક સ્ટેટ સિલેક્ટ કરે, તો ફક્ત તેના જ સિટી બતાવો */}
          {selectedState && selectedState !== 'all' && stateCityData[selectedState]?.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}
        <br/><br/>
  

        <label htmlFor='gender' >Gender :</label>
        <br/><br/>
          <input type='radio' id='male' name='gender' value='male'{...register('gender',{required:'please select gender'})}/>
          <label htmlFor='male'>male</label>
          <br/><br/>
          
          <input type='radio' id='female' name='gender' value='female' {...register('gender',{required:'please select gender'})}/>
          <label htmlFor='female'>female</label>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
          <br/><br/>
          
          <label>Hobbies:</label>
          <br/><br/>
          
          <label>
            <input type='checkbox' name='hobbies' value='Cricket'{...register('hobbies', { required: 'select at least one hobby' })}/>Cricket
          </label>
          <br/><br/>
          <label>
            <input type='checkbox' name='hobbies' value='Music' {...register('hobbies', { required: 'select at least one hobby' })}/>Music
          </label>
          <br/><br/>
          <label>
            <input type='checkbox' name='hobbies' value='Reading' {...register('hobbies', { required: 'select at least one hobby' })}/>Reading
          </label>
          <br/><br/>
           <label>
            <input type='checkbox' name='hobbies' value='Traveling' {...register('hobbies', { required: 'select at least one hobby' })}/>Traveling
          </label>
              {errors.hobbies && <p style={{ color: 'red' }}>{errors.hobbies.message}</p>}
          <br/><br/>
        <label>Mobile no:</label>
        <input type='tel' placeholder='Enter Your Mobile Nunber'{...register('mobile', { 
            required: 'mobile number is required',
            pattern: { value: /^[0-9]{10}$/, message: 'mobile number must be 10 digits' }
          })}/>
          {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
        <br/><br/>

        <label htmlFor="avatar">Upload Image:</label>
        <input type='file' accept="image/png, image/jpeg, image/jpg"
        {...register('avatar', { 
          required: 'image upload is required',
       validate: {
      lessThan2MB: (files) => (files) => !files[0] || files[0].size < 2000000 || 'max file size is 2MB',
      isImage: (files) => 
        ['image/jpeg', 'image/png', 'image/jpg'].includes(files[0]?.type) || 'only PNG, JPG, or JPEG allowed'}
           })}/>
           {errors.avatar && <p style={{color:'red'}}>{errors.avatar.message}</p>}
           <br/><br/>
        <textarea placeholder='Enter Your message'{...register('message', { 
            required: 'message is required',
            maxLength: { value: 1000, message: 'maximum 1000 characters allowed' }
          })}>

        </textarea>
        {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
        <br/><br/>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contac
