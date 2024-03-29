import { useState } from 'preact/hooks';

const seasonCache = new Map();
const areaCache = new Map();

const updateCache = (cache, uniqueTag, keyName) => {
  if (!cache.has(uniqueTag)) return cache.set(uniqueTag, keyName);
  const cacheKeys = [...cache.keys()];
  if (cacheKeys.includes(uniqueTag)) cache.delete(uniqueTag);
}

const isActive = (uniqueTag) => {
  const connectCache = new Map([...seasonCache, ...areaCache]);
  if (!connectCache.size || connectCache.has(uniqueTag)) return true;
  return false;
}

const EventsToggle = ({posts}) => {
  const {eventPosts, uniqueSeasons, uniqueAreas} = posts;
  const [selectedPost, setSelectedPost] = useState(eventPosts);
  const handleClick = (keyName, uniqueTag) => {
    if (keyName === 'season') {
      updateCache(seasonCache, uniqueTag, keyName);
    } else if (keyName === 'area') {
      updateCache(areaCache, uniqueTag, keyName);
    }
    const seasonPost = eventPosts.filter((post) => {
      const seasonCacheKeys = [...seasonCache.keys()];
      const areaCacheKeys = [...areaCache.keys()];
      return (seasonCacheKeys.length ? seasonCacheKeys.includes(post['season']) : true) && (areaCacheKeys.length ? areaCacheKeys.includes(post['area']) : true);
    });
    setSelectedPost(seasonPost);
  }
  const seasonItems = uniqueSeasons.map((uniqueSeason) =>
    <li className={`events__tag ${isActive(uniqueSeason) ? 'events__active' : ''}`} onClick={() => handleClick('season', uniqueSeason)}>{uniqueSeason}</li>
  )
  const areaItems = uniqueAreas.map((uniqueArea)=>
    <li className={`events__tag ${isActive(uniqueArea) ? 'events__active' : ''}`} onClick={() => handleClick('area', uniqueArea)}>{uniqueArea}</li>
  )
  const selectedItems = selectedPost.map((post) =>
    <li className="events__postItem" style="display: block">
      <img className="events__img" src={post.image.src} alt=""/>
      <div className="events__text">
        <h3 className="events__name">{post.eventName}</h3>
        <p className="events__description">{post.description}</p>
        <ul className="events__postTagList">
          <li className="events__postTag">{post.season}</li>
          <li className="events__postTag">{post.area}</li>
        </ul>
      </div>
    </li>
  )
  return (
    <section className="events" id="events">
      <h2 className="events__subTitle subTitle">イベント</h2>
      <div className="events__tagWrapper">
        <ul className="events__seasonList">{seasonItems}</ul>
        <ul className="events__areaList">{areaItems}</ul>
      </div>
      <ul className="events__postList">{selectedItems}</ul>
    </section>
  );
}

export default EventsToggle;