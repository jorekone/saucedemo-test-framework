import LoginPage from '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';
import CartPage from '../pageobjects/cart.page';

describe('Basket - Add and remove items', function() {    
    let cheapestItemName: string, secondCheapestItemName: string;
    
    before('Standard user logs in', function() {
        LoginPage
            .open()
            .loginWithStandardUser();
    });

    it('should sort items by price high to low', function() {
        ProductsPage.sortItmesByOptionValue('hilo');
        cheapestItemName = ProductsPage.getItemNameByIndex(5);
        secondCheapestItemName = ProductsPage.getItemNameByIndex(4)

        expect(ProductsPage.inventoryItems).toBeElementsArrayOfSize(6);
        expect(ProductsPage.itemsOrderPriceHighToLow()).toBe(true);
    })

    it('should select the two cheapest products', function() {;

        expect(ProductsPage.buttonsAddRemoveItem[5].getText()).toBe('ADD TO CART');
        expect(ProductsPage.buttonsAddRemoveItem[4].getText()).toBe('ADD TO CART');

        ProductsPage.clickAddRemoveItemButtonByIndex(5);
        ProductsPage.clickAddRemoveItemButtonByIndex(4);

        expect(ProductsPage.buttonsAddRemoveItem[5].getText()).toBe('REMOVE');
        expect(ProductsPage.buttonsAddRemoveItem[4].getText()).toBe('REMOVE');
        expect(ProductsPage.shoppingCartBadge.getText()).toBe('2');
    })

    it('should go to the basket', function() {
        ProductsPage.shoppingCartLink.click();

        expect(CartPage.shoppingCartBadge.getText()).toBe('2');
        expect(CartPage.cartItems).toBeElementsArrayOfSize(2);
        expect(CartPage.itemNameOnCart(cheapestItemName)).toBe(true);
        expect(CartPage.itemNameOnCart(secondCheapestItemName)).toBe(true);
    })

    it('should remove the cheapest product from the basket', function() {
        CartPage.removeCheapestItemFromCart();

        expect(CartPage.shoppingCartBadge.getText()).toBe('1');
        expect(CartPage.cartItems).toBeElementsArrayOfSize(1);
        expect(CartPage.itemNameOnCart(secondCheapestItemName)).toBe(true);
    })

    it("should checkout", function() {
        CartPage.checkoutButton.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
})  