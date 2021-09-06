// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

  const username = 'admin'
  const pwd = 'admin123'

  beforeEach(() => {
    // cy.visit(`${Cypress.config("baseUrl")}/login`)
    // 调用 Custom Commands 的命令
    cy.login('/login',username, pwd)


    //更改视图窗口大小
    // cy.viewport(1024,768)

    //接口登录鉴权
    // cy.loginRequest(username, pwd)
    // //跳转首页
    // cy.visit(`http://localhost/#/index`)

    cy.wait(3000)
    cy.url().should('include', '/index')
  })

  it('大客户管理 -> 新增', () => {
    cy.get(':nth-child(5) > .el-submenu > .el-submenu__title').click();
    cy.get(':nth-child(5) > .el-submenu > .el-menu > :nth-child(1) > a > .el-menu-item').click()
    cy.get('.el-button--primary.is-plain').click();

    cy.get('.el-dialog__body > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    .type('客户名称')
    .should('have.value','客户名称');

    cy.get('.el-dialog__body > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
    .type('税号')
    .should('have.value','税号');

    cy.get('.el-dialog__body > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
    .type('17716122141')
    .should('have.value','17716122141');

    cy.get('.dialog-footer > .el-button--primary').click();

  })

  //应用程序抛出的异常，最终触发了 windows 全局错误处理器( global error handler ) 或者其 unhandledrejection handler，则 Cypress 同样会监测到此情况，并且以失败状态终止其测试。
  //在 Cypress 里禁掉应用程序错误消息的完整代码：
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Jerry errors!');
    return false
  })
})
