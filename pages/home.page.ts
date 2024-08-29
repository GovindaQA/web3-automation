import { type Page, type Locator } from "@playwright/test";
import BasePage from "./base.page";

export default class HomePage extends BasePage {
  readonly path: string;
  readonly textWalletNotConnected: Locator;
  readonly tableCitizens: Locator;
  readonly textTotalRecordsCount: Locator;
  readonly btnSignIn: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/";

    // Locators
    this.textWalletNotConnected = this.page.getByTestId(
      "walletNotConnectedText"
    );

  }

  async navigate(): Promise<void> {
    await super.navigate(this.path);
    // await super.ClickonCheckBox();
  }

  async getWalletNotConnectedText(): Promise<string> {
    const text = (await this.textWalletNotConnected.textContent()) as string;
    return text;
  }
}
