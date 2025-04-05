import { v4 as uuidv4 } from 'uuid'
import ItemCleaner from './ItemCleaner'
export default function Listening ({items}) {
    const itemsNode = items.map(ItemCleaner);
    return ([
        <div className="item-list" key={uuidv4()}>{itemsNode}</div>
    ])
}