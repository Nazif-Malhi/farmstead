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

  @media only screen and (max-width: 600px) {
    width: auto;
  .slick-dots {
    margin: auto;
    padding: 0px;
    width: 300px;
    padding-top:20px;
    text-align: center;
  }
}
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
                para={{
                  en: "Nitrogen (N) is often the most limiting nutrient for corn production and is frequently applied in excess and far in advance of corn requirements",
                  ur: "نائٹروجن (N) اکثر مکئی کی پیداوار کے لیے سب سے زیادہ محدود غذائیت ہے اور اسے اکثر مکئی کی ضروریات سے بہت پہلے استعمال کیا جاتا ہے۔",
                }}
              />
            </div>
            <div>
              <BlogCard
                img={seed}
                title={"Seed's"}
                para={{
                  en: "Seeds are not only the carriers of the DNA of a newly formed plant generation; they also form complex associations with micro-organisms. ",
                  ur: "بیج نہ صرف نئے بننے والے پودوں کی نسل کے ڈی این اے کے کیریئر ہیں؛ وہ مائکرو حیاتیات کے ساتھ پیچیدہ ایسوسی ایشن بھی تشکیل دیتے ہیں۔",
                }}
              />
            </div>
            <div>
              <BlogCard
                img={feildwrap}
                title={"Watering"}
                para={{
                  en: "Water content plays a crucial role in seed development, particularly at the seed sowing stage, and it ensures good seed germination seed drill consisted of a wheat ",
                  ur: "پانی کی مقدار بیج کی نشوونما میں ایک اہم کردار ادا کرتی ہے، خاص طور پر بیج بوائی کے مرحلے میں، اور یہ گندم پر مشتمل بیج کے اچھے انکرن کو یقینی بناتا ہے۔",
                }}
              />
            </div>
          </Slider>
        </SliderContanier>
      </>
    );
  }
}
