var rtn;function fillList(nameList,valueList,modelChoiceList,dropDownIdList){var sub_nam_max=nameList.length;var sub_val_max=valueList.length;var drop_down_id=1;for(i=0;i<sub_nam_max;i++){var top_nam_max=nameList[i].length;var top_val_max=valueList[i].length;for(j=0;j<top_nam_max;j++){if(dropDownIdList.length>0){addOption(document.HelpContactUsDisplay.topic_select_dropdown,valueList[i][j],nameList[i][j],modelChoiceList[i][j],i+""+j,dropDownIdList+""+drop_down_id);drop_down_id++;}else{addOption(document.HelpContactUsDisplay.topic_select_dropdown,valueList[i][j],nameList[i][j],modelChoiceList[i][j],i+""+j,dropDownIdList);}}}}function addOption(selectbox,value,text,modelChoice,position,dropDownIdListNew){var optn=document.createElement("OPTION");optn.text=text;optn.value=value;optn.modelChoice=modelChoice;optn.title=text;if(dropDownIdListNew.length>0){optn.id=dropDownIdListNew;}if(modelChoice.indexOf("???")!=-1&&value.indexOf("T1")!=-1){optn.disabled="disabled";}if(position=="00"&&modelChoice.indexOf("???")!=-1){var optn1=document.createElement("OPTION");optn1.text=emptyOption;optn1.value="";optn1.title=emptyOption;optn1.modelChoice="???";selectbox.options.add(optn1);}selectbox.options.add(optn);}function highlightFieldAsError(selectedField,fieldName){selectedField.style.border="solid 1px";selectedField.style.background="#fec1c8";selectedField.focus();$("#em_"+fieldName).css("visibility","visible");}function unhighlightFieldAsOk(selectedField,fieldName){selectedField.style.background="#ffffff";$("#em_"+fieldName).css("visibility","hidden");}function validateFirstName(isRequired){if(isRequired){if(document.HelpContactUsDisplay.firstName.value==""){highlightFieldAsError(document.HelpContactUsDisplay.firstName,"firstname");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.firstName,"firstname");}}}function validateLastName(isRequired){if(isRequired){if(document.HelpContactUsDisplay.lastName.value==""){highlightFieldAsError(document.HelpContactUsDisplay.lastName,"lastname");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.lastName,"lastname");}}}function validateEmailAdd(isRequired){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var mstr=document.HelpContactUsDisplay.email1.value;if(isRequired){if(mstr==""){highlightFieldAsError(document.HelpContactUsDisplay.email1,"email");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.email1,"email");}}if(reg.test(mstr)==false){highlightFieldAsError(document.HelpContactUsDisplay.email1,"email");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.email1,"email");}}function validateVerifyEmail(isRequired){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var email=document.HelpContactUsDisplay.email1.value;var verifyEmail=document.HelpContactUsDisplay.verifyEmail1.value;if(isRequired){if(verifyEmail==""){unhighlightFieldAsOk(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail_match");highlightFieldAsError(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail");rtn=0;}else{if(reg.test(verifyEmail)==false){unhighlightFieldAsOk(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail_match");highlightFieldAsError(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail");rtn=0;}else{if(email!=""&&email!=verifyEmail){unhighlightFieldAsOk(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail");highlightFieldAsError(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail_match");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail");unhighlightFieldAsOk(document.HelpContactUsDisplay.verifyEmail1,"verifyEmail_match");}}}}}function validatePhone(isRequired){var regexPhone=/^\d{10,32}$/;var phoneNo=document.HelpContactUsDisplay.phone1.value;if(isRequired){if(phoneNo==""){unhighlightFieldAsOk(document.HelpContactUsDisplay.phone1,"phone_invalid");highlightFieldAsError(document.HelpContactUsDisplay.phone1,"phone");rtn=0;}else{if(regexPhone.test(phoneNo)==false){unhighlightFieldAsOk(document.HelpContactUsDisplay.phone1,"phone");highlightFieldAsError(document.HelpContactUsDisplay.phone1,"phone_invalid");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.phone1,"phone");unhighlightFieldAsOk(document.HelpContactUsDisplay.phone1,"phone_invalid");}}}}function validateMobilePhone(isRequired){var regexPhone=/^\d{10,32}$/;var phoneNo=document.HelpContactUsDisplay.mobilePhone1.value;if(isRequired){if(phoneNo==""){highlightFieldAsError(document.HelpContactUsDisplay.mobilePhone1,"phone");rtn=0;}else{if(regexPhone.test(phoneNo)==false){highlightFieldAsError(document.HelpContactUsDisplay.mobilePhone1,"phone");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.mobilePhone1,"phone");}}}}function validateAddress(isRequired){if(isRequired){if(document.HelpContactUsDisplay.address.value==""){highlightFieldAsError(document.HelpContactUsDisplay.address,"address");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.address,"address");}}}function validatePinCode(isRequired){var regexZipCode=/^([0-9]{6})$/;var zip=document.HelpContactUsDisplay.zipCode1.value;if(isRequired){if(zip==""){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode");rtn=0;}else{if(regexZipCode.test(zip)==false){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");}}}}function validateZipCode(isRequired){var regexZipCode=/(^\d{5}$)|(^\d{5}-\d{4}$)/;var zip=document.HelpContactUsDisplay.zipCode1.value;if(isRequired){if(zip==""){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode");rtn=0;}else{if(regexZipCode.test(zip)==false){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");}}}}function validateCanadaZipCode(isRequired){var regexZipCode=/^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$/;var zip=document.HelpContactUsDisplay.zipCode1.value;if(isRequired){if(zip==""){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode");rtn=0;}else{if(regexZipCode.test(zip)==false){unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");highlightFieldAsError(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode");unhighlightFieldAsOk(document.HelpContactUsDisplay.zipCode1,"zipCode_invalid");}}}}function validateTopic(isRequired){var cu_topic=document.HelpContactUsDisplay.topic_select_dropdown.value;if(isRequired){if(cu_topic==""){highlightFieldAsError(document.HelpContactUsDisplay.topic_select_dropdown,"subject_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.topic_select_dropdown,"subject_dpd");}}if(cu_topic=="CU_S0_T1"){highlightFieldAsError(document.HelpContactUsDisplay.topic_select_dropdown,"subject_dpd");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.topic_select_dropdown,"subject_dpd");}}function validateState(isRequired){if(isRequired){if(document.HelpContactUsDisplay.state_select_dropdown.value==""){highlightFieldAsError(document.HelpContactUsDisplay.state_select_dropdown,"state_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.state_select_dropdown,"state_dpd");}}}function validateCity(isRequired){if(isRequired){if(document.HelpContactUsDisplay.city_select_dropdown.value==""){highlightFieldAsError(document.HelpContactUsDisplay.city_select_dropdown,"city_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.city_select_dropdown,"city_dpd");}}}function validateMessage(isRequired){if(isRequired){if(document.HelpContactUsDisplay.message.value.length==0||document.HelpContactUsDisplay.message.value==""){highlightFieldAsError(document.HelpContactUsDisplay.message,"message");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.message,"message");}}}function fieldValidator(whrFlow){rtn=1;if(whrFlow=="GGW"){validateFirstName(true);validateLastName(true);validateEmailAdd(true);validateTopic(true);validateMessage(true);validateDealerName(true);validateInvoiceNumber(true);}else{if(whrFlow=="KAIN"){validateFirstName(true);validateLastName(true);validateMobilePhone(true);document.HelpContactUsDisplay.phone1.value=document.HelpContactUsDisplay.mobilePhone1.value;validateEmailAdd(true);validateVerifyEmail(true);validateTopic(true);validateMessage(true);validateDealerName(true);validateInvoiceNumber(true);if(document.HelpContactUsDisplay.address.value!=""||document.HelpContactUsDisplay.state_select_dropdown.value!=""||document.HelpContactUsDisplay.city_select_dropdown.value!=""||document.HelpContactUsDisplay.zipCode.value!=""){validateAddress(true);validateState(true);validateCity(true);validatePinCode(true);}}else{if(whrFlow=="KAAPAC"){validateFirstName(true);validateLastName(true);validateMobilePhone(true);document.HelpContactUsDisplay.phone1.value=document.HelpContactUsDisplay.mobilePhone1.value;validateEmailAdd(true);validateVerifyEmail(true);validateTopic(true);validateMessage(true);validateDealerName(true);validateInvoiceNumber(true);}else{if(whrFlow=="SWH"){validateFirstName(true);validateLastName(true);validatePhone(true);validateEmailAdd(true);validateVerifyEmail(true);validateAddress(true);validateZipCode(true);validateTopic(true);validateMessage(true);validateDealerName(true);validateInvoiceNumber(true);}else{validateFirstName(true);validateLastName(true);validatePhone(true);validateEmailAdd(true);validateVerifyEmail(true);validateAddress(true);if($("#storeIdentifier").val().indexOf("WP_CA_B2C")==0||$("#storeIdentifier").val().indexOf("MTG_CA_B2C")==0||$("#storeIdentifier").val().indexOf("KAD_CA_B2C")==0){validateCanadaZipCode(true);}else{validateZipCode(true);}validateTopic(true);validateMessage(true);validateModelSerialNumber(true);validateDealerName(true);validateInvoiceNumber(true);}}}}if(rtn==0){return false;}else{return true;}}function validateModelSerialNumber(selectObj){if(document.getElementById("modelNumberDiv").style.display!="none"){var showModel=document.HelpContactUsDisplay.topic_select_dropdown.options[0].modelChoice;if(document.HelpContactUsDisplay.modelNumber.value==""&&showModel!="???"){highlightFieldAsError(document.HelpContactUsDisplay.modelNumber,"modelNumber");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.modelNumber,"modelNumber");}if(document.HelpContactUsDisplay.serialNumber.value==""&&showModel!="???"){highlightFieldAsError(document.HelpContactUsDisplay.serialNumber,"serialNumber");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.serialNumber,"serialNumber");}}}function validateCategory(isRequired){if(isRequired){if(document.HelpContactUsDisplay.category_select_dropdown.value==""){highlightFieldAsError(document.HelpContactUsDisplay.category_select_dropdown,"category_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.category_select_dropdown,"category_dpd");}}}function validateProductType(isRequired){if(isRequired){if(document.HelpContactUsDisplay.productType_select_dropdown.value==""){highlightFieldAsError(document.HelpContactUsDisplay.productType_select_dropdown,"productType_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.productType_select_dropdown,"productType_dpd");}}}function validateDealerName(isRequired){if(document.HelpContactUsDisplay.DealerName!=null){if(isRequired){if(document.HelpContactUsDisplay.DealerName.value==""){highlightFieldAsError(document.HelpContactUsDisplay.DealerName,"DealerName");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.DealerName,"DealerName");}}}}function validateInvoiceNumber(isRequired){if(document.HelpContactUsDisplay.InvoiceNumber!=null){if(isRequired){if(document.HelpContactUsDisplay.InvoiceNumber.value==""){highlightFieldAsError(document.HelpContactUsDisplay.InvoiceNumber,"InvoiceNumber");rtn=0;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.InvoiceNumber,"InvoiceNumber");}}}}function validateIssue(isRequired){if(isRequired){if(document.HelpContactUsDisplay.issue_select_dropdown.value==""){highlightFieldAsError(document.HelpContactUsDisplay.issue_select_dropdown,"issue_dpd");rtn=0;return;}else{unhighlightFieldAsOk(document.HelpContactUsDisplay.issue_select_dropdown,"issue_dpd");}}}function ff_message_lengthLimit(){var charLimit=2000;if(document.HelpContactUsDisplay.message.value.length>charLimit){document.HelpContactUsDisplay.message.value=document.HelpContactUsDisplay.ff_message.value.substring(0,charLimit);alert("This text area only accepts 2000 characters.");}}function showModelNumber(selectObj){var isIE=(/MSIE (\d+\.\d+);/.test(navigator.userAgent));var showModel=$.trim(selectObj.options[selectObj.selectedIndex].modelChoice);if(showModel=="true"){if(isIE){$("#serialNumberDiv").css("display","block");$("#modelNumberDiv").css("display","block");}else{$("#modelNumberDiv").css("display","block");}}else{if(showModel.indexOf("???")!=-1){}else{$("#modelNumberDiv").css("display","none");}}changeSubject(selectObj);}function changeSubject(selectObj){var selectTopValue=$.trim(selectObj.options[selectObj.selectedIndex].value);var subject=selectTopValue.split("_T")[0];$("input[name='subject_select_dropdown']").val(subject);}function validateDate(isRequired){var input=document.HelpContactUsDisplay.purchaseDate;var validformat=/^\d{2}\/\d{2}\/\d{4}$/;var validformat1=/^\d{1}\/\d{1}\/\d{4}$/;var returnval=false;if(isRequired){if(!(validformat.test(input.value)||validformat1.test(input.value))){highlightFieldAsError(input,"dateOfPurchase");rtn=0;}else{var dayfield=input.value.split("/")[0];var monthfield=input.value.split("/")[1];var yearfield=input.value.split("/")[2];var dayobj=new Date(yearfield,monthfield-1,dayfield);if((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)){highlightFieldAsError(input,"dateOfPurchase");rtn=0;}else{unhighlightFieldAsOk(input,"dateOfPurchase");returnval=true;}}if(returnval==false){input.select();}return returnval;}}function validateServiceRequestForm(whrFlow){rtn=1;validateFirstName(true);validateLastName(true);validateMobilePhone(true);validateEmailAdd(true);validateVerifyEmail(true);validateDate(true);validateCategory(true);validateDealerName(true);if($("#storeIdentifier").val().indexOf("KAD_IN_B2C")!=0){validateInvoiceNumber(true);}if(whrFlow!="KAAPAC"&&whrFlow!="KASG"){validateProductType(true);validateIssue(true);}validateMessage(true);if(whrFlow=="KAAPAC"||whrFlow=="KASG"){if(document.HelpContactUsDisplay.address.value!=""){validateAddress(true);}}else{if(document.HelpContactUsDisplay.address.value!=""||document.HelpContactUsDisplay.state_select_dropdown.value!=""||document.HelpContactUsDisplay.city_select_dropdown.value!=""||document.HelpContactUsDisplay.zipCode.value!=""){validateAddress(true);validateState(true);validateCity(true);validatePinCode(true);}}if(rtn==0){return false;}else{return true;}}