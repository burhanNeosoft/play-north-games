import React, {useState, useEffect} from "react";
import Image from 'next/image';
import Link from "next/link"
import styles from './Home.module.scss';

const Home = ({config}) => {
  const {items} = config?.menu?.lobby || [];
  const [gameList, setGameList] = useState([])
  const [pagination, setPagination] = useState({
    selectedCat: "",//items[0].path.split("/").slice(-1) || "",
    pageSize: 2,
    pageNumber: 1,
    count:0,
    totalPages:0,
  })

  const getGamesByCat = async (cat, pageNumber, pageSize) => {
    try {
      
      const res = await fetch(`https://casino.api.kansino.nl/v1/kansino/en/games/tiles?gameCategories=${cat}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
      const catData = await res.json();
      setGameList([...gameList, ...catData?.items]);
      setPagination({
        ...pagination,
        count: catData.count,
        totalPages: catData.count / pagination.pageSize,
      })
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    //getGamesByCat(pagination.selectedCat, 1, pagination.pageSize);

    /* var div = document.querySelector("#game-listing");
    var height = div.clientHeight;


    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY, height);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; */
  },[])

  const handleCategory = (catItem) => {
    const catSlug = catItem.path.split("/").slice(-1)
    
    setPagination({
      ...pagination,
      selectedCat: catSlug,
      pageNumber: 1,
      count:0,
      totalPages:0,
    })

    getGamesByCat(catSlug, 1, pagination.pageSize)
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Games Lobby
        </h1>

        <div>
          <ul>
            {items?.map(item => (
              <li key={item.id} onClick={() => handleCategory(item)}>{item?.name}</li>
            ))}            
          </ul>

          <input type="search" />
          <button>search</button>
        </div>

        <div className={styles.grid} id="game-listing">

          {gameList?.map(game => (

            <span className={styles.card} key={game.id}>
              <h2>{game?.gameText}</h2>
              <Image src={game?.image?.thumbnail?.src} width={"150"} height={"150"} alt='Games-thumbnail' />
            </span>
          ))}          
        </div>
      </main>
    </div>
  )
}

export default Home


