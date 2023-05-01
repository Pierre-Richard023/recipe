import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterChoice from "../filterChoice/filterChoice";

import LeftArrow from "../../assets/icons/left-arrow.svg"
import RightArrow from "../../assets/icons/right-arrow.svg"


const SlickArrowLeft = ({ currentSlide, slideCount, className, style, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" className={`${className}  rounded-full bg-white hover:bg-white `} style={{ ...style, width: "45px", height: "45px", left: "-50px" }} {...props} />
)

const SlickArrowRight = ({ currentSlide, slideCount, className, style, ...props }) => (
  <img src={RightArrow} alt="nextArrow" className={`${className}  rounded-full bg-white hover:bg-white `} style={{ ...style, width: "45px", height: "45px", right: "-50px" }} {...props} />
)




const Carrousel = ({ data , update , unwanted , step }) => {


  const settings = {
    className: "center",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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


  return (
    <Slider className="flex items-center" {...settings}>
      {
        data?.map((val, i) =>
          <FilterChoice key={i} data={val} update={update} step={step} />
        )
      }
    </Slider>
  )

}

export default Carrousel