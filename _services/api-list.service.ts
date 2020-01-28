import { Injectable } from "@angular/core";
import { bindCallback } from "rxjs";
import { BindingFlags } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root"
})
export class ApiListService {
  constructor() {}

  loginProvider: any = {
    apiName: "/loginAll",
    method: "post",
    showLoader: true,
    header: false
  };

  forgetPassword: any = {
    apiName: "/forgotPasswordAll",
    method: "post",
    showLoader: true,
    header: false
  };

  resetPassword: any = {
    apiName: "/resetPasswordAll",
    method: "post",
    showLoader: true,
    header: false
  };

  setPassword: any = {
    apiName: "/setPassword",
    method: "post",
    showLoader: true,
    header: false
  };

  getAllProvidersByHospital: any = {
    apiName: "/getAllProvidersByHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdatePatientCHF: any = {
    apiName: "/addUpdatePatientCHF",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCardiologistsByPatientHospital: any = {
    apiName: "/getAllCardiologistsByPatientHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllProvidersByHospitalPatient: any = {
    apiName: "/getAllProvidersByHospitalPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  updateCardiologistForPatient: any = {
    apiName: "/updateCardiologistForPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  updateHospital: any = {
    apiName: "/updateHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  addHospitalAdmin: any = {
    apiName: "/addUpdateHospitalAdmin",
    method: "post",
    showLoader: true,
    header: true
  };

  eClinicUpdateData: any = {
    apiName: "/eClinicUpdateData",
    method: "post",
    showLoader: true,
    header: true
  };

  getCareteamDetailsForPatient: any = {
    apiName: "/getCareteamDetailsForPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientProviders: any = {
    apiName: "/getPatientProviders",
    method: "post",
    showLoader: true,
    header: true
  };

  getProviderHospitalAppointmentSettings: any = {
    apiName: "/getProviderHospitalAppointmentSettings",
    method: "post",
    showLoader: true,
    header: true
  };

  assignCareteamToPatient: any = {
    apiName: "/assignCareteamToPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  deleteCareteam: any = {
    apiName: "/deleteCareteam",
    method: "post",
    showLoader: true,
    header: true
  };

  getAuditTrailsData: any = {
    apiName: "/getAuditTrailsData",
    method: "post",
    showLoader: true,
    header: true
  };

  getUserDataById: any = {
    apiName: "/getUserDataById",
    method: "post",
    showLoader: true,
    header: true
  };

  getCareteamDetailsByProvider: any = {
    apiName: "/getCareteamDetailsByProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdateCareteam: any = {
    apiName: "/addUpdateCareteam",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientDetailsByHospital: any = {
    apiName: "/getPatientDetailsByHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  getUserNotifications: any = {
    apiName: "/getUserNotifications",
    method: "post",
    showLoader: true,
    header: true
  };

  verifyEmail: any = {
    apiName: "/verifyEmail",
    method: "post",
    showLoader: true,
    header: false
  };

  updateNotification: any = {
    apiName: "/updateNotification",
    method: "post",
    showLoader: true,
    header: true
  };

  getAddHospitalWithLocationList: any = {
    apiName: "/getAddHospitalWithLocationList",
    method: "post",
    showLoader: true,
    header: true
  };

  readNotification: any = {
    apiName: "/readNotification",
    method: "post",
    showLoader: true,
    header: true
  };

  

  loginEconsult: any = {
    apiName: "/loginEconsult",
    method: "post",
    showLoader: true,
    header: false
  };

  getAllStatesByCountryId: any = {
    apiName: "/getAllStatesByCountryId",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCitiesByStateId: any = {
    apiName: "/getAllCitiesByStateId",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCardiologistAprn: any = {
    apiName: "/getAllCardiologistAprn",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllProvidersByLoggedInId: any = {
    apiName: "/getAllProvidersByLoggedInId",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllSyptomsForPatient: any = {
    apiName: "/getAllSyptomsForPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllHospitalsForProvider: any = {
    apiName: "/getAllHospitalsForProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientDetials: any = {
    apiName: "/getPatientDetailsById",
    method: "post",
    showLoader: true,
    header: true
  };

  getWeeklySymptomsByDate: any = {
    apiName: "/getWeeklySymptomsByDate",
    method: "post",
    showLoader: true,
    header: true
  };

  getWeeklyVitalSignsByDate: any = {
    apiName: "/getWeeklyVitalSignsByDate",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientProfile: any = {
    apiName: "/getPatientProfile",
    method: "post",
    showLoader: true,
    header: true
  };

  updatePatientProfile: any = {
    apiName: "/updatePatientProfile",
    method: "post",
    showLoader: true,
    header: true
  };
  getPatientPrescriptions: any = {
    apiName: "/getPatientPrescriptions",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllMedicines: any = {
    apiName: "/getAllMedicines",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllMedicinesByPatientId: any = {
    apiName: "/getAllMedicinesByPatientId",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCardiologistsByProvider: any = {
    apiName: "/getAllCardiologistsByProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllAprnByHospital: any = {
    apiName: "/getAllAprnByHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  registerPatient: any = {
    apiName: "/registerPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdatePatientprescriptions: any = {
    apiName: "/addUpdatePatientPrescriptions",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientPrescriptionsHistory: any = {
    apiName: "/getPatientPrescriptionsHistory",
    method: "post",
    showLoader: true,
    header: true
  };

  editProfile: any = {
    apiName: "/editProfile",
    method: "post",
    showLoader: true,
    header: true
  };

  getUserConnections: any = {
    apiName: "/getUserConnections",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllProvidersBySearch: any = {
    apiName: "/getAllProvidersBySearch",
    method: "post",
    showLoader: true,
    header: true
  };

  getDashboardUserWiseClassification: any = {
    apiName: "/getDashboardUserWiseClassification",
    method: "post",
    showLoader: true,
    header: true
  };

  getDashboardAllUsersData: any = {
    apiName: "/getDashboardAllUsersData",
    method: "post",
    showLoader: true,
    header: true
  };

  updateInvitationStatus: any = {
    apiName: "/updateInvitationStatus",
    method: "post",
    showLoader: true,
    header: true
  };

  getInvites: any = {
    apiName: "/getInvites",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCountries: any = {
    apiName: "/getAllCountries",
    method: "post",
    showLoader: true,
    header: true
  };

  getCountries: any = {
    apiName: "/getCountries",
    method: "post",
    showLoader: true,
    header: true
  };

  sendInvitation: any = {
    apiName: "/sendInvitation",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientDetailsByCareteamId: any = {
    apiName: "/getPatientDetailsByCareteamId",
    method: "post",
    showLoader: true,
    header: true
  };

  activateDeactivateProviderHospital: any = {
    apiName: "/activateDeactivateProviderHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  activateDeactivateEntity: any = {
    apiName: "/activateDeactivateEntity",
    method: "post",
    showLoader: true,
    header: true
  };

  getEConsultDashboardData:any={
    apiName: "/getEConsultDashboardData",
    method: "post",
    showLoader: true,
    header: true
  }

  getAllPatients: any = {
    apiName: "/getAllPatients",
    method: "post",
    showLoader: true,
    header: true
  };
  getCareteamDetailsByCareteamId: any = {
    apiName: "/getCareteamDetailsByCareteamId",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdateMeetingScheduling: any = {
    apiName: "/addUpdateAppointmentSettings",
    method: "post",
    showLoader: true,
    header: true
  };

  getTimeSlotByProviderCareteam: any = {
    apiName: "/getProviderHospitalAppointmentSettings",
    method: "post",
    showLoader: true,
    header: true
  };

  searchCardiologist: any = {
    apiName: "/searchCardiologist",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllRoles: any = {
    apiName: "/getAllRoles",
    method: "post",
    showLoader: true,
    header: true
  };

  checkAppointmentSchedule: any = {
    apiName: "/checkAppointmentSchedule",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllHospitals: any = {
    apiName: "/getAllHospitals",
    method: "post",
    showLoader: true,
    header: true
  };

  getDashboardHospitalInformation: any = {
    apiName: "/getDashboardHospitalInformation",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllHospitalsExceptAlreadyAssignedProvider: any = {
    apiName: "/getAllHospitalsExceptAlreadyAssignedProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdateProvider: any = {
    apiName: "/addUpdateProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  addAppointmentSchedule: any = {
    apiName: "/addAppointmentSchedule",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllProviderDetails: any = {
    apiName: "/getAllProviderDetails",
    method: "post",
    showLoader: true,
    header: true
  };

  getPatientDetailsByProvider: any = {
    apiName: "/getPatientDetailsByProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  getEConsultCaseHistoryById: any = {
    apiName: "/getEConsultCaseHistoryById",
    method: "post",
    showLoader: true,
    header: true
  };

  giveEConsultCaseFeedback:  any = {
    apiName: "/giveEConsultCaseFeedback",
    method: "post",
    showLoader: true,
    header: true
  };

  downloadEConsultCaseById:  any = {
    apiName: "/downloadEConsultCaseById",
    method: "post",
    showLoader: true,
    header: true
  };

  deleteProvider: any = {
    apiName: "/deleteProvider",
    method: "post",
    showLoader: true,
    header: true
  };

  addEConsultCaseAdditionalInfo:any = {
    apiName: "/addEConsultCaseAdditionalInfo",
    method: "post",
    showLoader: true,
    header: true
  };

  getPCPProvidersEConsultCaseId:any = {
    apiName: "/getPCPProvidersEConsultCaseId",
    method: "post",
    showLoader: true,
    header: true
  };

  deleteEConsultCase:any={
    apiName: "/deleteEConsultCase",
    method: "post",
    showLoader: true,
    header: true
  }

  assignEConsultCase:any={
    apiName: "/assignEConsultCase",
    method: "post",
    showLoader: true,
    header: true
  }

  addUpdateEConsultCase:any={
    apiName: "/addUpdateEConsultCase",
    method: "post",
    showLoader: true,
    header: true
  }
  deletePCPClinic:any={
    apiName: "/deletePCPClinic",
    method: "post",
    showLoader: true,
    header: true
  };

  deletePCPUser:any={
    apiName: "/deletePCPUser",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllEClinicUsers:any={
    apiName: "/getAllEClinicUsers",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdatePCPUser:any={
    apiName: "/addUpdatePCPUser",
    method: "post",
    showLoader: true,
    header: true
  };

  updateAppointmentScheduleStatus: any = {
    apiName: "/updateAppointmentScheduleStatus",
    method: "post",
    showLoader: true,
    header: true
  };

  getProviderHospitalAppointmentSettingsByDate: any = {
    apiName: "/getProviderHospitalAppointmentSettingsByDate",
    method: "post",
    showLoader: true,
    header: true
  };

  viewUserAppointmentSchedule: any = {
    apiName: "/viewUserAppointmentSchedule",
    method: "post",
    showLoader: true,
    header: true
  };

  deleteHospital: any = {
    apiName: "/deleteHospital",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllCardiologistsByAprn: any = {
    apiName: "/getAllCardiologistsByAprn",
    method: "post",
    showLoader: true,
    header: true
  };

  checkEmailExists: any = {
    apiName: "/checkEmailExists",
    method: "post",
    showLoader: true,
    header: true
  };

  getDetailsFromEmail: any = {
    apiName: "/getDetailsFromEmail",
    method: "post",
    showLoader: true,
    header: true
  };

  getAdditionalQuestionsByPatientIdDate: any = {
    apiName: "/getAdditionalQuestionsByPatientIdDate",
    method: "post",
    showLoader: true,
    header: true
  };

  updateKardioClinicRequest: any = {
    apiName: "/updateKardioClinicRequest",
    method: "post",
    showLoader: true,
    header: true
  };

  removeProfilePicture: any = {
    apiName: "/removeProfilePicture",
    method: "post",
    showLoader: true,
    header: true
  };

  changePatientCareStatus: any = {
    apiName: "/changePatientCareStatus",
    method: "post",
    showLoader: true,
    header: true
  };

  changeSymptomReportingFrequency: any = {
    apiName: "/changeSymptomReportingFrequency",
    method: "post",
    showLoader: true,
    header: true
  };

  econsultCheckEmailExists: any = {
    apiName: "/econsultCheckEmailExists",
    method: "post",
    showLoader: true,
    header: true
  };

  addUpdatePCPClinic: any = {
    apiName: "/addUpdatePCPClinic",
    method: "post",
    showLoader: true,
    header: true
  };

  getStatesByCountryId: any = {
    apiName: "/getStatesByCountryId",
    method: "post",
    showLoader: true,
    header: true
  };

  getCitiesByStateId: any = {
    apiName: "/getCitiesByStateId",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllPCPClinics: any = {
    apiName: "/getAllPCPClinics",
    method: "post",
    showLoader: true,
    header: true
  };

  searchEClinic: any = {
    apiName: "/searchEClinic",
    method: "post",
    showLoader: true,
    header: true
  };

  getEclinicsByName: any = {
    apiName: "/getEclinicsByName",
    method: "post",
    showLoader: true,
    header: true
  };

  searchEClinicForSuperAdmin: any = {
    apiName: "/searchEClinicForSuperAdmin",
    method: "post",
    showLoader: true,
    header: true
  };

  activateDeactivateEClinic: any = {
    apiName: "/activateDeactivateEClinic",
    method: "post",
    showLoader: true,
    header: true
  };

  getEConsultCaseById: any = {
    apiName: "/getEConsultCaseById",
    method: "post",
    showLoader: true,
    header: true
  };

  invitePCPClinicForAffiliation: any = {
    apiName: "/invitePCPClinicForAffiliation",
    method: "post",
    showLoader: true,
    header: true
  };

  affiliatePCPClinicWithHospital: any = {
    apiName: "/affiliatePCPClinicWithHospital",
    method: "post",
    showLoader: true,
    header: false
  };

  getVitalSignsByPatient: any = {
    apiName: "/getVitalSignsByPatient",
    method: "post",
    showLoader: true,
    header: true
  };

  addPatientVitalSigns: any = {
    apiName: "/addPatientVitalSigns",
    method: "post",
    showLoader: true,
    header: true
  };

  getAllClinics: any = {
    apiName: "/getAllClinics",
    method: "post",
    showLoader: true,
    header: true
  };

  
  addUpdateClinic: any = {
    apiName: "/addUpdateClinic",
    method: "post",
    showLoader: true,
    header: true
  };
}
