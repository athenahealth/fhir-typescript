// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductAuthorization

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the MedicinalProductAuthorizationJurisdictionalAuthorization type.
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorizationArgs extends fhir.BackboneElementArgs {
  /**
   * The assigned number for the marketing authorization.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Country of authorization.
   */
  country?: fhir.CodeableConceptArgs|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  legalStatusOfSupply?: fhir.CodeableConceptArgs|undefined;
  /**
   * The start and expected end date of the authorization.
   */
  validityPeriod?: fhir.PeriodArgs|undefined;
}

/**
 * Authorization in areas within a country.
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductAuthorizationJurisdictionalAuthorization';
  /**
   * The assigned number for the marketing authorization.
   */
  public identifier: fhir.Identifier[];
  /**
   * Country of authorization.
   */
  public country?: fhir.CodeableConcept|undefined;
  /**
   * Jurisdiction within a country.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * The legal status of supply in a jurisdiction or region.
   */
  public legalStatusOfSupply?: fhir.CodeableConcept|undefined;
  /**
   * The start and expected end date of the authorization.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * Default constructor for MedicinalProductAuthorizationJurisdictionalAuthorization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductAuthorizationJurisdictionalAuthorizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['country']) { this.country = new fhir.CodeableConcept(source.country); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['legalStatusOfSupply']) { this.legalStatusOfSupply = new fhir.CodeableConcept(source.legalStatusOfSupply); }
    if (source['validityPeriod']) { this.validityPeriod = new fhir.Period(source.validityPeriod); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProductAuthorization.jurisdictionalAuthorization' }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["country"]) { issues.push(...this.country.doModelValidation(expression+'.country')); }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.jurisdiction[${i}]`)); }) }
    if (this["legalStatusOfSupply"]) { issues.push(...this.legalStatusOfSupply.doModelValidation(expression+'.legalStatusOfSupply')); }
    if (this["validityPeriod"]) { issues.push(...this.validityPeriod.doModelValidation(expression+'.validityPeriod')); }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductAuthorizationProcedure type.
 */
export interface MedicinalProductAuthorizationProcedureArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier for this procedure.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Type of procedure.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Date of procedure.
   */
  date?: fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * Date of procedure.
   */
  datePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Date of procedure.
   */
  dateDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  application?: fhir.MedicinalProductAuthorizationProcedureArgs[]|undefined;
}

/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export class MedicinalProductAuthorizationProcedure extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductAuthorizationProcedure';
  /**
   * Identifier for this procedure.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Type of procedure.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Date of procedure.
   */
  public date?: (fhir.Period|fhir.FhirDateTime)|undefined;
  /**
   * Internal flag to properly serialize choice-type element MedicinalProductAuthorization.procedure.date[x]
   */
  protected static readonly _fts_dateIsChoice:true = true;
  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  public application: fhir.MedicinalProductAuthorizationProcedure[];
  /**
   * Default constructor for MedicinalProductAuthorizationProcedure - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductAuthorizationProcedureArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['date']) { this.date = source.date; }
    else if (source['datePeriod']) { this.date = new fhir.Period(source.datePeriod); }
    else if (source['dateDateTime']) { this.date = new fhir.FhirDateTime({value: source.dateDateTime}); }
    if (source['application']) { this.application = source.application.map((x) => new fhir.MedicinalProductAuthorizationProcedure(x)); }
    else { this.application = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProductAuthorization.procedure' }
    if (this["identifier"]) { issues.push(...this.identifier.doModelValidation(expression+'.identifier')); }
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: MedicinalProductAuthorization.procedure.type:CodeableConcept', expression: [expression] });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["application"]) { this.application.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.application[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the MedicinalProductAuthorization type.
 */
export interface MedicinalProductAuthorizationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductAuthorization"|undefined;
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The medicinal product that is being authorized.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The status of the marketing authorization.
   */
  status?: fhir.CodeableConceptArgs|undefined;
  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductAuthorization.statusDate
   */
  _statusDate?:fhir.FhirElementArgs;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  restoreDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductAuthorization.restoreDate
   */
  _restoreDate?:fhir.FhirElementArgs;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  validityPeriod?: fhir.PeriodArgs|undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  dateOfFirstAuthorization?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductAuthorization.dateOfFirstAuthorization
   */
  _dateOfFirstAuthorization?:fhir.FhirElementArgs;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  internationalBirthDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductAuthorization.internationalBirthDate
   */
  _internationalBirthDate?:fhir.FhirElementArgs;
  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: fhir.CodeableConceptArgs|undefined;
  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: fhir.MedicinalProductAuthorizationJurisdictionalAuthorizationArgs[]|undefined;
  /**
   * Marketing Authorization Holder.
   */
  holder?: fhir.ReferenceArgs|undefined;
  /**
   * Medicines Regulatory Agency.
   */
  regulator?: fhir.ReferenceArgs|undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  procedure?: fhir.MedicinalProductAuthorizationProcedureArgs|undefined;
}

/**
 * The regulatory authorization of a medicinal product.
 */
