
// Total Triggers//
//1. Onload, 2. Onsave , 3, Onchange ////

////************** On change Mehods    ****************/

function hidTimelineTab(executionContext) {
    var formContext = executionContext.getFormContext();

    var preferredContact = formContext.getAttribute("js_accounttype").getValue();// field name 
    var tab = formContext.ui.tabs.get("tab_2"); //Tab Name //

    if (preferredContact === 1) { // if account type = saving (Value 1) , hiding tab //
        tab.setVisible(false);
    } else {
        tab.setVisible(true);
    }
}

function Disabledfields(executionContext) {
    var formContext = executionContext.getFormContext();

    var accountstatusAttr = formContext.getAttribute("js_accountstatus");
    var accountstatusAttr1 = formContext.getAttribute("schema");
    var control = formContext.getControl("js_accbalance");

    if (!accountstatusAttr || !control) return;

    var accountstatus = accountstatusAttr.getValue();

    if (accountstatus === 1) {
        control.setDisabled(false);
    } else {
        control.setDisabled(true);
    }
}

//function hidesection(executionContext) {
//    var formContext = executionContext.getFormContext();
//    var previousschoolgrade = formContext.getAttribute("cs_previousschoolgrade").getValue();
//    var Tab = formContext.ui.tabs.get("new_general");
//    var section = Tab.sections.get("null_section_3");

//    if (previousschoolgrade !== null && previousschoolgrade === 1) {
//        section.setVisible(true);
//    } else {
//        section.setVisible(false);
//    }

//}


function hidesection(executionContext) {
    var formContext = executionContext.getFormContext();

    // Get the Option Set field value safely
    var gradeAttr = formContext.getAttribute("cs_previousschoolgrade");
    if (!gradeAttr) return;
    var gradeValue = gradeAttr.getValue(); // this returns the OptionSet value (number)

    // Get the tab
    var tab = formContext.ui.tabs.get("new_general"); // <-- replace with your tab Name
    if (!tab) return;

    // Get the section
    var section = tab.sections.get("null_section_3"); // <-- replace with your section Name
    if (!section) return;

    // Show/hide logic
    if (gradeValue === 1) { // <-- the value of your OptionSet you want to check
        section.setVisible(true);
    } else {
        section.setVisible(false);
    }
}

function DisAccBal(executioncontext) {
    var formcontext = DisAccBal.getformcontext;
    var accstatus = formcontext.getAttribute("js_AccountStatus").getValue();

    if (accstatus == 2) {
        formcontext.getControl("js_accbalance").setDisable(true);
    }
    else {
        formcontext.getControl("js_accbalance").setdisable(false);
    }
}

function SchoolRegihidetimeline(executionContext) {
    var formContext = executionContext.getFormContext();

    var preferredGrade = formContext.getAttribute("cs_previousschoolgrade").getValue();
    var tab = formContext.ui.tabs.get("tab_2");

    if (preferredGrade === 123440003) {
        tab.setVisible(true);
    } else {
        tab.setVisible(false);
    }
}