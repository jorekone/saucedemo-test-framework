import config from '../config.json';
import ShopPage from './basepageobjects/shop.page';

class ProductsPage extends ShopPage {
    get sortDropdown() { return $('[data-test="product_sort_container"]') }
    get inventoryItems() { return $$('.inventory_item') }
    get inventoryItemNames() { return $$('.inventory_item_name') }
    get buttonsAddRemoveItem() { return $$('.btn_inventory') }

    open(): ProductsPage {
        super.open(`https://www.saucedemo.${config.domain}/inventory.html`);
        return this;
    }
    
    // values: "hilo", "lohi", "az" and "za"
    sortItmesByOptionValue(value: string): ProductsPage {
        this.sortDropdown.click();
        this.sortDropdown.selectByAttribute('value', value);
        return this;
    }

    itemsOrderPriceHighToLow():boolean {
        const listItmes = this.inventoryItems;
        for (let i = 0; i < listItmes.length - 1; i++) {
            const firstPrice = listItmes[i].$('.inventory_item_price').getText().split('$')[1]
            const secondPrice = listItmes[i+1].$('.inventory_item_price').getText().split('$')[1]
            if (parseFloat(firstPrice) < parseFloat(secondPrice)) {
                return false;
            }
        }
        return true;
    }

    getItemNameByIndex(index: number) {
       return this.inventoryItemNames[index].getText();
    }    

    clickAddRemoveItemButtonByIndex(index: number) {
        this.buttonsAddRemoveItem[index].click();
    }
}

export default new ProductsPage();