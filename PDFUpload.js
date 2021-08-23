function doGet(){
    let html = HtmlService.createTemplateFromFile('index');
    let id = '11Y4z8t5QGx9VfXfawZ6hxnmBDH0VZ7bebNdQ8nkYjfU';
    let ss = SpreadsheetApp.openById(id);
    let sheet = ss.getSheetByName('fisrt')
    let range = sheet.getDataRange();
    Logger.log(range.getValues());
    html.data = {temp:'one'}
    return html.evaluate();
}

function doGet2(){
    let params = JSON.stringify(e);
    return HtmlServices.createdHtmlOutput(params);
}

function getAll(){
    let id = '11Y4z8t5QGx9VfXfawZ6hxnmBDH0VZ7bebNdQ8nkYjfU';
    let ss = SpreadsheetApp.openById(id);
    let sheet = ss.getSheetByName('first');
    let range = sheet.getDataRange();
    let values = range.getValues();
    Logger.log(values);
    
    for(let x=0;x<values.length;x++){
    let row = values[x];
    Logger.log(row);
    for(let i=0;i<row.length;i++){
        Logger.log(row[i]);
    }
    }
}

function addContent(){
    let id = '15QoB9pvqVVqaWzcRIUEAU6QdYsOiMHQTPMoujeO9MKk';
    let ss = SpreadsheetApp.openById(id);
    let sheet = ss.getSheets()[0];
    Logger.log(sheet.getLastRow());
    let tempArray = [];
    for(let x=0;x<4;x++){
    tempArray.push('#'+Math.random().toString(16).substr(-6));
    }
    Logger.log(tempArray);
    sheet.appendRow(tempArray);
    Logger.log(sheet.getLastRow());
    
    let range = sheet.getRange(sheet.getLastRow(), 1, 1,sheet.getLastColumn());
    let val = range.getValues()[0];
    Logger.log(range.getValues());
    for(let x=0;x<val.length;x++){
    Logger.log(val[x]);
    sheet.getRange(sheet.getLastRow(), (x+1)).setBackground(val[x]);
    }
}

function getRanger(){
let id = '11Y4z8t5QGx9VfXfawZ6hxnmBDH0VZ7bebNdQ8nkYjfU';
    let ss = SpreadsheetApp.openById(id);
    let sheet = ss.getSheets()[0];
    let range2 = sheet.getRange(1,1);
    let val2 = range2.getValue();
    Logger.log(val2[0][0]);
    
    let range3 = sheet.getRange(1,1,3);
    let val3 = range3.get
    
    for(let row in val3){
    Logger.log([row][0]);
    }    
        
}

function updateSheet(){
    let id = '11Y4z8t5QGx9VfXfawZ6hxnmBDH0VZ7bebNdQ8nkYjfU';
    let ss = SpreadsheetApp.openById(id);
    let sheet = ss.getSheets()[0];
    sheet.getRange('1:1').setBackground('red');
    sheet.getRange('B1').setValue('Hello World');
    sheet.getRange('B1').setFontColor('white');
}

function createdSheet(){
    let ss = SpreadsheetApp.create('newSheet');
    let sheet = ss.getSheets()[0];
    sheet.getRange('A1').setValue('Date');
    sheet.getRange('B1').setValue('First');
    sheet.getRange('C1').setValue('Last');
    sheet.getRange('D1').setValue('Email');
    sheet.getRange('1:1').setFontSize(20);
    let myID = ss.getId();
    Logger.log(myID);
    //11Y4z8t5QGx9VfXfawZ6hxnmBDH0VZ7bebNdQ8nkYjfU
}