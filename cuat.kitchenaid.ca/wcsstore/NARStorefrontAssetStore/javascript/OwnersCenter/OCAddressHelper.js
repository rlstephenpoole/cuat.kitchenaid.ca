var address2OK=true;OCAddressHelper={validateAddressForm:function(form,prefix){reWhiteSpace=new RegExp(/^\s+$/);if(prefix==null){prefix="";}if(prefix){this.setStateDivName(prefix+"stateDiv");}var ifSubmit=true;if(form!=null){var fields="";if(form.fieldsOrderByLocale!=null&&form.fieldsOrderByLocale.value!=null&&form.fieldsOrderByLocale.value!=""){fields=form.fieldsOrderByLocale.value.split(",");}else{if(document.getElementById("fieldsOrderByLocale").value!=null&&document.getElementById("fieldsOrderByLocale").value!=""){fields=document.getElementById("fieldsOrderByLocale").value.split(",");}}var firstNameOK=true;var lastNameOK=true;var address1OK=true;var cityOK=true;var zipCodeOK=true;var emailOK=true;var phoneOK=true;var altphoneOK=true;var stateOK=true;var nickName=prefix+"nickName";var personTitle=prefix+"personTitle";var lastName=prefix+"lastName";var firstName=prefix+"firstName";var middleName=prefix+"middleName";var address1=prefix+"address1";var address2=prefix+"address2";var address3=prefix+"address3";var city=prefix+"city";var state=prefix+"state";var country=prefix+"country";var zipCode=prefix+"zipCode";var email1=prefix+"email1";var phone1=prefix+"phoneNumber";var mobilePhone1=prefix+"mobilePhone1";var altPhone=prefix+"altPhone";for(var i=0;i<form.elements.length;i++){formElement=form.elements[i];if(formElement.getAttribute("type")=="text"||formElement.nodeName.toLowerCase()=="select"){}}if(document.getElementById("form_error")){if(document.getElementById("form_error").innerHTML.length>0){topErrorMsg="";}else{topErrorMsg=MessageHelper.messages.ERROR_TOP;}}else{topErrorMsg=MessageHelper.messages.ERROR_TOP;}for(var i=0;i<fields.length;i++){var field=fields[i];if(field=="FIRST_NAME"||field=="first_name"){form[firstName].value=trim(form[firstName].value);if(field=="FIRST_NAME"&&(form[firstName].value==""||reWhiteSpace.test(form[firstName].value))){document.getElementById("firstNameValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_FirstNameEmpty;firstNameOK=false;}else{if(OCAddressHelper.isXMLSpCharExist(form[firstName].value)){document.getElementById("firstNameValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_FirstNameInvalid;firstNameOK=false;}else{document.getElementById("firstNameValidationErrorMsg").innerHTML="";firstNameOK=true;}}}else{if(field=="LAST_NAME"||field=="last_name"){form[lastName].value=trim(form[lastName].value);if(field=="LAST_NAME"&&(form[lastName].value==""||reWhiteSpace.test(form[lastName].value))){document.getElementById("lastNameValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_LastNameEmpty;lastNameOK=false;}else{if(OCAddressHelper.isXMLSpCharExist(form[lastName].value)){document.getElementById("lastNameValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_LastNameInvalid;lastNameOK=false;}else{document.getElementById("lastNameValidationErrorMsg").innerHTML="";lastNameOK=true;}}}else{if(field=="ADDRESS"||field=="address"){form[address1].value=trim(form[address1].value);if(field=="ADDRESS"&&((form[address1].value==""||reWhiteSpace.test(form[address1].value)))){document.getElementById("address1ValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_AddressEmpty;address1OK=false;}else{if(OCAddressHelper.isXMLSpCharExist(form[address1].value)){document.getElementById("address1ValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_Address1Invalid;address1OK=false;}else{document.getElementById("address1ValidationErrorMsg").innerHTML="";address1OK=true;}}}else{if(field=="HOUSENUMBER"||field=="housenumber"){if(form[address2].value!=null&&!form[address2].value==""){form[address2].value=trim(form[address2].value);if(OCAddressHelper.isXMLSpCharExist(form[address2].value)){document.getElementById("address2ValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_Address2Invalid;address2OK=false;}else{document.getElementById("address2ValidationErrorMsg").innerHTML="";address2OK=true;}}else{document.getElementById("address2ValidationErrorMsg").innerHTML="";address2OK=true;}}else{if(field=="CITY"||field=="city"){form[city].value=trim(form[city].value);if(field=="CITY"&&(form[city].value==""||reWhiteSpace.test(form[city].value))){document.getElementById("cityValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_CityEmpty;cityOK=false;}else{if(OCAddressHelper.isXMLSpCharExist(form[city].value)){document.getElementById("cityValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_CityInvalid;cityOK=false;}else{document.getElementById("cityValidationErrorMsg").innerHTML="";cityOK=true;}}}else{if(field=="STATE/PROVINCE"||field=="state/province"){if(field=="STATE/PROVINCE"&&(form.state.value==null||form.state.value==""||reWhiteSpace.test(form.state.value))){document.getElementById("stateValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_StateEmpty;stateOK=false;}else{document.getElementById("stateValidationErrorMsg").innerHTML="";stateOK=true;}}else{if(field=="COUNTRY/REGION"||field=="country/region"){form[country].value=trim(form[country].value);if(field=="COUNTRY/REGION"&&(form[country].value==""||reWhiteSpace.test(form[country].value))){MessageHelper.formErrorHandleClient(form[country].id,MessageHelper.messages.ERROR_CountryEmpty);document.getElementById(form[country].id).style.background="#ff0000";return false;}if(!MessageHelper.isValidUTF8length(form[country].value,128)){MessageHelper.formErrorHandleClient(form[country].id,MessageHelper.messages.ERROR_CountryTooLong);document.getElementById(form[country].id).style.background="#ff0000";return false;}}else{if(field=="ZIP"||field=="zip"){form[zipCode].value=trim(form[zipCode].value);if(form[zipCode].value.length==6){var a=form[zipCode].value;form[zipCode].value=a.substr(0,3)+" "+a.substr(3);}if(field=="ZIP"&&(form[zipCode].value==""||reWhiteSpace.test(form[zipCode].value)||form[zipCode].value.length<5)){document.getElementById("zipCodeValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_ZipCodeEmpty;zipCodeOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=topErrorMsg;}else{if(form[zipCode].value.length==5&&isNaN(form[zipCode].value)){document.getElementById("zipCodeValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_NANZipCode;zipCodeOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=topErrorMsg;}else{if(!this.isValidZipCode(form[zipCode].value,document.getElementById("countryCode").value)){document.getElementById("zipCodeValidationErrorMsg").innerHTML=MessageHelper.messages.OC_ERROR_invalidZipCode;zipCodeOK=false;document.getElementById("TopValidationErrorMsg").innerHTML=topErrorMsg;}else{document.getElementById("zipCodeValidationErrorMsg").innerHTML="";zipCodeOK=true;}}}}else{if(field=="EMAIL1"||field=="email1"){form[email1].value=trim(form[email1].value);if(field=="EMAIL1"&&(form[email1].value==""||reWhiteSpace.test(form[email1].value))){document.getElementById("emailValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_EmailEmpty;emailOK=false;}else{if(!MessageHelper.isValidEmail(form[email1].value)||form[email1].value.substring(0,3)=="www"){document.getElementById("emailValidationErrorMsg").innerHTML=MessageHelper.messages.OC_ERROR_INVALIDEMAILFORMAT;emailOK=false;}else{document.getElementById("emailValidationErrorMsg").innerHTML="";emailOK=true;}}}else{if(field=="PHONE1"||field=="phone1"){form[phone1].value=trim(form[phone1].value);if(field=="PHONE1"&&(form[phone1].value==""||reWhiteSpace.test(form[phone1].value))){document.getElementById("phoneNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_PhonenumberEmpty;phoneOK=false;}else{if(!(MessageHelper.utf8StringByteLength(form[phone1].value)==10)){document.getElementById("phoneNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_INVALIDPHONE;phoneOK=false;}else{if(!(/^[0-9]+$/.test(form[phone1].value))){document.getElementById("phoneNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_INVALIDCHPHONE;phoneOK=false;}else{document.getElementById("phoneNumberValidationErrorMsg").innerHTML="";phoneOK=true;}}}}else{if(field=="ALTPHONE"||field=="altPhone"){if(form.altphoneNumber.value!=null&&!form.altphoneNumber.value==""){form.altphoneNumber.value=trim(form.altphoneNumber.value);if(!(MessageHelper.utf8StringByteLength(form.altphoneNumber.value)==10)){document.getElementById("altPhoneNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_INVALIDPHONE;altphoneOK=false;}else{if(!(/^[0-9]+$/.test(form.altphoneNumber.value))){document.getElementById("altPhoneNumberValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_INVALIDCHPHONE;altphoneOK=false;}else{document.getElementById("altPhoneNumberValidationErrorMsg").innerHTML="";altphoneOK=true;}}}else{document.getElementById("altPhoneNumberValidationErrorMsg").innerHTML="";altphoneOK=true;}}else{}}}}}}}}}}}}if((firstNameOK==true)&&(lastNameOK==true)&&(address1OK==true)&&(address2OK==true)&&(cityOK==true)&&(stateOK==true)&&(zipCodeOK==true)&&(emailOK==true)&&(phoneOK==true)&&(altphoneOK==true)){ifSubmit=true;}else{ifSubmit=false;}return ifSubmit;}return ifSubmit;},isValidUSZip:function(sZip){return/^\d{5}(-\d{4})?$/.test(sZip);},isValidlength:function(phone,length){if(phone.length!=length){return false;}else{return true;}},trim:function(str){return str.replace(/^\s+|\s+$/g,"");},isAlphaNumeric:function(val){if(val.match(/^[a-zA-Z0-9\s]+$/)){return true;}else{return false;}},isSpAlphaNumeric4City:function(val){if(val.match(/^[a-zA-Z0-9.\s-']+$/)){return true;}else{return false;}},isXMLSpCharExist:function(val){if(val.match(/[&*]/g)){return true;}else{return false;}},isNumberKey:function(evt){var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return false;}if(charCode==13){return false;}return true;},isNumeric:function(val){if(val.match(/^ *[0-9]+ *$/)){return true;}else{return false;}},isValidZipCode:function(zipCode,storeCountry){var isValid=true;if(storeCountry=="CA"){var expression=new RegExp(/^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]\d[A-Za-z]\s\d[A-Za-z]\d$/);isValid=expression.test(zipCode);return isValid;}else{var expression=new RegExp(/^\d{5}?([-\s]\d{4})?$/);isValid=expression.test(zipCode);return isValid;}},getTaxCodeByZip:function(formName,paramPrefix,id,lableId,zipCodeValidationReqd){var form=document.getElementById(formName);if(paramPrefix==null||paramPrefix=="undefined"||paramPrefix==""){paramPrefix="";}var newid=paramPrefix+id;var city=form[paramPrefix+"city"].value;var country=form[paramPrefix+"country"].value;var zipCode=form[paramPrefix+"zipCode"].value;var stateObj=form[paramPrefix+"state"];var state="";if("select-one"==stateObj.type){state=stateObj.options[stateObj.selectedIndex].value;}else{state=stateObj.value;}if(city==""||city==null){document.getElementById("cityValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_CityEmpty;return false;}else{if(OCAddressHelper.isXMLSpCharExist(city)){document.getElementById("cityValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_CityInvalid;return false;}else{document.getElementById("cityValidationErrorMsg").innerHTML="";}}if(state==null||state==""){document.getElementById("stateValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_StateEmpty;return false;}else{document.getElementById("stateValidationErrorMsg").innerHTML="";}if(zipCode==""||zipCode==null){document.getElementById("zipCodeValidationErrorMsg").innerHTML=MessageHelper.messages.ERROR_ZipCodeEmpty;return false;}else{if((zipCode!=""&&zipCode!=null)&&this.isValidZipCode(zipCode,country)){form[paramPrefix+"zipCode"].value=zipCode.toUpperCase();zipCode=zipCode.toUpperCase();document.getElementById("zipCodeValidationErrorMsg").innerHTML="";}else{document.getElementById("zipCodeValidationErrorMsg").innerHTML=MessageHelper.messages.OC_ERROR_invalidZipCode;return false;}}if(document.getElementById(lableId)!=null){document.getElementById(lableId).style.display="none";}wc.service.declare({id:"validateZipCode",actionId:"validateZipCode",url:"AjaxValidateZipCode",formId:"",successHandler:function(serviceResponse){document.getElementById("verified").value="yes";document.getElementById(paramPrefix+"validate_btn").style.display="block";document.getElementById("zipCodeValidationSuccessMsg").innerHTML=MessageHelper.messages.OC_VALIDADDRESS;cursor_clear();},failureHandler:function(serviceResponse){if(document.getElementById(lableId)!=null){document.getElementById(lableId).style.display="none";}if(serviceResponse.errorCode=="5090"){MessageHelper.formErrorHandleClient(form[paramPrefix+"city"].id,MessageHelper.messages.ERROR_CityEmpty);}if(serviceResponse.errorCode=="5110"){MessageHelper.formErrorHandleClient(form[paramPrefix+"state"].id,MessageHelper.messages.ERROR_StateEmpty);}if(serviceResponse.errorCode=="5130"){MessageHelper.formErrorHandleClient(form[paramPrefix+"zipCode"].id,MessageHelper.messages.ERROR_ZipCodeEmpty);}if(serviceResponse.errorCode=="5140"){MessageHelper.formErrorHandleClient(form[paramPrefix+"zipCode"].id,MessageHelper.messages.ERROR_InvalidJurisdisctionCode);}if(serviceResponse.errorCode==""||serviceResponse.errorCode==null){if(!zipCodeValidationReqd){var taxGeoCodeInput=document.createElement("input");taxGeoCodeInput.setAttribute("type","hidden");taxGeoCodeInput.setAttribute("id",paramPrefix+id);if(id=="_county1"){taxGeoCodeInput.setAttribute("name",paramPrefix+"_taxGeoCode");}else{taxGeoCodeInput.setAttribute("name",paramPrefix+"taxGeoCode");}taxGeoCodeInput.setAttribute("value","");var countyInput=document.createElement("input");countyInput.setAttribute("type","hidden");countyInput.setAttribute("id",paramPrefix+"_addressField1");if(id=="_county1"){countyInput.setAttribute("name",paramPrefix+"_addressField1");}else{countyInput.setAttribute("name",paramPrefix+"addressField1");}countyInput.setAttribute("value","");MessageHelper.formErrorHandleClient(form[paramPrefix+"zipCode"].id,MessageHelper.messages.ERROR_WebserviceUnavailable_Continue);}else{MessageHelper.formErrorHandleClient(form[paramPrefix+"zipCode"].id,MessageHelper.messages.ERROR_WebserviceUnavailable_TryLater);}}cursor_clear();return false;}});if(!submitRequest()){return;}var params=[];params.langId=langId;params.storeId=storeId;params.catalogId=catalogId;params.city=city;params.country=country;params.zipCode=zipCode;params.state=state;cursor_wait();wc.service.invoke("validateZipCode",params);},enableCityStateZip:function(formName,paramPrefix,lableId,preserveCountyDiv){if(paramPrefix==null||paramPrefix=="undefined"||paramPrefix==""){paramPrefix="";}var form=document.getElementById(formName);form[paramPrefix+"city"].readOnly=false;form[paramPrefix+"zipCode"].readOnly=false;form[paramPrefix+"state"].disabled=false;document.getElementById(paramPrefix+"validate_btn").style.display="block";document.getElementById(paramPrefix+"edit_btn").style.display="none";document.getElementById(lableId).style.display="none";while(document.getElementById(paramPrefix+"countyDiv").hasChildNodes()){document.getElementById(paramPrefix+"countyDiv").removeChild(document.getElementById(paramPrefix+"countyDiv").firstChild);}},};