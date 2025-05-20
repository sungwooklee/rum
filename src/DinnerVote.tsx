import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const menus = [
  { name: "치킨", image: "/images/chicken.jpg" },
  { name: "찜 or 탕", image: "/images/stew.jpg" },
  { name: "중식", image: "/images/chinese.jpg" },
  { name: "패스트푸드", image: "/images/fastfood.jpg" },
  { name: "돈까스 or 회", image: "/images/cutlet_sashimi.jpg" },
  { name: "고기", image: "/images/meat.jpg" },
  { name: "카페 or 디저트", image: "/images/dessert.jpg" },
  { name: "야식", image: "/images/nightsnack.jpg" },
  { name: "피자", image: "/images/pizza.jpg" },
];

export default function DinnerVote() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [userId, setUserId] = useState('');

  const handleSelect = (menu) => {
    setSelectedMenu(menu);
  };

  const handleSubmit = () => {
    if (userId && selectedMenu) {
      alert(`${userId}님이 ${selectedMenu.name}에 투표하셨습니다!`);
    } else {
      alert("아이디와 메뉴를 모두 선택해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="p-4 bg-white shadow-md flex justify-center items-center gap-4">
        <Input
          className="w-1/3 text-lg p-2"
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button className="text-lg px-6 py-2" onClick={handleSubmit}>투표하기</Button>
      </div>

      <div className="flex-grow grid grid-rows-3">
        <div className="row-span-2">
          <Carousel
            showArrows={false}
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            {menus.map((menu, index) => (
              <div key={index}>
                <img src={menu.image} alt={menu.name} className="h-[60vh] object-cover w-full" />
                <p className="legend text-xl font-semibold">{menu.name}</p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="row-span-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 p-4">
          {menus.map((menu, index) => (
            <Card
              key={index}
              className={`cursor-pointer border-2 transition-all ${selectedMenu?.name === menu.name ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => handleSelect(menu)}
            >
              <CardContent className="p-2 flex flex-col items-center">
                <img src={menu.image} alt={menu.name} className="h-24 object-cover rounded mb-2" />
                <p className="text-center font-medium">{menu.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

