
import algoliasearch from "algoliasearch"
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
// Connect and authenticate with your Algolia app
const client = algoliasearch("", '')


const appId = process.env.APP_iD!;
const api_key = process.env.API_KEY!;


let resultList : any[] ;

function SearchLayer() {
  const [pop, setPop] = useState(false)
      const [show, setShow ] = useState(false)
      const [inputValue, setInputValue] = useState("")
      const [list, setList] = useState<any[]>([])
       const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
          let data = e.target.value;
  
    if(data.length > 0){
      const index = client.initIndex('test')
      index
    .search(data)
    .then(({ hits }) =>{
      hits.length > 0 ? setShow(true) : null
       console.log(hits)
       setInputValue(data)
       console.log("input")
       resultList = hits;})
  }else if(data==""  || data.length == 0){
      resultList = []
      console.log("delete")
  }
  }
  const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
      };
    useEffect(()=>{
        setList(resultList)
    },[inputValue])
  return(
    <div>
  {
    pop ?  <div className="absolute top-0 w-screen overflow-x-hidden
       h-screen z-[100]  bg-blue-300 left-0 py-20  md:pt-32  px-10 md:px-[10%] backdrop-blur-md bg-opacity-60 bg-blur-lg">
              <input type="text" name="name" className="z-9999 h-16 w-3/4 text-center
                outline-blue-500 mb-6 md:mb-10 lg:w-1/3 mx-[10%]"
                  onChange={(e)=>{handleSearch(e)}} placeholder="search..." />
                            {<div className="flex gap-2 flex-wrap mx-auto relative">
       {resultList?.map((listData, idx)=><Link  target="_blank" href="https://medium.com/swlh/3-subtle-signs-youve-hired-a-great-lawyer-e72a65010792" 
       key={idx} className="flex
           z-[999] bg-white max-h-40 flex-row-reverse gap-2 w-full md:w-1/2 lg:w-1/3  overflow-hidden ">
           <div className="py-2 px-2 text-left flex flex-col justify-center align-middle">
<div className="font-semibold text-base"> {listData.title}</div>

           <p className="text-xs md:text-sm my-1"> {truncateText(listData.article, 80)}</p>
            </div>
            <Image src={listData.image}  alt={listData.title} width={100} height={100} className="w-32 h-full" />
    </Link>
            )} </div>}
        
            </div>
         : 
        <input onClick={()=>setPop(true)}  placeholder="search layer"/>
    }
    </div>
  )
}


export default SearchLayer;