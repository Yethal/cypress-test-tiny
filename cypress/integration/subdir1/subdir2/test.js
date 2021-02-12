describe('This will fail when launched via Run all spec files', function () {
  it('Failing test', () => {
    expect(Cypress.spec.name).to.not.eq('All Integration Specs')
  })
})