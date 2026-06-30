import React from 'react';

const MapSection = () => {
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800 pt-12 pb-4'>
        Find us on Google Maps
      </p>

      <div className='w-full sm:w-1/2 mx-auto my-6 border'>
        <iframe
          className='w-full h-[200px] sm:h-[450px]'
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d869.2589738067245!2d78.04589024145552!3d27.252989236746316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKhasra%20No.%201439%2C%20Agra%20Hathras%20Road%2C%20Village%20Poiya%2C%20Agra-282006%2C%20Uttar%20Pradesh%2C%20India!5e1!3m2!1sen!2sin!4v1779098513025!5m2!1sen!2sin"
        //   loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
};

export default MapSection;