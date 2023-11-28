import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import Link from "next/link"
import styles from './Home.module.scss';
import { gameCatApi, gameSearchApi } from "@/redux/reducers/gameSlice";

let timeoutId;
const Home = ({ config }) => {
  const { items } = config?.menu?.lobby || [];
  const [gameList, setGameList] = useState([])
  const [selectedCat, setSelectedCat] = useState("")
  const [pagination, setPagination] = useState({
    selectedCat: "",
    pageSize: 10,
    pageNumber: 1,
    count: 0,
    totalPages: 0,
  })

  const searchRef = useRef(null);
  const dispatch = useDispatch()
  const gameState = useSelector(state => state.game);
  const {list: {items:gameItems}, isLoading:gameStateLoading} = gameState;

  const getGamesBySearch = async () => {
    try {
      const searchText = searchRef.current.value
      if(searchText.length > 3){
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout( async () => {
          dispatch(gameSearchApi(searchText))
          setSelectedCat("");
        }, 300);
      }      
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    const catSlug = items[0]?.path.split("/").slice(-1)
    setSelectedCat(items[0]?.name)
    dispatch(gameCatApi(catSlug))
  }, [])

  useMemo(() => {
    setGameList(gameItems || []);
  }, [gameItems])

  const handleCategory = (catItem) => {
    const catSlug = catItem.path.split("/").slice(-1)
    setSelectedCat(catItem?.name)
    dispatch(gameCatApi(catSlug))
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcomes to Play North
        </h1>
        <div>
          <ul>
            {items?.map(item => (
              <li key={item.id} className={selectedCat === item.name ? "selected" : undefined} onClick={() => handleCategory(item)}>{item?.name}</li>
            ))}
          </ul>

          <input type="text" placeholder="Search...." ref={searchRef} onKeyUp={getGamesBySearch}/>
        </div>

        <div className={styles.grid} id="game-listing">
          {gameStateLoading ? <span>Loding.....</span> : gameList?.length ? gameList?.map(game => (

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


