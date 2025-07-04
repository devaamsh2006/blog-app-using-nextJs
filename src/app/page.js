import { Button } from "@/components/ui/button";
import { Edit, FastForward, FlashlightIcon, StarIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const features=[
    {
      icon:Edit,
      title:'Intutive Editor',
      content:'Create and edit content with user friendly interface'
    },
    {
      icon:StarIcon,
      title:'Flexible Tools',
      content:'Create and edit content with user friendly interface'
    },
    {
      icon:FastForward,
      title:'Blazing Fast',
      content:'Create and edit content with user friendly interface'
    }
  ]

  return (
  <div>
    <section className="w-full h-[70vh] flex justify-center items-center">
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Manage Your Content with Ease</h1>
      <p className="text-xl text-gray-400">Streamline your content workflow,publish with ease</p>
      <div className="flex gap-2">
      <Link href="blogs" className="bg-white px-4 py-1 flex items-center justify-center text-black rounded-md">Explore</Link>
      <Button variant={"outline"}>Try it Out</Button>
      </div>
      </div>
    </section>
    <section className="w-full h-[50vh] bg-gray-700/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center">
    {
      features.map((each,index)=>{
        return(
          <section key={index} className="flex flex-col gap-2 w-[55%] border-2 border-white rounded-2xl p-3 items-center shadow-sm shadow-white">
          <each.icon size={50} />
          <h1 className="text-xl">{each.title}</h1>
          <p className="text-center text-lg">{each.content}</p>
          </section>
        )
      })
    }
    </section>
    <section className="h-[50vh] flex justify-center items-center">
    <div className="w-[40%] flex flex-col gap-3">
      <h1 className="text-5xl">Ready to Transform Your Content Journey?</h1>
      <p className="text-xl text-gray-300">Join thousands of content creators like you who choose DevCMS</p>
      <div className="flex gap-2 items-center">
        <input type="text" className="bg-gray-300 p-2 rounded text-gray-700 focus:outline-none" placeholder="Enter Your Email" />
        <Button>Submit</Button>
      </div>
    </div>
    </section>
  </div>

);
}
