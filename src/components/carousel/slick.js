import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BlogCard } from "../cards";
import { corn, feildwrap, seed } from "../../assets";

const SliderContanier = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      pauseOnHover: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <SliderContanier>
          <Slider {...settings}>
            <div>
              <BlogCard
                img={corn}
                title={"Corn"}
                para={
                  "Nitrogen (N) is often the most limiting nutrient for corn production and is frequently applied in excess and far in advance of corn requirements"
                }
              />
            </div>
            <div>
              <BlogCard
                img={seed}
                title={"Seed's"}
                para={
                  "Seeds are not only the carriers of the DNA of a newly formed plant generation; they also form complex associations with micro-organisms. "
                }
              />
            </div>
            <div>
              <BlogCard
                img={feildwrap}
                title={"Watering"}
                para={
                  "Water content plays a crucial role in seed development, particularly at the seed sowing stage, and it ensures good seed germination seed drill consisted of a wheat "
                }
              />
            </div>
          </Slider>
        </SliderContanier>
      </>
    );
  }
}
