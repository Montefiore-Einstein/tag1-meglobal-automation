import Page from '../Login/page';


class popularSearchesPage extends Page {

  public get btnAddLink(){
    return $('#block-claro-local-actions ul li a')
  }

  public get inputMenuLinkTitle(){
    return $('input[data-drupal-selector="edit-title-0-value"]')
  }

  public get inputLink(){
    return $('input[data-drupal-selector="edit-link-0-uri"]')
  }

  public get btnSave(){
    return $('#edit-submit')
  }

  public get successMsg(){
    return $('.messages__content')
  }

  public get btnLinkDropDown1(){
    return $$('li.dropbutton-toggle button')[0]
  }

  public get btnDeleteLink1(){
    return $$('li.delete.dropbutton__item a')[0]
  }

  public get btnEditLink1(){
    return $$('li.edit a')[0]
  }

  public get btnConfirmDelete(){
    return $('div.ui-dialog-buttonset button.button--primary')
  }

  public get btnSearch(){
    return $('div button.mf-top-bar__button--search')
  }

  public get checkboxEnabled1(){
    return $$('.checkbox.menu-enabled div input')[0]
  }

  public popularSearchResult(title: string){
    return $(`a[data-analytics-click-text="${title}"]`)
  }

  public async addNewMenuLink(title: string, link: string){
    await browser.pause(2000)

    await (await this.btnAddLink).click();
    await (await this.inputMenuLinkTitle).setValue(title);
    await (await this.inputLink).setValue(link);
    await (await this.btnSave).scrollIntoView()
    await (await this.btnSave).click();
  }

  public async addMultiMenuLink(title: string, link: string){
    await browser.pause(2000)

    await (await this.btnAddLink).click();
    await (await this.inputMenuLinkTitle).setValue(title);
    await (await this.inputLink).setValue(link);
    await (await this.btnSave).scrollIntoView()
    await (await this.btnSave).click();
    await (await this.btnAddLink).click();
    await (await this.inputMenuLinkTitle).setValue(`2nd ${title}`);
    await (await this.inputLink).setValue(link);
    await (await this.btnSave).scrollIntoView()
    await (await this.btnSave).click();
  }

}

export default new popularSearchesPage();