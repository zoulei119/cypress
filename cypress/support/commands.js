// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//页面登录鉴权
Cypress.Commands.add('login', (url, username, pwd) => {
  // cy.visit(Cypress.env('baseUrl') + url);
  // cy.visit(Cypress.env('baseUrl').baseUrl + url);
  cy.visit(Cypress.config("baseUrl3") + url);
    
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
  .type(username)
  .should('have.value', username);

  cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
  .type(pwd)
  .should('have.value',pwd);

  cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner')
  .type('默认验证码')
  .should('have.value','默认验证码');
  cy.get('.el-button').click();
})


//接口登录鉴权
Cypress.Commands.add('loginRequest', (username, pwd) => {
  // cy.visit(Cypress.config("baseApi3") + url);
  Cypress.log({
      name: 'login',
      message: `${username} | ${pwd}`
  })
  //获取uuid
  cy.request({
    method: 'GET',
    url: Cypress.config('baseApi') + '/code',
  }).should((response) => {
    //断言
    expect(response.status).to.eq(200)
    //登录
    cy.request('POST', Cypress.config('baseApi') + '/auth/login',{
      username: username,
      password: pwd, 
      code: 'xxx',
      uuid: response.body.uuid
    }).should((response) => {
      //断言
      expect(response.status).to.eq(200)
      //设置Cookie
      cy.setCookie('Admin-Token',response.body.data.access_token)
    })
  })
})