import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link"
import styles from './Home.module.scss';

let timeoutId;
const Home = ({ config }) => {
  const { items } = config?.menu?.lobby || [];
  const [gameList, setGameList] = useState([])
  const [loading, setLoading] = useState(false);
  const [selectedCat, setSelectedCat] = useState("")
  const [pagination, setPagination] = useState({
    selectedCat: "",
    pageSize: 10,
    pageNumber: 1,
    count: 0,
    totalPages: 0,
  })

  const searchRef = useRef(null);

  const getGamesByCat = async (cat) => {
    try {
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/tiles?gameCategories=${cat}`)
      const catData = await res.json();
      setGameList(catData?.items);
      setLoading(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  const getGamesBySearch = async () => {
    try {
      const searchText = searchRef.current.value
      if(searchText.length > 3){
        console.log("searchRef", searchText)
        setLoading(true)
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout( async () => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/tiles?search=${searchText}`)
          const catData = await res.json();
          setGameList(catData?.items);
          setSelectedCat("");
          setLoading(false)
        }, 300);
      }
      
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    const catSlug = items[0]?.path.split("/").slice(-1)
    setSelectedCat(items[0]?.name)
    getGamesByCat(catSlug);
  }, [])

  const handleCategory = (catItem) => {
    const catSlug = catItem.path.split("/").slice(-1)
    setSelectedCat(catItem?.name)
    getGamesByCat(catSlug)
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Play North
        </h1>

        <div>
          <ul>
            {items?.map(item => (
              <li key={item.id} className={selectedCat === item.name && "selected"} onClick={() => handleCategory(item)}>{item?.name}</li>
            ))}
          </ul>

          <input type="text" ref={searchRef} onKeyUp={getGamesBySearch}/>
        </div>

        <div className={styles.grid} id="game-listing">
          {loading ? <span>Loding.....</span> : gameList?.length ? gameList?.map(game => (

            <span className={styles.card} key={game.id}>              
              <Image src={game?.image?.thumbnail?.src} width={"150"} height={"150"} alt='Games-thumbnail' />
              <p>{game?.gameText}</p>
            </span>
          )) : (
            <span>
              No Data
            </span>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home


