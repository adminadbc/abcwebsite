import React,{useState, useEffect, useRef} from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch,SearchBox, Hits } from 'react-instantsearch';

const appId = process.env.APP_iD!;
const api_key = process.env.API_KEY!;

const searchClient = algoliasearch("E8D6CS8E3Q", "5d52e3e9854bc76850ea0925d500f155");



function SearchLayer() {
    const [showHits, setShowHits] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current) {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'childList' || mutation.type === 'characterData') {
                const newText = divRef.current?.innerText;
                console.log('innerText changed:', newText);
              }
            });
          });
    
          observer.observe(divRef.current, { childList: true, characterData: true, subtree: true });
          return () => {
            observer.disconnect();
          };
        }
      }, []);
  return (
    <InstantSearch searchClient={searchClient} indexName="adetest">
    <SearchBox    
   ref={divRef}
       onFocus={(ev)=>{
        ev.target.innerText.length > 1 ?
        setShowHits(true) : setShowHits(false)}}
         onBlur={()=>setShowHits(false)}
        placeholder="Search products..."
 className='container'/>
{showHits ? <Hits hitComponent={HitItem} /> : null}
    </InstantSearch>
  );
}




const HitItem: React.FC<any> = ({ hit }) => {
    return (
      <div>
        <h2>{hit.firstName}</h2>
        <p>{hit.description}</p>
        {/* Add more fields as needed */}
      </div>
    );
  };
  


export default SearchLayer;