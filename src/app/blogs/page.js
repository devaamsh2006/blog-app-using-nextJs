import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";
export default function Blog(){
    const content=[
        {
            image:"/car.jpg",
            title:'The Car Company',
            contents:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            image:"/reactvsnext.png",
            title:'React vs Next',
            contents:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            image:"/space.jpeg",
            title:'Space',
            contents:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    ]

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {content.map((each, index) => {
          return (
            <div key={index} className="p-2 w-[90%] delay-200 hover:scale-[1.03] flex flex-col items-center bg-gray-700/20 gap-2">
              <Image src={each.image} height={500} width={400} alt="car" />
              <h1 className="text-xl font-bold">{each.title}</h1>
              <p className="text-center">{each.contents}</p>
              <Link href="demo-slug" className="py-1 px-2 rounded bg-gray-700/60">Read More</Link>
            </div>
          );
        })}
      </div>
    );
}