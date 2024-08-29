import { type Page, type Locator } from "@playwright/test";
import dotenv from "dotenv";
import * as metamask from "@synthetixio/synpress/commands/metamask";
import modifiedmetamask from "../commands/metamask"


dotenv.config();

export default class BasePage {
  readonly page: Page;
  readonly btnConnect: Locator;
  readonly textConnectedAddress: Locator;
  readonly btnAddCitizenHeader: Locator;
  readonly btnSwap: Locator;
  readonly btnWallet: Locator;
  readonly btnMetaWallet: Locator;
  readonly checkbox: Locator;
  readonly btnConnectButton: Locator;


  // readonly btnSignIn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    // this.btnConnect = this.page.locator("(//ul[@class='connect-wallets']//child::li)[2]");
    this.checkbox = this.page.locator("#onboarding__terms-checkbox");
    this.btnConnectButton = this.page.locator("");
    this.btnSwap = this.page.locator("(//div[@class='widget-quick-links']//descendant::a)[2]");
    this.btnWallet = this.page.locator("button.wallet-btn");
    this.btnMetaWallet = this.page.locator("(//div[@class='wallet-block-body']//child::div)[3]");

    this.textConnectedAddress = this.page.getByTestId("header-connectedAccountAddress");
    this.btnAddCitizenHeader = this.page.getByTestId("header-addCitizenButton");
    // this.btnSignIn=this.page.getByTestId("request-signature__sign");

  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
    // await this.checkbox.click();
  }
 
  async connectWallet(): Promise<void> {
    // await this.checkbox.click();
    await this.btnSwap.click();
    await this.btnWallet.click();
    await this.btnMetaWallet.click();
    // await this.btnConnect.click();
    await metamask.acceptAccess();
    // await metamask.confirmDataSignatureRequest();
    }

  async getConnectedWalletAddress(): Promise<string> {
    const walletAddress =
      (await this.textConnectedAddress.textContent()) as string;
    return walletAddress;
  }

  async getConnectButtonText(): Promise<string> {
    const buttonText = (await this.btnConnect
      .locator("p")
      .textContent()) as string;
    return buttonText;
  }

  async getAddCitizenHeaderButtonText(): Promise<string> {
    const buttonText = (await this.btnAddCitizenHeader
      .locator("p")
      .textContent()) as string;
    return buttonText;
  }
  async ClickonCheckBox():Promise<void>{

    await this.checkbox.click();
  }
    
  }
