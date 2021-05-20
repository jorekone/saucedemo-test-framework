import Page from './page';

export default class ShopPage extends Page {
    get shoppingCartLink() { return $('.shopping_cart_link') }
    get shoppingCartBadge() { return $('.shopping_cart_badge') }
}