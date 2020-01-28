import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalDataService {
  tabarray = [{id:1,name:'Health System Management'}, {id:2,name:'Provider Management'}, {id:3,name:'Patient Management'}, {id:4,name:'Hospital Location'},{id:5,name:'E-Clinic Management'}];
  // tabArrayForEconsultant=[{id:6,name:'PCP User Management'}]
  tabarrayForHospitalAdmin = [{id:2,name:'Provider Management'}, {id:3,name:'Patient Management'}];
  todaydate: Date = new Date();

  defaultCountry=233;

  Firstname = {
    label: "First Name",
    placeholder: "Enter Firstname",
    maxlength: 30,
    minlength: 1,
    pattern:new RegExp("^([A-Za-z]{1,30}\.?)$")  ,
    // pattern: new RegExp("^[-a-zA-Z-()].+(\\s[-a-zA-Z-()].+(?:(?!\\s{0,})))*$"),
    // pattern: new RegExp('^[A-Za-z]+$'),
    patternError: "Contains Only alphabets",
    maxlengthError: "Max 30 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Firstname is required"
  };

  Lastname = {
    label: "Last Name",
    placeholder: "Enter Lastname",
    maxlength: 30,
    minlength: 1,
    // pattern: new RegExp("^[-a-zA-Z-()].+(\\s[-a-zA-Z-()].+(?:(?!\\s{0,})))*$"),
    // pattern: new RegExp('^[A-Za-z]+$'),
    pattern:new RegExp("^([A-Za-z]{1,30}\.?)$")  ,
    patternError: "Contains Only alphabets",
    maxlengthError: "Max 30 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Lastname is required"
  };

  Middlename = {
    label: "Middle Name",
    placeholder: "Enter Middlename",
    maxlength: 30,
    minlength: 1,
    // pattern: new RegExp("^[-a-zA-Z-()].+(\\s[-a-zA-Z-()].+(?:(?!\\s{0,})))*$"),
    pattern:new RegExp("^([A-Za-z]{1,30}\.?)$")  ,
    patternError: "Contains Only alphabets",
    maxlengthError: "Max 30 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Middlename is required"
  };

  Title = {
    label: "Title",
    placeholder: "Enter Title",
    maxlength: 254,
    minlength: 2,
    pattern: new RegExp("^[-a-zA-Z-()],+(\\s[-a-zA-Z-()],+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid title only and comma seprated text allow",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 2 characters",
    requiredError: "Title is required"
  };
  Speciality = {
    label: "Speciality",
    placeholder: "Enter Speciality",
    maxlength: 254,
    minlength: 2,
    pattern: new RegExp("^[-a-zA-Z-()],+(\\s[-a-zA-Z-()],+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid speciality only and comma seprated text allow",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 2 characters",
    requiredError: "Specialty is required"
  };
  Subspeciality = {
    label: "Subspeciality",
    placeholder: "Enter Subspeciality",
    maxlength: 254,
    minlength: 2,
    pattern: new RegExp("^[-a-zA-Z-()],+(\\s[-a-zA-Z-()],+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid Subspeciality only and comma seprated text allow",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 2 characters",
    requiredError: "Subspecialty is required"
  };

  Phone: any = {
    label: "Mobile Number",
    //pattern: new RegExp('^[2-9]\d{2}-\d{3}-\d{4}$'),
    // pattern: "[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}",
    // pattern:"^[0-9]{7,15}$",
    pattern:"^(\\d{3})-?(\\d{3})-\\s?(\\d{4,7})$",
    requiredPattern: "Should contain minimum 10 and maximum 13 digits",
    placeholder: "000-000-00000",
    maxlength: 15,
    maxlengthError: "Mobile Number cannot be more than 13 digits long",
    minlength: 12,
    minlengthError: "Mobile Number cannot be less than 10 digits",
    requiredError: "Mobile Number required"
  };

  Landline: any = {
    label: "Landline Number",
    //pattern: new RegExp('^[2-9]\d{2}-\d{3}-\d{4}$'),
    // pattern: "[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}",
    // pattern:"^[0-9]{7,15}$",
    pattern:"^\\((\\d{3})\\)\\s?(\\d{3})-\\s?(\\d{4,7})$",
    requiredPattern: "Should contain minimum 10 and maximum 13 digits",
    placeholder: "(000) 000-0000",
    maxlength: 17,
    maxlengthError: "Landline Number cannot be more than 13 digits long",
    minlength: 14,
    minlengthError: "Landline Number cannot be less than 10 digits",
    requiredError: "Landline Number required"
  };

  Faxnumber = {
    label: "Fax Number",
    placeholder: "(000) 000-0000",
    // maxlength: 254,
    // minlength: 1,
    // //pattern: new RegExp(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/),
    // patternError: "Invalid Fax Number",
    // maxlengthError: "Max 254 characters",
    // minlengthError: "Min 1 characters",
    // requiredError: "Fax Number is required"
    // pattern:"^[0-9]{7,15}$",
    // ^\((\d{3})\)\s?(\d{3})-\s?(\d{4})$
    // pattern:"^\\((\\d{3})\\)\\s?(\\d{3})-\\s?(\\d{4})$",
    pattern:"^\\((\\d{3})\\)\\s?(\\d{3})-\\s?(\\d{4,7})$",
    requiredPattern: "Fax Number should contain minimum 10 and maximum 13 digits only",
    // placeholder: "Phone",
    maxlength: 17,
    maxlengthError: "Fax Number cannot be more than 13 digits long",
    minlength: 14,
    minlengthError: "Fax Number cannot be less than 10 digits",
    requiredError: "Fax Number required"
  };

  Country_Code: any = {
    label: "Country Code",
    //pattern: new RegExp('^[2-9]\d{2}-\d{3}-\d{4}$'),
    // pattern: "[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}",
    // pattern:"^[0-9]{1,4}$",
    pattern:"\+[0-9]{1,4}",
    requiredPattern: "Should contain minimum 1 and maximum 4 digits",
    placeholder: "Country code",
    maxlength: 15,
    maxlengthError: "Country Code cannot be more than 4 digits long",
    minlength: 7,
    minlengthError: "Country Code cannot be less than 7 digits",
    requiredError: "Country Code required"
  };

  Email: any = {
    label: "Email Address",
    placeholder: "Email Address",
    maxlength: 254,
    minlength: 5,
    pattern: new RegExp("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"),
    patternError: "Invalid Email Address",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 5 characters",
    requiredError: "Email Address is required",
    requiredPattern: "Not a Valid Email Address"
  };

  Gender: any = {
    label: "Gender",
    pattern: new RegExp("^(?:m|M|male|Male|f|F|female|Female)$"),
    patternError: "Pattern does't match",
    Error: "Please select gender"
  };

  Hcpa = {
    label: "Name of Health Care Power Attorney",
    placeholder:"Name of Health Care Power Attorney",
    maxlength:"30",
    minlength:'1',
    pattern: new RegExp("^[-a-zA-Z-()].+(\\s[-a-zA-Z-()].+(?:(?!\\s{1,30})))*$"),
    patternError: "Invalid name",
    maxlengthError: "Max 30 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Fullname is required"
  }

  Password = {
    label: "Password",
    placeholder: "Password",
    maxlength: 12,
    minlength: 6,
    // pattern:
    //   "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,12}$",
    // pattern:new RegExp("^([A-Za-z]{1,30}\.?)$")  ,
    pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$",
    // patternError:
    //   "Minimum 6 characters including atleast one upper case,one lower case, One special character and number",
    patternError:"Atleast one uppercase letter, one lowercase letter, one number and one special character",  
    maxlengthError: "Maximum 12 characters are allowed",
    minlengthError: "Mininum 6 characters are required",
    requiredError: "Password is required",
    passwordNotMatch: "Password does not match"
  };

  FullName = {
    label: "Full Name",
    placeholder: "Enter Fullname",
    maxlength: 254,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()].+(\\s[-a-zA-Z-()].+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid Person name not used digits",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Fullname is required"
  };

  Address = {
    label: "Address",
    placeholder: "Enter Address",
    maxlength: 254,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()]+(\\s[-a-zA-Z-()].+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid Address",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Address is required"
  };

  Role = {
    label: "Role",
    placeholder: "Enter Person Role",
    maxlength: 20,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()]+(\\s[-a-zA-Z-()]+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid First name ",
    maxlengthError: "Max 20 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Role is required"
  };

  Hospitalname = {
    label: "Hospital Name",
    placeholder: "Enter Hospital name",
    maxlength: 254,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()]+(\\s[-a-zA-Z-()]+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid Hospital Name",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Hospital Name is required"
  };

  HealthSystem = {
    label: "Health System",
    placeholder: "Enter Health System",
    maxlength: 50,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()]+(\\s[-a-zA-Z-()]+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid Health System Name",
    maxlengthError: "Max 50 characters",
    minlengthError: "Min 1 characters",
    requiredError: "Health System is required"
  };

  Height = {
    label: "Height",
    placeholder: "Enter Height",
    maxlength: 3,
    minlength: 2,
    // pattern: new RegExp("[0-9]{1,2}."),
    pattern: new RegExp("^([1-9]{1}[0-9]{0,2})$"),
    patternError: "Invalid Height",
    minlengthError: "Min 2 characters",
    requiredError: "Height is required"
  };
  Weight = {
    label: "Weight",
    placeholder: "Enter Weight",
    maxlength: 4,
    minlength: 1,
    pattern: new RegExp("^([1-9]{1}[0-9]{0,3})$"),
    patternError: "Invalid Weight",
    minlengthError: "Min 1 characters",
    requiredError: "Weight is required"
  };

  Age = {
    placeholder: "Age",
    // pattern: new RegExp("^[0-9]"),
    pattern: new RegExp("^([1-9]{1}[0-9]{0,2})$"),
    requiredError: "Age is required",
    patternError: "Invalid age",
    maxlength: 3,
    minlength: 1,
  };

  date = {
    label: "Date of Birth",
    placeholder: "Date of birth",
    pattern: new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}"),
    patternError: "Invalid date format",
    requiredError: "Date of birth required"
  };

  Admitted_date = {
    label: "Addmitted Date",
    placeholder: "Addmitted on",
    pattern: new RegExp("[0-9]{2}[/][0-9]{2}[/][0-9]{4}"),
    patternError: "Invalid date format",
    requiredError: "Addmitted date required"
  };

  Discharged_date = {
    label: "Addmitted Date",
    placeholder: "Discharged on",
    pattern: new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}"),
    patternError: "Invalid date format",
    requiredError: "Discharged date required"
  };

  getErrorPassword = {
    requiredError:
      "New password is required (at least eight characters, one uppercase letter and one number)",
    reqyurementError:
      "Password needs to be at least eight characters, one uppercase letter and one number"
  };

  address = {
    label: "Hospital Address",
    requiredError: "Hospital Address is required"
  };

  HealthSystemAddress = {
    label: "Health System Address",
    placeholder: "Enter Health System Address",
    requiredError: "Health System Address is required"
  };

  Address_Line1 = {
    label: "Address Line 1",
    placeholder: "Enter Address",
    requiredError: "Address is required"
  };

  Address_Line2 = {
    label: "Address Line 2",
    placeholder: "Enter Address",
    requiredError: "Address is required"
  };

  Country = {
    label: "Select Country",
    placeholder: "Enter country",
    requiredError: "Country is required"
  };

  State = {
    label: "Select State",
    placeholder: "Enter State",
    requiredError: "State is  required"
  };

  City = {
    label: "Select City",
    placeholder: "Enter City",
    requiredError: "City is required"
  };

  PCPClinic = {
    label: "PCP Clinic",
    placeholder: "Enter PCP Clinic",
    maxlength: 254,
    minlength: 1,
    pattern: new RegExp("^[-a-zA-Z-()]+(\\s[-a-zA-Z-()]+(?:(?!\\s{2,})))*$"),
    patternError: "Invalid PCP Clinic Name",
    maxlengthError: "Max 254 characters",
    minlengthError: "Min 1 characters",
    requiredError: "PCP Clinic is required"
  };

 

  /**
   *  @AUTO_LOGOUT_IDLE_TIMER auto logout idel time
   *  @AUTO_LOGOUT_WARNING_TIMER Warning time
   */
  AUTO_LOGOUT_IDLE_TIMER: 950; //15 min
  AUTO_LOGOUT_WARNING_TIMER: 120; //2 min

  /**
   * @constructor
   */
  constructor() {}
}
