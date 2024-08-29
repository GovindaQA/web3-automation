import { test, expect } from "../fixtures/pomSynpressFixture";
import modifiedmetamask from "../commands/metamask"
import * as synpressMetamask from "@synthetixio/synpress/commands/metamask"; // Import Synpress metamask commands
import * as customMetamask from "../commands/metamask"; // Import your custom metamask.js methods (Adjust the import path)

test.describe("Dapp Demo Tests", () => {
  test.beforeEach(async ({ homePage }) => {
    // await homePage.ClickonCheckBox();
    await homePage.navigate();
    await homePage.connectWallet();

    // await homePage.btnSignIn.locator(".button btn--rounded btn-primary btn--large request-signature__footer__sign-button").click();
    // await customMetamask.confirmSignatureRequest();
  });

  test.only("Connecting Wallet to the application is successful", async ({ homePage }) => {

    // await synpressMetamask.confirmSignatureRequest();
    // await modifiedmetamask.confirmSignatureRequest();


   /* const connectedWalletAddress = await homePage.getConnectedWalletAddress();
    const connectedAddressMetamask = await synpressMetamask.getWalletAddress();
    expect(connectedAddressMetamask).toEqual(connectedWalletAddress);
    
    // Ensure the connect button and wallet not connected text are not visible
    await expect(homePage.btnConnect).not.toBeVisible();
    await expect(homePage.textWalletNotConnected).not.toBeVisible();
    
    // Use the custom Metamask methods to interact with MetaMask

    // Additional assertions can be added here
    await expect(homePage.btnAddCitizenHeader).toBeVisible(); */
  }); 
});
