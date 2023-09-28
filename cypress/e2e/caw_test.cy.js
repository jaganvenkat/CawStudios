const tablePage = require("../pages/tablePage");

describe('CAW Studios assignment',()=>{


    it('verify dynamic table data',()=>{

        cy.fixture('test_data.json').then((data) => {
        cy.visit('/styled/tag/dynamic-table.html');
        tablePage.clickSummaryButton();
        tablePage.fillTableData(JSON.stringify(data));
        tablePage.clickRefreshButton();
        tablePage.verifyTableData(data);
        
        });
        
        });
    });
    

    

