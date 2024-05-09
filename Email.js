function myFunction() {
    GmailApp.sendEmail('gomesn023@gmail.com', 'teste email', 'Hello Wolrd')
}

function makeDraft() {
    let file = DriveApp.getFileById('1P2x7BtzEmyjJDZQjrRlFQF0aN4L4ZpOw');
    GmailApp.createDraft('natalia.gomes@integrance.com.br', 'teste draft', 'Check Out The attachment',{
    attachments: [file.getAs(MimeType.PDF)],
    name: 'My Docs PDF'
    } );

}

function seeDraft(){
    let draft = GmailApp.getDrafts();
    for(let x=0;x<draft.length;x++){
      //draft[x].update('natalia.gomes@integrance.com.br', 'Updated'+x, 'Hello World'+x)
    let id = draft[x].getId();
    Logger.log(id)
    Logger.log(draft[x].getMessage().getBody());
    Logger.log(draft[x].getMessage().getSubject());
}
    Logger.log(draft);
}
    
function sendHTMLTemp(){
    let emailMessage = HtmlService.createHtmlOutputFromFile('email').getContent();
    emailMessage = emailMessage.replace('#TITLE','New String Value');
    emailMessage = emailMessage.replace('#MESSAGE','Replaced With New Message');
