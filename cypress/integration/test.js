// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost/')
    // cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('admin');
    // cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('admin123');
    // cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('yzm');
    // cy.get('.el-button').click();
    // cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
    // cy.get(':nth-child(5) > .el-submenu > .el-submenu__title').click();
    // cy.get(':nth-child(5) > .el-submenu > .el-menu > :nth-child(1) > a > .el-menu-item').click();
  })

  it('大客户管理新增', () => {
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('admin').blur();
    cy.get('.el-button').click();
  })
  // it('大客户管理新增', () => {
  //   cy.screenshot();
    // cy.get('.el-button--primary.is-plain').click();
    // cy.get('.el-dialog__body > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("大客户名称")
    //     .should('have.value', '大客户名称');
    // cy.get('.el-dialog__body > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("税号")
    //     .should('have.value', '税号');
    // cy.get('.el-dialog__body > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("17716122145")
    //     .should('have.value', '17716122145');
    // cy.get('.el-dialog__body > .el-form > :nth-child(4) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("成都")
    //     .should('have.value', '成都');
    // cy.get('.el-dialog__body > .el-form > :nth-child(5) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("对公账号")
    //     .should('have.value', '对公账号');
    // cy.get('.el-dialog__body > .el-form > :nth-child(6) > .el-form-item__content > .el-input > .el-input__inner')
    //     .type("工商")
    //     .should('have.value', '工商');
    // cy.get('.dialog-footer > .el-button--primary').click({val:'xxx'});
  // })



})
