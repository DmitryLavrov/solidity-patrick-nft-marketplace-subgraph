import {Address, BigInt} from '@graphprotocol/graph-ts'
import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent
} from "../generated/NftMarketplace/NftMarketplace"
import { ItemListed, ItemCanceled, ItemBought, ActiveItem } from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
  const tokenId = event.params.tokenId
  const nftAddress = event.params.nftAddress
  const buyer = event.params.buyer
  const id = getIdFromEventParams(tokenId, nftAddress)

  // Object itemBought
  let itemBought = ItemBought.load(id)
  if (!itemBought) {
    itemBought = new ItemBought(id)
  }
  itemBought.buyer = buyer
  itemBought.nftAddress = nftAddress
  itemBought.tokenId = tokenId
  itemBought.save()

  // Object activeItem
  let activeItem = ActiveItem.load(id)
  activeItem!.buyer = buyer
  activeItem!.save()
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  const tokenId = event.params.tokenId
  const nftAddress = event.params.nftAddress
  const seller = event.params.seller
  const id = getIdFromEventParams(tokenId, nftAddress)

  // Object itemCanceled
  let itemCanceled = ItemCanceled.load(id)
  if (!itemCanceled) {
    itemCanceled = new ItemCanceled(id)
  }
  itemCanceled.seller = seller
  itemCanceled.nftAddress = nftAddress
  itemCanceled.tokenId = tokenId
  itemCanceled.save()

  // Object activeItem
  let activeItem = ActiveItem.load(id)
  activeItem!.seller = seller
  activeItem!.nftAddress = nftAddress
  activeItem!.tokenId = tokenId
  activeItem!.buyer = Address.fromString('0x000000000000000000000000000000000000dEaD')
  activeItem!.save()
}

export function handleItemListed(event: ItemListedEvent): void {
  const tokenId = event.params.tokenId
  const nftAddress = event.params.nftAddress
  const seller = event.params.seller
  const price = event.params.price
  const id = getIdFromEventParams(tokenId, nftAddress)

  // Object itemListed
  let itemListed = ItemListed.load(id)
  if (!itemListed) {
    itemListed = new ItemListed(id)
  }
  itemListed.seller = seller
  itemListed.nftAddress = nftAddress
  itemListed.tokenId = tokenId
  itemListed.price = price
  itemListed.save()

  // Object activeItem
  let activeItem = ActiveItem.load(id)
  if (!activeItem) {
    activeItem =new ActiveItem(id)
  }
  activeItem.seller = seller
  activeItem.nftAddress = nftAddress
  activeItem.tokenId = tokenId
  activeItem.price = price
  activeItem.save()
}


function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}
