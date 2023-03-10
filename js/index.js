var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";
var jpdbIRL = "/api/irl";
var dbName = "SCHOOL-DB";
var relationName = "STUDENT-TABLE";
var connToken = "90932978|-31949275755446091|90949453";

$("#rollno").focus();
resetForm();

function getRollNoAsJsonObj() {
    var rollnoVar = $("#rollno").val();
    var jsonStr = {
        rollno: rollnoVar
    };
    return JSON.stringify(jsonStr);
}

function saveRecordNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function resetForm() {
    $("#rollno").val("")
    $("#name").val("");
    $("#class").val("");
    $("#dob").val("");
    $("#address").val("");
    $("#enrollment").val("");
    $("#rollno").prop("disabled", false);
    $("#name").prop("disabled", true);
    $("#class").prop("disabled", true);
    $("#dob").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enrollment").prop("disabled", true);
    $("#rollno").focus();
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
}

function validateData() {
    var rollnoVar = $("#rollno").val();
    if (rollnoVar === "") {
        alert("Roll No is Required");
        $("#rollno").focus();
        return "";
    }
    var nameVar = $("#name").val();
    if (nameVar === "") {
        alert("Student Full Name is Required");
        $("#name").focus();
        return "";
    }
    var classVar = $("#class").val();
    if (classVar === "") {
        alert("Student Class is Required");
        $("#class").focus();
        return "";
    }
    var dobVar = $("#dob").val();
    if (dobVar === "") {
        alert("Student Birth Date is Required");
        $("#dob").focus();
        return "";
    }
    var addressVar = $("#address").val();
    if (addressVar === "") {
        alert("Student Address is Required");
        $("#address").focus();
        return "";
    }
    var enrollmentVar = $("#enrollment").val();
    if (enrollmentVar === "") {
        alert("Student Enrollment Date is Required");
        $("#enrollment").focus();
        return "";
    }
    var jsonStrObj = {
        rollno: rollnoVar,
        name: nameVar,
        class: classVar,
        dob: dobVar,
        address: addressVar,
        enrollment: enrollmentVar
    };
    return JSON.stringify(jsonStrObj);
}

function fillData(jsonObj) {
    saveRecordNo2LS(jsonObj);
    var data = JSON.parse(jsonObj.data).record;
    $("#rollno").val(data.rollno)
    $("#name").val(data.name);
    $("#class").val(data.class);
    $("#dob").val(data.dob);
    $("#address").val(data.address);
    $("#enrollment").val(data.enrollment);
}

function getStudent() {
    var rollnoJsonObj = getRollNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, dbName, relationName, rollnoJsonObj);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });
    if (resultObj.status === 400) {
        $("#save").prop("disabled", false);
        $("#change").prop("disabled", true);
        $("#reset").prop("disabled", false);
    } else if (resultObj.status === 200) {
        $("#rollno").prop("disabled", true);
        fillData(resultObj);
        $("#save").prop("disabled", true);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
    }
    $("#name").prop("disabled", false);
    $("#class").prop("disabled", false);
    $("#dob").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enrollment").prop("disabled", false);
    $("#name").focus();
}

function saveData() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return "";
    }
    $("#name").prop("disabled", false);
    $("#class").prop("disabled", false);
    $("#dob").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enrollment").prop("disabled", false);
    var putRequest = createPUTRequest(connToken, jsonStr, dbName, relationName);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
    $("#rollno").focus();
}

function changeData() {
    $("#change").prop("disabled", true);
    var jsonStr = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonStr, dbName, relationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    console.log(resultObj);
    resetForm();
    $("#rollno").focus();
}
