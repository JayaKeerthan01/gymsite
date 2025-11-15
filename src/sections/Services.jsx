import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800",
    title: "Personal Training",
    desc: "1-on-1 coaching with elite trainers.",
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    title: "Group Classes",
    desc: "HIIT, Yoga, Spin, Bootcamp.",
  },
  {
    img: "https://images.unsplash.com/photo-1583454118552-9d8db09be02d?w=800",
    title: "Nutrition Plans",
    desc: "Custom meal plans & tracking.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-red-600 mb-16">
          SERVICES
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="services-swiper"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-red-900/50">
                <img src={s.img} alt={s.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}