import React from 'react'
import Slider from "react-slick";


const Carousel=(props)=>{
	
    const SampleNextArrow=(props)=>{
      const { onClick } = props;
      return (
        <div
          style={{display: "block",position:'absolute', top:-15, cursor:'pointer', right:5, background: "#fff", color:'gray', border:'1px solid gray'}}
          onClick={onClick}
          className={'rounded w-6 h-6 custom-btn-carousel'}      
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 3 20 15" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }

    const SamplePrevArrow=(props)=>{
      const { onClick } = props;
      return (
        <div
          style={{display: "block",position:'absolute', top:-15, cursor:'pointer', right:32, left:'inherit', background: "#fff", color:'gray', border:'1px solid gray'}}
          onClick={onClick}
          className={'rounded w-6 h-6 custom-btn-carousel'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="1 3 20 15" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }

  var settings = {
      className:'pt-8',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  const imgData=[
    {src:'./images/img1.jpg', alt:'image-1'},
    {src:'./images/img2.jpg', alt:'image-2'},
    {src:'./images/img3.jpg', alt:'image-3'},
    {src:'./images/img4.jpg', alt:'image-4'},
    {src:'./images/img5.jpg', alt:'image-5'},
    {src:'./images/img6.jpg', alt:'image-6'},
  ]


	return(		
      <div style={{ position:'relative'}} className='mt-5'>
        <div style={{position:'absolute', top:-15, left:0}} className='text-xl ml-2 font-medium'>Carousel Cards Title</div>
        <Slider {...settings}>
          {imgData.map((item, id)=>{
              return(
                <div key={id} className='pl-2 pr-2'>
                  <div className='bg-white rounded-xl shadow-md overflow-hidden'>
                      <img src={item.src} alt={item.alt} className='max-w-full'/>
                      <div className='p-4'>
                        <span className='font-medium text-xl'>Topic</span>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      </div>
                  </div>
                </div>
              )
          })}
        </Slider>
      </div>
	)
}

export default Carousel;