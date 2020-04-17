export interface Item {
    id: number, 
    name: string
}
// InventoryState is an array of Item above. 
export interface InventoryState {
    items: Item[]
}

// Action "names" or types.
export const REMOVE_ITEM_FROM_INVENTORY = 'REMOVE_ITEM_FROM_INVENTORY';
export const ADD_ITEM_TO_INVENTORY = 'ADD_ITEM_TO_INVENTORY';

// Define action requirements 
interface RemoveItemFromInventory {
    type: typeof REMOVE_ITEM_FROM_INVENTORY
    payload: number // It's a number b/c it will match our Item ID
}

interface AddItemToInventory {
    type: typeof ADD_ITEM_TO_INVENTORY
    payload: Item // We need to pass a new item that should be added to our store
}

export type InventoryActionTypes = RemoveItemFromInventory | AddItemToInventory;