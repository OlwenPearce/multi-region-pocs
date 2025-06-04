describe('buy a dog', () => {
    //this test class uses the shared/generic dog type
    //and passes in stubbed db etc which uses this type rather than client specific logic

    it('should run validation rules', () => {
        // test by expecting something which fails shared validation to fail
    })

    it('should get rescue data if available', () => {
        // test with mocked database including rescue data table
    })

    it('should not get rescue data if not available', () => {
        // test with mocked database not including rescue data table
    })
})