export class MedicinalProductAuthorization extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MedicinalProductAuthorization';
  /**
   * Resource Type Name
   */
  public override resourceType: "MedicinalProductAuthorization";
  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  public identifier: fhir.Identifier[];
  /**
   * The medicinal product that is being authorized.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * The country in which the marketing authorization has been granted.
   */
  public country: fhir.CodeableConcept[];
  /**
   * Jurisdiction within a country.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * The status of the marketing authorization.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * The date at which the given status has become applicable.
   */
  public statusDate?: fhir.FhirDateTime|undefined;
  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  public restoreDate?: fhir.FhirDateTime|undefined;
  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  public validityPeriod?: fhir.Period|undefined;
  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  public dataExclusivityPeriod?: fhir.Period|undefined;
  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  public dateOfFirstAuthorization?: fhir.FhirDateTime|undefined;
  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  public internationalBirthDate?: fhir.FhirDateTime|undefined;
  /**
   * The legal framework against which this authorization is granted.
   */
  public legalBasis?: fhir.CodeableConcept|undefined;
  /**
   * Authorization in areas within a country.
   */
  public jurisdictionalAuthorization: fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[];
  /**
   * Marketing Authorization Holder.
   */
  public holder?: fhir.Reference|undefined;
  /**
   * Medicines Regulatory Agency.
   */
  public regulator?: fhir.Reference|undefined;
  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  public procedure?: fhir.MedicinalProductAuthorizationProcedure|undefined;
  /**
   * Default constructor for MedicinalProductAuthorization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MedicinalProductAuthorizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MedicinalProductAuthorization';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['country']) { this.country = source.country.map((x) => new fhir.CodeableConcept(x)); }
    else { this.country = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status); }
    if (source['statusDate']) { this.statusDate = new fhir.FhirDateTime({value: source.statusDate}); }
    if (source['_statusDate']) {
      if (this.statusDate) { this.statusDate.addExtendedProperties(source._statusDate!); }
      else { this.statusDate = new fhir.FhirDateTime(source._statusDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['restoreDate']) { this.restoreDate = new fhir.FhirDateTime({value: source.restoreDate}); }
    if (source['_restoreDate']) {
      if (this.restoreDate) { this.restoreDate.addExtendedProperties(source._restoreDate!); }
      else { this.restoreDate = new fhir.FhirDateTime(source._restoreDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['validityPeriod']) { this.validityPeriod = new fhir.Period(source.validityPeriod); }
    if (source['dataExclusivityPeriod']) { this.dataExclusivityPeriod = new fhir.Period(source.dataExclusivityPeriod); }
    if (source['dateOfFirstAuthorization']) { this.dateOfFirstAuthorization = new fhir.FhirDateTime({value: source.dateOfFirstAuthorization}); }
    if (source['_dateOfFirstAuthorization']) {
      if (this.dateOfFirstAuthorization) { this.dateOfFirstAuthorization.addExtendedProperties(source._dateOfFirstAuthorization!); }
      else { this.dateOfFirstAuthorization = new fhir.FhirDateTime(source._dateOfFirstAuthorization as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['internationalBirthDate']) { this.internationalBirthDate = new fhir.FhirDateTime({value: source.internationalBirthDate}); }
    if (source['_internationalBirthDate']) {
      if (this.internationalBirthDate) { this.internationalBirthDate.addExtendedProperties(source._internationalBirthDate!); }
      else { this.internationalBirthDate = new fhir.FhirDateTime(source._internationalBirthDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['legalBasis']) { this.legalBasis = new fhir.CodeableConcept(source.legalBasis); }
    if (source['jurisdictionalAuthorization']) { this.jurisdictionalAuthorization = source.jurisdictionalAuthorization.map((x) => new fhir.MedicinalProductAuthorizationJurisdictionalAuthorization(x)); }
    else { this.jurisdictionalAuthorization = []; }
    if (source['holder']) { this.holder = new fhir.Reference(source.holder); }
    if (source['regulator']) { this.regulator = new fhir.Reference(source.regulator); }
    if (source['procedure']) { this.procedure = new fhir.MedicinalProductAuthorizationProcedure(source.procedure); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'MedicinalProductAuthorization' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: MedicinalProductAuthorization.resourceType:"MedicinalProductAuthorization"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["country"]) { this.country.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.country[${i}]`)); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.jurisdiction[${i}]`)); }) }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["statusDate"]) { issues.push(...this.statusDate.doModelValidation(expression+'.statusDate')); }
    if (this["restoreDate"]) { issues.push(...this.restoreDate.doModelValidation(expression+'.restoreDate')); }
    if (this["validityPeriod"]) { issues.push(...this.validityPeriod.doModelValidation(expression+'.validityPeriod')); }
    if (this["dataExclusivityPeriod"]) { issues.push(...this.dataExclusivityPeriod.doModelValidation(expression+'.dataExclusivityPeriod')); }
    if (this["dateOfFirstAuthorization"]) { issues.push(...this.dateOfFirstAuthorization.doModelValidation(expression+'.dateOfFirstAuthorization')); }
    if (this["internationalBirthDate"]) { issues.push(...this.internationalBirthDate.doModelValidation(expression+'.internationalBirthDate')); }
    if (this["legalBasis"]) { issues.push(...this.legalBasis.doModelValidation(expression+'.legalBasis')); }
    if (this["jurisdictionalAuthorization"]) { this.jurisdictionalAuthorization.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.jurisdictionalAuthorization[${i}]`)); }) }
    if (this["holder"]) { issues.push(...this.holder.doModelValidation(expression+'.holder')); }
    if (this["regulator"]) { issues.push(...this.regulator.doModelValidation(expression+'.regulator')); }
    if (this["procedure"]) { issues.push(...this.procedure.doModelValidation(expression+'.procedure')); }
    return issues;
  }
}
