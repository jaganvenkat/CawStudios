class tablePage{

    elements={

        summaryBtn: () =>  cy.get('summary'),
        tableDataField:() =>  cy.get('#jsondata'),
        refreshBtn:() => cy.get('#refreshtable'),
        tableRows:() => cy.get('#tablehere tr'),
       

    }

    clickSummaryButton(){

        this.elements.summaryBtn().click();
    
    }

    fillTableData(tableData){

        this.elements.tableDataField().clear();
        this.elements.tableDataField().type(tableData,{ parseSpecialCharSequences: false });
    
    }

    clickRefreshButton(){

        this.elements.refreshBtn().click();
    
    }

    verifyTableData(data){
       
        this.elements.tableRows().next().each(($row, index) => {
            cy.wrap($row).find('td').as('tableData');
            
            // Get the name, age, and gender from the table
            cy.get('@tableData').eq(0).invoke('text').then((name) => {
             
                expect(name.trim()).to.equal(data[index].name);
             
            });
      
            cy.get('@tableData').eq(1).invoke('text').then((age) => {
             
                expect(age.trim()).to.equal(data[index].age.toString());
             
            });
      
            cy.get('@tableData').eq(2).invoke('text').then((gender) => {
             
                expect(gender.trim()).to.equal(data[index].gender);
              });
            });
        
    }
    

   
}

module.exports = new tablePage();