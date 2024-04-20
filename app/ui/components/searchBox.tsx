import algoliasearch from "algoliasearch";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const API_KEY = process.env.API_KEY;
const userId = process.env.USER_ID;
// Connect and authenticate with your Algolia app
const client = algoliasearch("", "");

let hiStore: string = "ade bola"
let historyData = localStorage.getItem("recent_searches");
console.log("the recet", historyData)
if(historyData === null){
  localStorage.setItem("recent_searches", hiStore)
}
const appId = process.env.APP_iD!;
const api_key = process.env.API_KEY!;

let resultList: any[];

function SearchLayer() {
  const [pop, setPop] = useState(false);
  const [history, setHistory ] = useState(true)
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<any[]>([]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let data = e.target.value;

    if (data.length > 0) {
      const index = client.initIndex("test");
      index.search(data).then(({ hits }) => {
        hits.length > 0 ? setShow(true) : null;
        console.log(hits);
        setInputValue(data);
        resultList = hits;
        historyData += " "+data;
      });
    } else if (data == "" || data.length == 0) {
      resultList = [];
      console.log("delete");
    }
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  useEffect(() => {
    setList(resultList);
  }, [inputValue]);
  return (
    <div>
      {pop ? (
        <div
          className="absolute top-0 w-screen overflow-x-hidden
       h-screen z-[100]  bg-white left-0 backdrop-blur-md bg-opacity-20
        bg-blur-sm"
        >
     <div className="bg-white rounded-lg py-4 drop-shadow-lg z-9999
     md:w-[70vw] mt-20 flex justify-center flex-col align-middle h-fit relative mx-auto">
      <div    className=" py-3 px-6 gap-1 flex border-b border-black text-center relative" >
        <CiSearch className="mt-2 font-bold"  />
      <input
            type="text"
            name="name"
            className="outline-none w-full pl-2"
            onChange={(e) => {
              handleSearch(e);
            }}
            placeholder="search reasources..."
            autoComplete="off"
          />
          <div onClick={()=>{setPop(false)}} className="p-2 rounded-lg border border-gray-400 cursor-pointer text-sm ml-auto">ESC</div>
        </div>
          <div className="relative ">
            {history && <div className="">
              <div className="font-semibold text-xl px-7 py-5 border-b border-gray-300">Recents </div>
              <ul className="flex flex-col text-sm">{historyData?.split(" ").map((data, idc)=>
                <li key={idc} className="px-7 border-b border-gray-300 text-gray-500 py-5">{data}</li>)}
              </ul>
              </div>}
            {resultList?.map((listData, idx) => (
              <Link
                target="_blank"
                href="https://medium.com/swlh/3-subtle-signs-youve-hired-a-great-lawyer-e72a65010792"
                key={idx}
                className="flex
           z-[999] bg-white max-h-40 flex-row-reverse gap-2 w-full md:w-1/2 lg:w-1/3  overflow-hidden "
              >
                <div className="py-2 px-2 text-left flex flex-col justify-center align-middle">
                  <div className="font-semibold text-base">
                    {" "}
                    {listData.title}
                  </div>

                  <p className="text-xs md:text-sm my-1">
                    {" "}
                    {truncateText(listData.article, 80)}
                  </p>
                </div>
                <Image
                  src={listData.image}
                  alt={listData.title}
                  width={100}
                  height={100}
                  className="w-32 h-full"
                />
              </Link>
            ))}{" "}
          </div>
      </div>
        </div>
      ) : (
        <div className="border rounded-md w-32 mt-6 border-black mb-2 lg:mt-0 lg:w-28  flex">
          <input
            onClick={() => setPop(true)}
            placeholder="search..."
            className="h-8 ml-5 outline-none w-16
           text-black  text-[0.75rem]"
          />
          <CiSearch className="mt-2" size={16} />
        </div>
      )}
    </div>
  );
}

export default SearchLayer;


// <IoCloseOutline
// onClick={() => setPop(false)}
// color="black"
// size={32}
// className="absolute top-10 right-10 bg-red-300 hover:cursor-pointer  rounded-full"
// />