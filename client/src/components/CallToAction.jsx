import { Button } from "flowbite-react"

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className="text-2xl">
                Want to know more about indian food?
            </h2>
            <p className="text-gray-500 my-2">
                Checkout these resources with different dishes...
            </p>
            <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none">
                <a href="https://www.rainforestcruises.com/guides/india-food" target="_blank" rel="noopener noreferrer">
                More about indian food
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.redd.it/ufo3xq64boa61.jpg" />
        </div>
    </div>
  )
}
