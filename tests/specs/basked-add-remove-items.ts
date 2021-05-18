describe("Basket - Add and remove items", () => {
    it("Test", () => {
        browser.navigateTo(`https://www.saucedemo.com/`);
        $("//*[@data-test='username']").click();
        $("//*[@data-test='username']").setValue('standard_user');
        $("//*[@data-test='password']").click();
        $("//*[@data-test='password']").setValue('secret_sauce');
        $("//*[@data-test='login-button']").click();
    })
})