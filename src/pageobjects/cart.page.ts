import config from '../config.json';
import ShopPage from './basepageobjects/shop.page';

class CartPage extends ShopPage {
    get cartItems() { return $$('.cart_item') }
    get cartItemNames() { return $$('.inventory_item_name') }
    get cartItemPrices() { return $$('.inventory_item_price') }
    get checkoutButton() { return $('[data-test="checkout"]') }
    get removeItemButtons() { return $$('[data-test="remove-sauce-labs-onesie"]') }

    open(): CartPage {
        super.open(`https://www.saucedemo.${config.domain}/cart.html`);
        return this;
    }

    itemNameOnCart(name: string) {
        const itemNamesOnCart = this.cartItemNames.map( item => item.getText() )
        if( itemNamesOnCart.indexOf(name) > -1 ) {
            return true;
        }
        return false;
    }

    removeCheapestItemFromCart(): void {
        const listOfPrices = this.cartItemPrices.map(item => parseFloat(item.getText().split('$')[1]));
        let cheapestItemIndex = 0;
        if (listOfPrices.length > 1) {
            for (let i = 0; i < listOfPrices.length - 1; i++) {
                if (listOfPrices[i] > listOfPrices[i+1]) {
                    cheapestItemIndex = i + 1;
                }
            }
        }
        this.removeItemButtons[cheapestItemIndex].click();
    }
}

export default new CartPage();