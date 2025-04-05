import { v4 as uuidv4 } from 'uuid'
export default function ItemCleaner(item) {
    if (!item.title) return
    let price;
    let title;
    if (item.title != undefined) {
      title = item.title.length < 50 ? item.title : `${item.title.slice(0, 51)}...`;
    } else {  title = 'undefined title';}
    let lvlQuantity = item.quantity < 11  ? 'item-quantity level-low' : 
        item.quantity > 20 ? "item-quantity level-high" : 'item-quantity level-medium'
    switch (item.currency_code) {
        case 'USD': 
          price = `$${item.price}`;
          break;
        case 'EUR': 
          price = `€${item.price}`;
          break;
        default: price = `${item.price} ${item.currency_code}`;
    }
    let itemImg = item.MainImage ? <img src={item.MainImage.url_570xN}/> : <></>

return (
    <div className="item" key={uuidv4()}>
    <div className="item-image">
      <a href={item.url}>
        {itemImg}
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{title}</p>
      <p className="item-price">{price}</p>
      <p className={lvlQuantity}>{item.quantity}</p>
    </div>
  </div>
)
}